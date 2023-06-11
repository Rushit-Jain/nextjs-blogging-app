import { useRouter } from "next/router";

function PostPage(props) {
  const router = useRouter();
  const slug = router.query.slug;
  return <div>{slug}</div>;
}

export default PostPage;
