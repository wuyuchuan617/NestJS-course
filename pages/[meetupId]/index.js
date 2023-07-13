import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";

function MeetupDetails(props) {
  const { meetupData } = props;

  return (
    <>
      <Head>
        <title>{meetupData.title}</title>
        <meta name="descrtopn" content={meetupData.description} />
      </Head>
      <MeetupDetail
        image={meetupData.image}
        title={meetupData.title}
        address={meetupData.address}
        description={meetupData.description}
        publishTime={meetupData.publishTime}
      />
    </>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://yuchuanwu:Shin0915@cluster0.ivtm9.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray(); //{} all
  client.close();
  return {
    paths: meetups.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
    fallback: "blocking", // true or false or 'blocking'
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;
  //   console.log(meetupId);
  // print in terminal server not in F12 console

  const client = await MongoClient.connect(
    "mongodb+srv://yuchuanwu:Shin0915@cluster0.ivtm9.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
        publishTime: selectedMeetup.publishTime || 0,
      },
    },
    revalidate: 10,
  };
}

export default MeetupDetails;
