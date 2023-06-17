import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import classes from "./Post.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-regular-svg-icons";

function Post(props) {
  const post = props.post;

  return (
    <div className="container">
      <div className="row"></div>
      <div className={"row " + classes.card}>
        <h1 className={classes.title}>{post.title}</h1>
        <div className="row">
          <div className="col-lg-6 col-12">
            <span>
              <FontAwesomeIcon icon={faEye} />
              &nbsp;
              {post.numberOfViews}
            </span>
            &nbsp;&nbsp;
            <span>
              <FontAwesomeIcon icon={faThumbsUp} />
              &nbsp;
              {post.upvoters.length}
            </span>
            &nbsp;&nbsp;
            <span>
              <FontAwesomeIcon icon={faThumbsDown} />
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
      </div>
    </div>
  );
}

export default Post;
