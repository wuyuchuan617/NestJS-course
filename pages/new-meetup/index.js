import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import Head from "next/head";

// import Layout from "../../components/layout/Layout";

function NewMeetupPage() {
  const router = useRouter();

  // form onSubmit
  const AddMeetupHandler = async (enteredMeetupData) => {
    // console.log(enteredMeetupData);

    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      header: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log("data", data);

    router.push("/");
  };
  return (
    <>
      <Head>
        <title>add a react meetup</title>
        <meta name="descrtopn" content="add a huge meetup" />
      </Head>
      <NewMeetupForm onAddMeetup={AddMeetupHandler} />
    </>
  );
}

export default NewMeetupPage;
