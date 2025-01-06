
import MeetupList from "@/components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/New_York_Midtown_Skyline_at_night_-_Jan_2006_edit1.jpg/1280px-New_York_Midtown_Skyline_at_night_-_Jan_2006_edit1.jpg?uselang=ru",
    address: "Some address",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/New_York_Midtown_Skyline_at_night_-_Jan_2006_edit1.jpg/1280px-New_York_Midtown_Skyline_at_night_-_Jan_2006_edit1.jpg?uselang=ru",
    address: "Some address",
    description: "This is a second meetup",
  },
];

const HomePage = (props) => {
  return (
    
      <MeetupList meetups={props.meetups} />
    
  );
};

export const getServerSideProps = async (context) => {
  const req = context.req;
  const res = context.res;

  return {
    props: {
      meetups:DUMMY_MEETUPS
    }
  } 
}

// export const getStaticProps = () => {
//   return {
//     props: {
//       meetups:DUMMY_MEETUPS
//     },
//     revalidate: 10,

//   }
// }

export default HomePage;
