import React from "react";
import "./Middlebar.css";

import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { userselect } from "../../../features/counter/userSlice";
import { useDispatch } from "react-redux";
import PostModal from "../Middlebar/PostModal";
import { selectPostShow } from "../../../features/counter/postSlice";
import { db } from "../../Firebase/firebase";
import { useState } from "react";
import { useEffect } from "react";
import { openPostShow } from "../../../features/counter/postSlice";
import { closePostShow } from "../../../features/counter/postSlice";
const useStyles = makeStyles((theme) => ({
  Header__top_Padding: {
    paddingTop: 12,
    paddingLeft: 16,
    paddingBottom: 5,
    paddingRight: 20,
  },
  Post: {
    marginBottom: 50,
  },
}));
function Middlebar() {
  const usrData = useSelector(userselect);
  const post = useSelector(selectPostShow);
  const dispatch = useDispatch();
  console.log(post);
  const classes = useStyles();

  const [todos, setTodos] = useState([]);

  const getTodos = () => {
    const getFromFirebase = db.collection("content");

    getFromFirebase.onSnapshot((querySnapShot) => {
      const saveFirebaseTodos = [];

      querySnapShot.forEach((doc) => {
        saveFirebaseTodos.push(doc.data());
        console.log(doc.data());
      });
      console.log(saveFirebaseTodos);
      setTodos(saveFirebaseTodos);
    });
  };

  useEffect(() => {
    console.log(todos);
    getTodos();
  }, []);

  return (
    <div>
      <div className="Middlebar__Header">
        <Paper elevation={1} sx={{ borderRadius: 3 }}>
          <div className={classes.Header__top_Padding}>
            <div className="Header__top">
              <Avatar
                className="header__top__Icons"
                aria-label="recipe"
                src={usrData.photourl}
              />

              <button
                className="Header__topo__input"
                onClick={() => {
                  dispatch(openPostShow());
                }}
              >
                Start a post
              </button>
            </div>
          </div>

          <div className="Header__Bottom">
            <div className="Photos">
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
              <p>Photo</p>
            </div>
            <div className="videos">
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
              <p>Videos</p>
            </div>
            <div className="Events">
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
                <path d="M3 3v15a3 3 0 003 3h12a3 3 0 003-3V3zm13 1.75A1.25 1.25 0 1114.75 6 1.25 1.25 0 0116 4.75zm-8 0A1.25 1.25 0 116.75 6 1.25 1.25 0 018 4.75zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V9h14zm-5.9-3a1 1 0 00-1-1H12a3.12 3.12 0 00-1 .2l-1-.2v-3h3.9v1H11v1.15a3.7 3.7 0 011.05-.15 1.89 1.89 0 012 1.78V15a1.92 1.92 0 01-1.84 2H12a1.88 1.88 0 01-2-1.75 1 1 0 010-.25h1a.89.89 0 001 1h.1a.94.94 0 001-.88z"></path>
              </svg>
              <p>Event</p>
            </div>
            <div className="write__Article">
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
                <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
              </svg>
              <p>Write article</p>
            </div>
          </div>
        </Paper>
      </div>
      <hr />
      {todos.map((data, id) => {
        return (
          <div className="Middlebar">
            <div className="Post">
              <Paper
                elevation={1}
                sx={{ borderRadius: 3 }}
                className={classes.Post}
              >
                <div className="Post__header">
                  <div className="Post____header">
                    <div className="Post__header__Details">
                      <Avatar
                        className="header__top__IconsS"
                        aria-label="recipe"
                        src={data.photo}
                      />
                      <div className="Post__header__Details__text">
                        <p>
                          <p>{data.userName}</p>
                          <p> • 1st</p>
                        </p>
                        <p>CSE UG | Front End Developer | Learner</p>
                        <div>
                          <p className="day__time"> 1d</p>
                          <span> • </span>
                          <div className="svg__icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 16 16"
                              data-supported-dps="16x16"
                              fill="currentColor"
                              class="mercado-match"
                              width="14"
                              height="14"
                              focusable="false"
                            >
                              <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="More__Icons__more">
                        <button>
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
                            <path d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="Description">{data.content}</div>
                  </div>
                </div>
                <div className="post__Images">
                  {data.imageURL && <img src={data.imageURL} />}
                  {/* <img src={data.imageURL} /> */}
                </div>
                <div className="post__Reacters">
                  <div className="post__Reacters__left">
                    <div>
                      <img
                        src="https://static-exp1.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt"
                        alt="like"
                      />
                    </div>
                    <div>
                      <img
                        src="https://static-exp1.licdn.com/sc/h/lhxmwiwoag9qepsh4nc28zus"
                        alt="insightful"
                      ></img>
                    </div>

                    <div>
                      <img
                        src="https://static-exp1.licdn.com/sc/h/3wqhxqtk2l554o70ur3kessf1"
                        alt="support"
                      />
                    </div>

                    <div>1,673 Vinayak Sharma and 21,672 others</div>
                  </div>
                  <div className="post__Reacters__right">736 comments</div>
                </div>
                <div className="Social__button">
                  <div className="like">
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
                      <path d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"></path>
                    </svg>
                    Like
                  </div>
                  <div className="comment">
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
                      <path d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"></path>
                    </svg>
                    Comment
                  </div>
                  <div className="share">
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
                      <path d="M23 12l-4.61 7H16l4-6H8a3.92 3.92 0 00-4 3.84V17a4 4 0 00.19 1.24L5.12 21H3l-.73-2.22A6.4 6.4 0 012 16.94 6 6 0 018 11h12l-4-6h2.39z"></path>
                    </svg>
                    Share
                  </div>
                  <div className="send">
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
                      <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
                    </svg>
                    Send
                  </div>
                </div>
              </Paper>
            </div>
            {/* {post && (
              <PostModal
                name={usrData.displayName}
                photu={usrData.photourl}
                dispatch={dispatch}
                closePostShow={closePostShow}
              />
            )} */}
          </div>
        );
      })}
      {post && (
        <PostModal
          name={usrData.displayName}
          photu={usrData.photourl}
          dispatch={dispatch}
          closePostShow={closePostShow}
        />
      )}
    </div>
  );
}

export default Middlebar;
