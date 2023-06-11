import { useState, useEffect } from "react";
import PostListItem from "./PostListItem";
import classes from "./PostsList.module.css";

function PostList(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((res) => {
        setData(JSON.parse(res.posts));
      });
  }, []);

  let mappedData = data.map((post) => {
    return (
      <div key={post.id} className="col-lg-3 col-12">
        <PostListItem
          title={post.title}
          description={post.description}
          id={post.id}
          slug={post.slug}
        />
      </div>
    );
  });
  return <div className="row">{mappedData}</div>;
}

export default PostList;
