import { ReactMarkdown } from "react-markdown/lib/react-markdown";

function Post(props) {
  const post = props.post;
  return <ReactMarkdown>{post.content}</ReactMarkdown>;
}

export default Post;
