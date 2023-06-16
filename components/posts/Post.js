import { ReactMarkdown } from "react-markdown/lib/react-markdown";

function Post(props) {
  const post = props.post;
  const content =
    "# This is large heading\n## This is a smaller heading\n### This is even smaller\nThis is for content  \n```this is code```";
  return <ReactMarkdown>{content}</ReactMarkdown>;
}

export default Post;
