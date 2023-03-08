import React from "react";
import "./RightBar.css";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import { selectMode } from "../../../features/counter/modeSlice";
function RightBar() {
  const BackgroundMode = useSelector(selectMode);
  const DarkMode = {
    syntax: "#ddd",
    ui: "#424242",
    bg: "#555",
    LinkedInNews: "#ddd",
    linkdinreader: "#ddd",
  };

  const LightMode = {
    syntax: "#000000",
    ui: "white",
    bg: "#eee",
    boderright: "#212121",
    inputColr: "#eef3f8",
    LinkedInNews: "rgba(0, 0, 0, 0.8)",
    linkdinreader: "rgba(0, 0, 0, 0.5)",
  };

  const Theme = BackgroundMode ? DarkMode : LightMode;
  return (
    <div className="RightBar">
      <Paper
        elevation={1}
        sx={{ borderRadius: 3 }}
        style={{ backgroundColor: Theme.ui }}
      >
        <div className="News_CArd">
          <div className="News_CArd__heading">
            <p style={{ color: Theme.LinkedInNews }}>LinkedIn News</p>
            <svg
              style={{ fill: Theme.LinkedInNews }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="rgba(0,0,0,0.6)"
              width="16"
              height="16"
              focusable="false"
            >
              <path d="M12 2H4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zm-3 8v2H7.5A1.5 1.5 0 016 10.5a1.56 1.56 0 01.1-.5l1.08-3h2.13l-1.09 3zm0-3.75A1.25 1.25 0 1110.25 5 1.25 1.25 0 019 6.25z"></path>
            </svg>
          </div>
          <ul className="Ul_News_list">
            <li style={{ color: Theme.LinkedInNews }}>
              LinkedIn News Mayhem and hope in crypto markets
            </li>
            <li style={{ color: Theme.linkdinreader }}>
              9h ago • 2,660 readers
            </li>
          </ul>
          <ul className="Ul_News_list">
            <li style={{ color: Theme.LinkedInNews }}>
              LinkedIn News Mayhem and hope in crypto markets
            </li>
            <li style={{ color: Theme.linkdinreader }}>
              9h ago • 2,660 readers
            </li>
          </ul>
          <ul className="Ul_News_list">
            <li style={{ color: Theme.LinkedInNews }}>
              LinkedIn News Mayhem and hope in crypto markets
            </li>
            <li style={{ color: Theme.linkdinreader }}>
              9h ago • 2,660 readers
            </li>
          </ul>
          {/* <ul className="Ul_News_list">
            <li>LinkedIn News Mayhem and hope in crypto markets</li>
            <li>9h ago • 2,660 readers</li>
          </ul>
          <ul className="Ul_News_list">
            <li>LinkedIn News Mayhem and hope in crypto markets</li>
            <li>9h ago • 2,660 readers</li>
          </ul>
          <ul className="Ul_News_list">
            <li>LinkedIn News Mayhem and hope in crypto markets</li>
            <li>9h ago • 2,660 readers</li>
          </ul> */}
          <ul className="Ul_News_list">
            <li style={{ color: Theme.LinkedInNews }}>
              LinkedIn News Mayhem and hope in crypto markets
            </li>
            <li style={{ color: Theme.linkdinreader }}>
              9h ago • 2,660 readers
            </li>
          </ul>
          <ul className="Ul_News_list">
            <li style={{ color: Theme.LinkedInNews }}>
              LinkedIn News Mayhem and hope in crypto markets
            </li>
            <li style={{ color: Theme.linkdinreader }}>
              9h ago • 2,660 readers
            </li>
          </ul>

          <ul className="Ul_News_list">
            <li style={{ color: Theme.LinkedInNews }}>
              LinkedIn News Mayhem and hope in crypto markets
            </li>
            <li style={{ color: Theme.linkdinreader }}>
              9h ago • 2,660 readers
            </li>
          </ul>
        </div>
      </Paper>
    </div>
  );
}

export default RightBar;
