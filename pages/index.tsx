export default function Index() {
  return <></>;
}

export async function getStaticProps() {
  return {
    redirect: {
      destination: "/home",
    },
  };
}
