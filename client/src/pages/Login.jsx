import { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../graphql/mutations";
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
import {
  Container,
  TextField,
  Divider,
  Link,
  useColorScheme,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";

//Imported Group Code
const headContent = (
  <>
    <title>Login</title>
    <meta name="description" content="Login for Project-3 Starter Code." />
  </>
);

export default function Login() {
  const [loginUser, { error, data, loading }] = useMutation(LOGIN_USER);
  const [state, dispatch] = useGlobalContext();
  const { isAuthenticated } = state;
  const { mode } = useColorScheme();

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
                  Login
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
                  <TextField
                    placeholder="Email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    fullWidth
                  />
                  <TextField
                    placeholder="Password"
                    name="password"
                    type="password"
                    value={formState.password}
                    onChange={handleChange}
                    fullWidth
                  />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Link
                      component="button"
                      variant="body2"
                      sx={{ color: mode === "dark" ? "inherit" : "" }}
                    >
                      <Typography variant="body2" sx={{ color: "inherit" }}>
                        Forgot Password?
                      </Typography>
                    </Link>
                  </Box>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    disabled={loading}
                  >
                    {loading ? "Loading..." : "Submit"}
                  </Button>
                </Box>
                {error && (
                  <Typography color="error">{error.message}</Typography>
                )}
                <Typography sx={{ textAlign: "center" }}>
                  Don't have an account?{" "}
                  <Link
                    href="/signup"
                    variant="body2"
                    sx={{ color: mode === "dark" ? "inherit" : "" }}
                  >
                    Sign up
                  </Link>
                </Typography>
                <Divider>or</Divider>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Button
                    fullWidth
                    variant={mode === "dark" ? "contained" : "outlined"}
                    startIcon={<GoogleIcon />}
                  >
                    Sign in with Google
                  </Button>
                  <Button
                    fullWidth
                    variant={mode === "dark" ? "contained" : "outlined"}
                    startIcon={<AppleIcon />}
                  >
                    Sign in with Apple
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
