import PostList from "../components/posts/PostsList";
const fs = require("fs");
const path = require("path");

function HomePage(props) {
  return (
    <div>
      <PostList posts={props.posts} />
    </div>
  );
}

export default HomePage;

export async function getStaticProps(context) {
  let data = fs.readFileSync(
    path.join(process.cwd(), "server-utilities/mock-data/posts.json"),
    "utf-8"
  );
  data = JSON.parse(data);
  data = data.sort((a, b) => {
    return b.numberOfViews - a.numberOfViews;
  });
  let posts = [];
  if (data.length > 8) posts = data.slice(0, 8);
  else posts = data;
  return {
    props: { posts },
  };
}
