import React from "react";
import "./Leftbar.css";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { userselect } from "../../../features/counter/userSlice";
import { useSelector } from "react-redux";
import { selectMode } from "../../../features/counter/modeSlice";
function Leftbar() {
  const usrData = useSelector(userselect);
  const BackgroundMode = useSelector(selectMode);
  const DarkMode = {
    syntax: "#ddd",
    username: "#ddd",
    lerner: "#ddd",
    ui: "#424242",
    bg: "#555",
    boderright: "#e5e7eb",
    inputColr: " #212121",
    borderbottom: "black",
    viewprofileleft: "#ddd",
    viewprofile: "white",
    myitem: "",
  };

  const LightMode = {
    lerner: "rgba(0, 0, 0, 0.6)",
    username: "rgba(0, 0, 0, 0.9)",
    syntax: "#000000",
    ui: "white",
    bg: "#eee",
    boderright: "#212121",
    inputColr: "#eef3f8",

    borderbottom: "whitesmoke",
    viewprofile: "#0a66c2",
    viewprofileleft: "rgba(0, 0, 0, 0.4)",
    myitem: "rgba(0, 0, 0, 0.6)",
  };

  const Theme = BackgroundMode ? DarkMode : LightMode;

  return (
    <div className="Left__Bar">
      <Paper
        elevation={1}
        sx={{ borderRadius: 3 }}
        style={{ backgroundColor: Theme.ui }}
      >
        <div className="card">
          <div className="Img__Header"></div>
          <div className="card_photu">
            <Avatar
              className="Card__Photo"
              aria-label="recipe"
              src={usrData.photourl}
            />
          </div>
          <div className="card__text">
            <p style={{ color: Theme.username }}>
              {/* Deepanshu Sarswat */}
              {usrData.displayName}
            </p>
            <p style={{ color: Theme.lerner }}>
              CSE UG | Front End Developer |
            </p>

            <p style={{ color: Theme.lerner }}> Learner</p>
          </div>
        </div>
        <div
          className="Who__viewed__profile"
          style={{ borderBottom: "2px solid Theme.borderbottom" }}
        >
          <div className="V__on__profile">
            <p style={{ color: Theme.viewprofileleft }}>
              Who viewed your profile
            </p>
            <p style={{ color: Theme.viewprofile }}>55</p>
          </div>
          <div className="V__on__Post">
            <p style={{ color: Theme.viewprofileleft }}>Views of your post</p>
            <p style={{ color: Theme.viewprofile }}>545</p>
          </div>
        </div>
        <div className="My__itmes">
          <p
            className="My__itmes__child"
            style={{ color: Theme.viewprofileleft }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="currentColor"
              width="16"
              height="16"
              focusable="false"
            >
              <path d="M12 1H4a1 1 0 00-1 1v13.64l5-3.36 5 3.36V2a1 1 0 00-1-1z"></path>
            </svg>
            My items
          </p>
        </div>
      </Paper>
    </div>
  );
}

export default Leftbar;
