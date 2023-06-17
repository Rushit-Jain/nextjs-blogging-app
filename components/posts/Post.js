/*TO DO
1. Change buttons icons according to if user has upvoted or downvoted
2. Add upvote and downvote functionality
3. Add view functionality (send request to server to increment numberOfViews every time a user visits the page)
4. Add comment functionality (open a modal with a textarea and anonymity boolean to add a comment)
5. Add comment list functionality
*/

import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import classes from "./Post.module.css";
import { IconButton } from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbDownOffAlt from "@mui/icons-material/ThumbDownOffAlt";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import AddCommentOutlinedIcon from "@mui/icons-material/AddCommentOutlined";

function Post(props) {
  const post = props.post;

  return (
    <div className="container">
      <div className={"row " + classes.card}>
        <h1 className={classes.title}>{post.title}</h1>
        <div className="row">
          <div className="col-lg-6 col-12">
            <span>
              <VisibilityOutlinedIcon />
              &nbsp;
              {post.numberOfViews}
            </span>
            &nbsp;&nbsp;
            <span>
              <ThumbUpAltIcon />
              &nbsp;
              {post.upvoters.length}
            </span>
            &nbsp;&nbsp;
            <span>
              <ThumbDownAltIcon />
              &nbsp;
              {post.downvoters.length}
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
            <IconButton aria-label="fingerprint">
              <AddCommentOutlinedIcon />
            </IconButton>
            <IconButton aria-label="fingerprint" color="success">
              <ThumbUpOffAltIcon />
            </IconButton>
            <IconButton aria-label="fingerprint" color="error">
              <ThumbDownOffAlt />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
