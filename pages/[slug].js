import { useRouter } from "next/router";
const db = require("../server-utilities/db");

import Post from "../components/posts/Post";
import { ObjectId } from "mongodb";

function PostPage(props) {
  const router = useRouter();
  const post = props.post;
  console.log(post);
  return (
    <>
      <Post post={post} />
    </>
  );
}

export default PostPage;

export async function getServerSideProps(context) {
  const slug = context.params.slug;
  let post = {};

  try {
    const client = db.getClient();
    post = await db.getRecords(client, "posts", { slug: slug });
    post = post[0];
    post._id = post._id.toString();
    if (!post.isAnonymous) {
      console.log(post.authorId);
      let user = await db.getRecords(client, "users", {
        _id: new ObjectId(post.authorId),
      });
      console.log(user);
      user = user[0];
      post.authorName = user.name;
      post.authorEmail = user.email;
    } else {
      delete post.authorId;
    }
  } catch (error) {
    console.log(error);
    return {
      props: {
        post: {},
      },
    };
  }

  return {
    props: {
      post: post,
    },
  };
}
