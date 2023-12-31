import PostList from "../components/posts/PostsList";
const db = require("../server-utilities/db");

function HomePage(props) {
  return (
    <div>
      <PostList posts={props.posts} />
    </div>
  );
}

export default HomePage;

export async function getStaticProps(context) {
  let client;
  try {
    client = db.getClient();
  } catch (error) {
    console.log(error.message);
    return {
      props: { posts: [] },
    };
  }
  try {
    let data = await db.getRecords(client, "posts", {}, { numberOfViews: -1 });
    data = data.map((element) => {
      let postData = {};
      postData._id = element._id.toString();
      postData.title = element.title;
      postData.description = element.description;
      postData.slug = element.slug;
      postData.numberOfViews = element.numberOfViews;
      return postData;
    });
    let posts;
    if (data.length > 8) posts = data.slice(0, 8);
    else posts = data;
    return {
      props: { posts },
    };
  } catch (error) {
    return {
      props: { posts: [] },
    };
  }
}
