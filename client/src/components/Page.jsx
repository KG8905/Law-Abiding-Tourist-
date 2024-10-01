import { Helmet } from "react-helmet-async";
import Header from "./Header";
import Footer from "./Footer";
import { useGlobalContext } from "../context/GlobalContext";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    paddingTop: "80px",
    flexGrow: "1",
  },
};

const defaultHeadContent = (
  <>
    <title>Please Change Me!</title>
    <meta
      name="description"
      content="This is the default description of my App."
    />
  </>
);

export default function Page({
  isProtected = false,
  headContent = defaultHeadContent,
  children,
}) {
  const [state, dispatch] = useGlobalContext();
  const { isAuthenticated } = state;

  return (
    <>
      <Helmet>{headContent}</Helmet>
      <Header />
      <div style={styles.container}>
        <main style={styles.main}>
          {isProtected && !isAuthenticated ? <div>Unauthorized</div> : children}
        </main>
        <Footer />
      </div>
    </>
  );
}
