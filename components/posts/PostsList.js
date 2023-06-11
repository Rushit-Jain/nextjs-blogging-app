import Link from "next/link";
import PostListItem from "./PostListItem";
import classes from "./PostsList.module.css";

const data = [
  {
    id: 1,
    slug: "how-to-use-nextjs-for-personal-projects",
    title: "How to use Next.js for personal projects",
    description:
      "This is a detailed guide with practical lessons on how to use Next.js in the most effective manner for a personal project",
  },
  {
    id: 2,
    slug: "how-to-use-reactjs-for-personal-projects",
    title: "How to use React.js for personal projects",
    description:
      "This is a detailed guide with practical lessons on how to use React.js in the most effective manner for a personal project",
  },
  {
    id: 3,
    slug: "how-to-use-remixjs-for-personal-projects",
    title: "How to use Remix.js for personal projects",
    description:
      "This is a detailed guide with practical lessons on how to use Remix.js in the most effective manner for a personal project",
  },
  {
    id: 4,
    slug: "how-to-use-remixjs-for-personal-projects-2",
    title: "How to use Remix.js for personal projects",
    description:
      "This is a detailed guide with practical lessons on how to use Remix.js in the most effective manner for a personal project",
  },
  {
    id: 5,
    slug: "how-to-use-remixjs-for-personal-projects-3",
    title: "How to use Remix.js for personal projects",
    description:
      "This is a detailed guide with practical lessons on how to use Remix.js in the most effective manner for a personal project",
  },
  {
    id: 6,
    slug: "how-to-use-remixjs-for-personal-projects-4",
    title: "How to use Remix.js for personal projects",
    description:
      "This is a detailed guide with practical lessons on how to use Remix.js in the most effective manner for a personal project",
  },
  {
    id: 7,
    slug: "how-to-use-remixjs-for-personal-projects-5",
    title: "How to use Remix.js for personal projects",
    description:
      "This is a detailed guide with practical lessons on how to use Remix.js in the most effective manner for a personal project",
  },
  {
    id: 8,
    slug: "how-to-use-remixjs-for-personal-projects-6",
    title: "How to use Remix.js for personal projects",
    description:
      "This is a detailed guide with practical lessons on how to use Remix.js in the most effective manner for a personal project",
  },
  {
    id: 9,
    slug: "how-to-use-remixjs-for-personal-projects-7",
    title: "How to use Remix.js for personal projects",
    description:
      "This is a detailed guide with practical lessons on how to use Remix.js in the most effective manner for a personal project",
  },
  {
    id: 10,
    slug: "how-to-use-remixjs-for-personal-projects-8",
    title: "How to use Remix.js for personal projects",
    description:
      "This is a detailed guide with practical lessons on how to use Remix.js in the most effective manner for a personal project",
  },
  {
    id: 11,
    slug: "how-to-use-remixjs-for-personal-projects-9",
    title: "How to use Remix.js for personal projects",
    description:
      "This is a detailed guide with practical lessons on how to use Remix.js in the most effective manner for a personal project",
  },
];

function PostList(props) {
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
