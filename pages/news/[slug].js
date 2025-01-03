import { useRouter } from "next/router";

const DetailPage = () => {
  const router = useRouter();

  return (
    <>
      <h1>The Detail Page</h1>
      <p>{router.query.slug}</p>
    </>
  );
};

export default DetailPage;
