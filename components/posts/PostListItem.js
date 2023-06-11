import Link from "next/link";

import classes from "./PostListItem.module.css";

function PostListItem(props) {
  return (
    <Link
      className={classes.displayContents}
      href={`/posts/${props.id}`}
      key={props.id}
    >
      {/* <a > */}
      <div className={classes.card}>
        <div className="row">
          <div className="col-12">
            <h2 className="text-center">{props.title}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h5 className="text-center">{props.description}</h5>
          </div>
        </div>
      </div>
      {/* </a> */}
    </Link>
  );
}

export default PostListItem;
