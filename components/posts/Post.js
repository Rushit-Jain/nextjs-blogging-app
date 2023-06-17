/*TO DO
1. Change buttons icons according to if user has upvoted or downvoted
2. Add upvote and downvote functionality
3. Add view functionality (send request to server to increment numberOfViews every time a user visits the page)
4. Add comment functionality (open a modal with a textarea and anonymity boolean to add a comment)
5. Add comment list functionality
*/

import { useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import classes from "./Post.module.css";
import { Button, IconButton } from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import AddCommentOutlinedIcon from "@mui/icons-material/AddCommentOutlined";

function Post(props) {
  const post = props.post;
  const [isUpvoted, setIsUpvoted] = useState(
    post.upvoters.includes("REPLACE_USER_ID")
  );
  const [isDownvoted, setIsDownvoted] = useState(
    post.upvoters.includes("REPLACE_USER_ID")
  );
  const [upvoteCount, setUpvoteCount] = useState(post.upvoters.length);
  const [downvoteCount, setDownvoteCount] = useState(post.downvoters.length);

  //send req to server to increment numberOfViews here

  function handleUpvoteClick() {
    setIsUpvoted(() => {
      let upvoted = !isUpvoted;
      if (upvoted) {
        if (isDownvoted) {
          setDownvoteCount((prevCount) => prevCount - 1);
          //send req to reduce downvote
        }
        setIsDownvoted(false);
        setUpvoteCount((prevCount) => prevCount + 1);
      } else {
        setUpvoteCount((prevCount) => prevCount - 1);
      }
      return upvoted;
    });
    //send req to server to add upvote here
  }

  function handleDownvoteClick() {
    setIsDownvoted(() => {
      let downvoted = !isDownvoted;
      if (downvoted) {
        if (isUpvoted) {
          setUpvoteCount((prevCount) => prevCount - 1);
          //send req to reduce upvote
        }
        setIsUpvoted(false);
        setDownvoteCount((prevCount) => prevCount + 1);
      } else {
        setDownvoteCount((prevCount) => prevCount - 1);
      }
      return !isDownvoted;
    });
    //send req to server to add downvote here
  }

  return (
    <div className="container">
      <div className={"row " + classes.card}>
        <h1 className={classes.title}>{post.title}</h1>
        <div className="row">
          <div className={"col-lg-6 col-12 " + classes.viewSpan}>
            <span>
              <VisibilityOutlinedIcon />
              &nbsp;
              {post.numberOfViews + 1}
            </span>
            {/* &nbsp;&nbsp; */}
          </div>
          <div className={"col-lg-6 col-12 " + classes.voteButtons}>
            <span>
              <IconButton
                aria-label="fingerprint"
                color="success"
                onClick={handleUpvoteClick}
              >
                {isUpvoted ? <ThumbUpAltIcon /> : <ThumbUpOffAltIcon />}
              </IconButton>
              &nbsp;
              {upvoteCount}
            </span>
            &nbsp;&nbsp;
            <span>
              <IconButton
                aria-label="fingerprint"
                color="error"
                onClick={handleDownvoteClick}
              >
                {isDownvoted ? <ThumbDownAltIcon /> : <ThumbDownOffAltIcon />}
              </IconButton>
              &nbsp;
              {downvoteCount}
            </span>
          </div>
        </div>
        <hr />
        <h4 className={classes.description}>Description: {post.description}</h4>
        <ReactMarkdown
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  {...props}
                  children={String(children).replace(/\n$/, "")}
                  style={atomDark}
                  language={match[1]}
                  PreTag="div"
                />
              ) : (
                <code {...props} className={className}>
                  {children}
                </code>
              );
            },
          }}
        >
          {post.content}
        </ReactMarkdown>
        {post.authorName && (
          <>
            <div className="row">~By {post.authorName}</div>
            <div className="row">{post.authorEmail}</div>
          </>
        )}
        {!post.authorName && (
          <>
            <div className="row">~By Anonymous</div>
          </>
        )}
        <div className="row mt-3">
          <div className="col-lg-6 col-12">
            <Button
              variant="contained"
              startIcon={<AddCommentOutlinedIcon />}
              color="secondary"
            >
              Comment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
