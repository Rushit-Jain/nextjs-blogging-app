import { useRouter } from "next/router";

import Post from "../components/posts/Post";

function PostPage(props) {
  const router = useRouter();
  const slug = router.query.slug;
  return (
    <>
      <div>{slug}</div>
      <Post />
    </>
  );
}

export default PostPage;
