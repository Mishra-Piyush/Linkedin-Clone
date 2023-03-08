import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@material-ui/core/Container";
import "./Body.css";
import RightBar from "../BodyContent/RightBar/RightBar";
import Middlebar from "../BodyContent/Middlebar/Middlebar";
import Leftbar from "../BodyContent/LeftBar/Leftbar";
import { useSelector } from "react-redux";
import { selectMode } from "../../features/counter/modeSlice";
function Body() {
  const BackgroundMode = useSelector(selectMode);
  const DarkMode = {
    syntax: "#ddd",
    ui: "#212121",
    bg: "#555",
    boderright: "#e5e7eb",
    inputColr: " #212121",
  };

  const LightMode = {
    syntax: "#000000",
    ui: "#f3f2ef",
    bg: "#eee",
    boderright: "#212121",
    inputColr: "#eef3f8",
  };

  const Theme = BackgroundMode ? DarkMode : LightMode;
  return (
    <div className="body" style={{ backgroundColor: Theme.ui }}>
      <Container maxWidth="lg">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item md={2.5} xs={12}>
              {" "}
              <Leftbar />{" "}
            </Grid>
            <Grid item md={5.8} xs={12}>
              {" "}
              <Middlebar />{" "}
            </Grid>
            <Grid item md={3.5} xs={12}>
              <RightBar />{" "}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default Body;
