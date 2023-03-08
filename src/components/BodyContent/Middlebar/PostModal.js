import React, { useState } from "react";
import "./PostModal.css";
import { storage } from "../../Firebase/firebase";
import { storageRef } from "../../Firebase/firebase";
import { ref } from "@firebase/storage";
import { uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db } from "../../Firebase/firebase";
import { useSelector } from "react-redux";
import { selectMode } from "../../../features/counter/modeSlice";
import firebase from "@firebase/app-compat";
import Avatar from "@mui/material/Avatar";
import ReactPlayer from "react-player/youtube";
import Button from "@mui/material/Button";
function PostModal({ name, photu, closePostShow, dispatch }) {
  const [imputvalue, setimputvalue] = useState("");
  const [shareImage, setshareImage] = useState("");
  const [shareVideo, setshareVideo] = useState("");
  const [sharepdf, setsharepdf] = useState("");
  const hashtag = () => {
    const hshtags = setimputvalue([...imputvalue, "#"]);
    // commma hatana hai
  };
  const imagevalueChange = (e) => {
    const image = e.target.files[0];

    if (image === "" || image === undefined) {
      alert(`Not an a image , the file is ${typeof image}`);
    }
    setshareImage(image);
  };
  console.log(shareImage.type);
  const vdovalueChange = (e) => {
    const videoo = e.target.files[0];
    setshareVideo(videoo);
    console.log(videoo);
    console.log(videoo.size);
  };
  const pdfvalueChange = (e) => {
    const pdf = e.target.files[0];
    if (pdf.type === "application/pdf") {
      setsharepdf(pdf);
    } else {
      alert("We only accept PDF format");
    }
    // setsharepdf(pdf);
    console.log(pdf.type);
  };

  // postpostData

  const postpostData = () => {
    if (shareImage) {
      const metadata = {
        contentType: "image/png",
      };
      const stoorageRef = ref(storage, `images/${shareImage.name}`);
      const uploadTask = uploadBytesResumable(
        stoorageRef,
        shareImage,
        metadata
      );
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          switch (error.code) {
            case "storage/unauthorized":
              break;
            case "storage/canceled":
              break;
            // ...
            case "storage/unknown":
              break;
          }
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            db.collection("content").add({
              content: imputvalue,
              photo: photu,
              userName: name,
              imageURL: downloadURL,
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            });
          });
        }
      );
    }

    if (shareVideo) {
      const metadata = {
        contentType: "video/*",
      };
      const stoorageRef = ref(storage, `videos/${shareVideo.name}`);
      const uploadTask = uploadBytesResumable(
        stoorageRef,
        shareImage,
        metadata
      );
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          switch (error.code) {
            case "storage/unauthorized":
              break;
            case "storage/canceled":
              break;
            // ...
            case "storage/unknown":
              break;
          }
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            db.collection("content").add({
              content: imputvalue,
              photo: photu,
              userName: name,
              videoURL: downloadURL,
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            });
          });
        }
      );
    }
    if (sharepdf) {
      const metadata = {
        contentType: ".pdf",
      };
      const stoorageRef = ref(storage, `pdfs/${sharepdf.name}`);
      const uploadTask = uploadBytesResumable(
        stoorageRef,
        shareImage,
        metadata
      );
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          switch (error.code) {
            case "storage/unauthorized":
              break;
            case "storage/canceled":
              break;
            // ...
            case "storage/unknown":
              break;
          }
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            db.collection("content").add({
              content: imputvalue,
              photo: photu,
              userName: name,
              videoURL: downloadURL,
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            });
          });
        }
      );
    }

    if ((shareImage === false, shareVideo === false, sharepdf === false)) {
      db.collection("content").add({
        content: imputvalue,
        photo: photu,
        userName: name,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }

    dispatch(closePostShow());
  };
  const BackgroundMode = useSelector(selectMode);
  const DarkMode = {
    syntax: "#ddd",
    ui: "#424242",
    bg: "#555",
    boderright: "#e5e7eb",
    inputColr: " #212121",
    bg: "rgba(255,255 , 255, 0.01)",
  };

  const LightMode = {
    bg: "rgba(0, 0, 0, 0.05)",
    syntax: "#000000",
    ui: "white",
    bg: "#eee",
    boderright: "#212121",
    inputColr: "#eef3f8",
  };

  const Theme = BackgroundMode ? DarkMode : LightMode;

  return (
    <div className="Post__MOdal" style={{ backgroundColor: Theme.boderright }}>
      <div className="content__post_modal">
        <div className="content__post_modal__upper">
          <div className="create_a_post">
            <div className="create_a_post_child">Create a post</div>
            <div
              className="close_icon"
              onClick={() => {
                dispatch(closePostShow());
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                class="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M13.42 12L20 18.58 18.58 20 12 13.42 5.42 20 4 18.58 10.58 12 4 5.42 5.42 4 12 10.58 18.58 4 20 5.42z"></path>
              </svg>
            </div>
          </div>
          <div className="create_a_post__profile">
            <Avatar
              className="header__modsl__Icons"
              aria-label="recipe"
              src={photu}
            />
            <p>{name}</p>
          </div>
          <div className="post__Content">
            <input
              type="text"
              name="content"
              placeholder="what do want to talk about ?"
              value={imputvalue}
              onChange={(e) => setimputvalue(e.target.value)}
            />

            {console.log(imputvalue)}
          </div>
          <div className="posted__image">
            {shareImage && (
              <img
                src={URL.createObjectURL(shareImage)}
                style={{ width: "100%" }}
              />
            )}
            {
              shareVideo && (
                <video width="100%" controls>
                  <source
                    src={URL.createObjectURL(shareVideo)}
                    type="video/mp4"
                  />
                </video>
              )

              // <ReactPlayer url={shareVideo} width={"100"}
            }

            {sharepdf && (
              <embed
                src={URL.createObjectURL(sharepdf)}
                width="800px"
                height="2100px"
              />
            )}
          </div>
        </div>
        <div className="content__post_modal__bottom">
          <div className="hash_Tag_Button">
            <Button size="large" onClick={hashtag}>
              Add hashtag
            </Button>
          </div>
          <div>
            <input
              type="file"
              accept="image/gif , image/jpeg , image/png"
              name="image"
              id="file"
              style={{ display: "none" }}
              onChange={imagevalueChange}
            />
            <input
              type="file"
              accept="audio/*,video/*,"
              name="video"
              id="videofile"
              style={{ display: "none" }}
              onChange={vdovalueChange}
            />

            <input
              type="file"
              id="pdffile"
              name="pdffile"
              accept=".pptx,.pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              style={{ display: "none" }}
              onChange={pdfvalueChange}
            />
          </div>
          <div className="icon__bottom">
            <div className="icon__bottom__child">
              <div className="icon__logos">
                <div>
                  <label htmlFor="file">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      fill="currentColor"
                      class="mercado-match"
                      width="24"
                      height="24"
                      focusable="false"
                    >
                      <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
                    </svg>
                  </label>
                </div>

                <div>
                  <label htmlFor="videofile">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      fill="currentColor"
                      class="mercado-match"
                      width="24"
                      height="24"
                      focusable="false"
                    >
                      <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
                    </svg>
                  </label>
                </div>

                <div>
                  <label htmlFor="pdffile">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      fill="currentColor"
                      class="mercado-match"
                      width="24"
                      height="24"
                      focusable="false"
                    >
                      <path d="M3 3v15a3 3 0 003 3h9v-6h6V3zm9 8H6v-1h6zm6-3H6V7h12zm-2 8h5l-5 5z"></path>
                    </svg>
                  </label>
                </div>

                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    class="mercado-match"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
                  </svg>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    class="mercado-match"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M22 11.1L20.47 10a1.09 1.09 0 01-.4-1.25l.62-1.81a1.11 1.11 0 00-.7-1.4 1.07 1.07 0 00-.35-.06h-2a1.09 1.09 0 01-1.05-.76l-.59-2A1.09 1.09 0 0015 2a1.11 1.11 0 00-.66.22l-1.69 1.17a1.13 1.13 0 01-1.31 0L9.75 2.22a1.11 1.11 0 00-1.55.16 1.07 1.07 0 00-.2.38L7.41 4.7a1.09 1.09 0 01-1 .76h-2a1.11 1.11 0 00-1.16 1.06 1.34 1.34 0 00.06.4l.63 1.82a1.1 1.1 0 01-.4 1.26L2 11.11a1.1 1.1 0 00-.26 1.53 1.28 1.28 0 00.26.26L3.53 14a1.09 1.09 0 01.4 1.25l-.62 1.8a1.11 1.11 0 00.7 1.4 1.07 1.07 0 00.35.06h2a1.09 1.09 0 011 .76l.64 2a1.12 1.12 0 001.1.73 1.05 1.05 0 00.64-.22l1.6-1.17a1.1 1.1 0 011.31 0l1.6 1.17a1.14 1.14 0 001.75-.55l.62-1.93a1.11 1.11 0 011.05-.76h2a1.11 1.11 0 001.11-1.11 1 1 0 00-.06-.35l-.63-1.82a1.11 1.11 0 01.38-1.26L22 12.89a1.07 1.07 0 00.5-.89 1.1 1.1 0 00-.5-.9zM7 11v-1h10v1zm2 3v-1h6v1z"></path>
                  </svg>
                </div>

                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    class="mercado-match"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M23 20v1H1v-1zM8 9H2v10h6zm7-6H9v16h6zm7 11h-6v5h6z"></path>
                  </svg>
                </div>
              </div>
              <div className="P0st__post__button">
                <Button
                  variant="contained"
                  size="medium"
                  disabled={!imputvalue ? true : false}
                  onClick={postpostData}
                >
                  Post
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostModal;
