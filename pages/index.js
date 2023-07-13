import React, { useEffect, useState } from "react";
import { MongoClient } from "mongodb";
import Head from "next/head";

import MeetupList from "../components/meetups/MeetupList";
// import Layout from "../components/layout/Layout";
// our-domain.com/

// const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: "A First meetup",
//     image:
//       "https://images.unsplash.com/photo-1652104014512-218024eff5a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80",
//     address: "some address 5",
//     description: "first meetup",
//   },
//   {
//     id: "m2",
//     title: "A First meetup",
//     image:
//       "https://images.unsplash.com/photo-1652104014512-218024eff5a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80",
//     address: "some address 6",
//     description: "second meetup",
//   },
// ];

function HomePage(props) {
  const { meetups } = props;

  return (
    <>
      <Head>
        <title>react meetup</title>
        <meta name="descrtopn" content="browse a huge meetup" />
      </Head>
      <MeetupList meetups={meetups} />
    </>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://yuchuanwu:Shin0915@cluster0.ivtm9.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetups = (await meetupsCollection.find().toArray()).reverse();

  return {
    props: {
      meetups: meetups.map((item) => ({
        title: item.title,
        address: item.address,
        image: item.image,
        id: item._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

// export async function getServerSideProps(context) {
//   const client = await MongoClient.connect(
//     "mongodb+srv://yuchuanwu:Shin0915@cluster0.ivtm9.mongodb.net/meetups?retryWrites=true&w=majority"
//   );

//   const db = client.db();

//   const meetupsCollection = db.collection("meetups");
//   const meetups = await meetupsCollection.find().toArray();
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: meetups.map((item) => ({
//         title: item.title,
//         address: item.address,
//         image: item.image,
//         id: item._id.toString(),
//       })),
//     },
//   };
// }

export default HomePage;
