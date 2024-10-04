import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../graphql/mutations";
import { Navigate } from "react-router-dom";
import Page from "../components/Page";
import AuthService from "../utils/auth";
import { useGlobalContext } from "../context/GlobalContext";

//-MUI Import Below
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Container, TextField, Divider, FormControl } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";

//Imported Group Code
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
    <title>Change Me! - Sign Up</title>
    <meta
      name="description"
      content="Sign Up page for Project-3 Starter Code."
    />
  </>
);

export default function SignUp() {
  const [addUser, { error, data, loading }] = useMutation(ADD_USER);
  const [state, dispatch] = useGlobalContext();
  const { isAuthenticated } = state;

  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
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
      const { data } = await addUser({
        variables: { ...formState },
      });

      AuthService.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  if (isAuthenticated) {
    return <Navigate to={"/dashboard"} />;
  }

  return (
    <Page isProtected={false} headContent={headContent}>
      <Container sx={{ flexGrow: 1, display: "flex" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexGrow: 1,
          }}
        >
          <Card>
            <CardContent>
              <Stack spacing={4}>
                <Typography
                  component="h1"
                  variant="h4"
                  sx={{ width: "100%", fontSize: "clamp(12px)" }}
                >
                  SignUp
                </Typography>
                <Box
                  component="form"
                  onSubmit={handleFormSubmit}
                  sx={{
                    display: "flex",
                    alightItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    flexGrow: 1,
                    width: "100%",
                    gap: 2,
                  }}
                >
                  <FormControl style={styles.form} onSubmit={handleFormSubmit}>
                    <Stack spacing={2}>
                      <TextField
                        placeholder="User Name"
                        name="userName"
                        type="text"
                        value={formState.firstName}
                        onChange={handleChange}
                      />
                      <TextField
                        placeholder="Email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                      />
                      <TextField
                        placeholder="Password"
                        name="password"
                        type="password"
                        value={formState.password}
                        onChange={handleChange}
                      />
                      {loading ? (
                        <Button
                          type="submit"
                          disabled={true}
                          style={styles.submitBtn}
                        >
                          Loading...
                        </Button>
                      ) : (
                        <Button type="submit" style={styles.submitBtn}>
                          Submit
                        </Button>
                      )}
                    </Stack>
                  </FormControl>
                </Box>
                {error && (
                  <Typography color="error">{error.message}</Typography>
                )}
                <Divider>or</Divider>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<GoogleIcon />}
                  >
                    Sign up with Google
                  </Button>
                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<AppleIcon />}
                  >
                    Sign up with Apple
                  </Button>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Page>
  );
}
