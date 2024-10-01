import { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../graphql/mutations";
import { Navigate } from "react-router-dom";
import Page from "../components/Page";
import AuthService from "../utils/auth";
import { useGlobalContext } from "../context/GlobalContext";

const styles = {
  form: {
    display: "flex",
    flexDirection: "Column",
    width: "300px",
  },
  submitBtn: {
    cursor: "pointer",
  },
};

const headContent = (
  <>
    <title>Change Me! - Login</title>
    <meta name="description" content="Login for Project-3 Starter Code." />
  </>
);

export default function Login() {
  const [loginUser, { error, data, loading }] = useMutation(LOGIN_USER);
  const [state, dispatch] = useGlobalContext();
  const { isAuthenticated } = state;

  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await loginUser({
        variables: { ...formState },
      });

      AuthService.login(data.loginUser.token);
    } catch (e) {
      console.log("ahhh");
      console.error(e);
    }
  };

  if (isAuthenticated) {
    return <Navigate to={"/dashboard"} />;
  }

  return (
    <Page isProtected={false} headContent={headContent}>
      <div>Login</div>
      <form style={styles.form} onSubmit={handleFormSubmit}>
        <input
          placeholder="Email"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
        />
        <input
          placeholder="Password"
          name="password"
          type="password"
          value={formState.password}
          onChange={handleChange}
        />
        {loading ? (
          <button type="submit" disabled={true} style={styles.submitBtn}>
            Loading...
          </button>
        ) : (
          <button type="submit" style={styles.submitBtn}>
            Submit
          </button>
        )}
      </form>
      {error && <h3>{error.message}</h3>}
    </Page>
  );
}
