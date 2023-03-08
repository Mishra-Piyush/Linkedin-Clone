import React from "react";
import "./LoginPage.css";
import Container from "@material-ui/core/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { login } from "../../features/counter/userSlice";
import { useDispatch } from "react-redux";
import { auth } from "../Firebase/firebase";
import { provider } from "../Firebase/firebase";
// import firebase from "../Firebase/firebase";

const useStyles = makeStyles((theme) => ({
  headingLine: {
    color: "#8f5849",
    margin: 0,
  },
}));

function LoginPage() {
  const dispatch = useDispatch();
  const Loginbutton = () => {
    auth
      .signInWithPopup(provider)
      .then((user) => {
        console.log(user.user.displayName);
        dispatch(
          login({
            displayName: user.user.displayName,
            email: user.user.email,
            photourl: user.user.photoURL,
          })
        );
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const classes = useStyles();
  return (
    <div className="LoginPage">
      <Container maxWidth="lg">
        <div className="header">
          <div className="header__logo">
            <img src="/images/login-logo.svg" />
          </div>
          <div className="header__button">
            <a href="/">Join Now</a>
            <a href="/">Sign in</a>
          </div>
        </div>
      </Container>
      <div className="section">
        <Container maxWidth="lg">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4}>
              <Grid item md={6} xs={12}>
                <Typography
                  variant="h3"
                  component="div"
                  margin="none"
                  className={classes.headingLine}
                  sx={{ lineHeight: 1.3, m: 1, fontWeight: "light" }}
                >
                  Welcome to your professional community
                </Typography>

                <div className="button_container">
                  <button className="button" onClick={Loginbutton}>
                    <img src="/images/google.svg" />
                    Sign in with Google
                  </button>
                </div>

                <Box></Box>
              </Grid>
              <Grid item md={6} xs={12}>
                <img src="/images/login-hero.svg" className="hero__Image" />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
    </div>
  );
}

export default LoginPage;
