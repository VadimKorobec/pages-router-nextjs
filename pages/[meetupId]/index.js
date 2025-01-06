import MeetupDetail from "@/components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/New_York_Midtown_Skyline_at_night_-_Jan_2006_edit1.jpg/1280px-New_York_Midtown_Skyline_at_night_-_Jan_2006_edit1.jpg?uselang=ru"
      title="The First Meetup"
      address="some address"
      description="some description"
    />
  );
};

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
    fallback:false,
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;

  console.log(meetupId);
  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/New_York_Midtown_Skyline_at_night_-_Jan_2006_edit1.jpg/1280px-New_York_Midtown_Skyline_at_night_-_Jan_2006_edit1.jpg?uselang=ru",
        id: meetupId,
        title: "The First Meetup",
        address: "Some address",
        description: "Some description",
      },
    },
  };
};
export default MeetupDetails;
