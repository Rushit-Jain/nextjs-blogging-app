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
  let posts = [
    data[0],
    data[1],
    data[2],
    data[3],
    data[4],
    data[5],
    data[6],
    data[7],
  ];
  return {
    props: { posts },
  };
}
