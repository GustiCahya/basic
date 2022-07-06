import { useRouter } from "next/router";

export default function Car({ car }) {
  const router = useRouter();
  const { id } = router.query;
  return <h1>Mobil {id}</h1>;
}

export async function getStaticProps() {
  const car = {
    id: "tesla"
  };
  return {
    props: { car },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: {id: "Tesla"} }],
    fallback: false,
  };
}
