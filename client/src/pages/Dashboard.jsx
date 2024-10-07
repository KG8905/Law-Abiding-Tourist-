import Page from "../components/Page";

const headContent = (
  <>
    <title>Travel! - Home</title>
    <meta name="description" content="This is the home page of my app." />
  </>
);

export default function Dashboard() {
  return (
    <Page isProtected={true} headContent={headContent}>
      <div>Dashboard</div>
    </Page>
  );
}
