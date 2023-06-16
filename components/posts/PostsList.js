import { useState, useEffect } from "react";
import PostListItem from "./PostListItem";
import classes from "./PostsList.module.css";

function PostList(props) {
  const posts = props.posts;
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("/api/posts")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setData(JSON.parse(res.posts));
  //     });
  // }, []);

  let mappedData = posts.map((post) => {
    return (
      <div key={post._id} className="col-lg-3 col-12">
        <PostListItem
          title={post.title}
          description={post.description}
          _id={post._id}
          slug={post.slug}
          numberOfViews={post.numberOfViews}
        />
      </div>
    );
  });
  return <div className="row">{mappedData}</div>;
}

export default PostList;
