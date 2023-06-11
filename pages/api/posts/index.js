function handler(req, res) {
  const data = [
    {
      id: 1,
      slug: "read-how-to-use-nextjs-for-personal-projects",
      title: "How to use Next.js for personal projects",
      authorName: "John Doe",
      authorEmail: "john@gmail.com",
      content:
        "#This is large heading\n##This is a smaller heading\n###This is even smaller\nThis is for content\n```this is code```",
      description:
        "This is a detailed guide with practical lessons on how to use Next.js in the most effective manner for a personal project",
    },
    {
      id: 2,
      slug: "read-how-to-use-reactjs-for-personal-projects",
      title: "How to use React.js for personal projects",
      authorName: "John Doe",
      authorEmail: "john@gmail.com",
      content:
        "#This is large heading\n##This is a smaller heading\n###This is even smaller\nThis is for content\n```this is code```",
      description:
        "This is a detailed guide with practical lessons on how to use React.js in the most effective manner for a personal project",
    },
    {
      id: 3,
      slug: "read-how-to-use-remixjs-for-personal-projects",
      title: "How to use Remix.js for personal projects",
      authorName: "John Doe",
      authorEmail: "john@gmail.com",
      content:
        "#This is large heading\n##This is a smaller heading\n###This is even smaller\nThis is for content\n```this is code```",
      description:
        "This is a detailed guide with practical lessons on how to use Remix.js in the most effective manner for a personal project",
    },
    {
      id: 4,
      slug: "read-how-to-use-remixjs-for-personal-projects-2",
      title: "How to use Remix.js for personal projects",
      authorName: "John Doe",
      authorEmail: "john@gmail.com",
      content:
        "#This is large heading\n##This is a smaller heading\n###This is even smaller\nThis is for content\n```this is code```",
      description:
        "This is a detailed guide with practical lessons on how to use Remix.js in the most effective manner for a personal project",
    },
    {
      id: 5,
      slug: "read-how-to-use-remixjs-for-personal-projects-3",
      title: "How to use Remix.js for personal projects",
      authorName: "John Doe",
      authorEmail: "john@gmail.com",
      content:
        "#This is large heading\n##This is a smaller heading\n###This is even smaller\nThis is for content\n```this is code```",
      description:
        "This is a detailed guide with practical lessons on how to use Remix.js in the most effective manner for a personal project",
    },
    {
      id: 6,
      slug: "read-how-to-use-remixjs-for-personal-projects-4",
      title: "How to use Remix.js for personal projects",
      authorName: "John Doe",
      authorEmail: "john@gmail.com",
      content:
        "#This is large heading\n##This is a smaller heading\n###This is even smaller\nThis is for content\n```this is code```",
      description:
        "This is a detailed guide with practical lessons on how to use Remix.js in the most effective manner for a personal project",
    },
    {
      id: 7,
      slug: "read-how-to-use-remixjs-for-personal-projects-5",
      title: "How to use Remix.js for personal projects",
      authorName: "John Doe",
      authorEmail: "john@gmail.com",
      content:
        "#This is large heading\n##This is a smaller heading\n###This is even smaller\nThis is for content\n```this is code```",
      description:
        "This is a detailed guide with practical lessons on how to use Remix.js in the most effective manner for a personal project",
    },
    {
      id: 8,
      slug: "read-how-to-use-remixjs-for-personal-projects-6",
      title: "How to use Remix.js for personal projects",
      authorName: "John Doe",
      authorEmail: "john@gmail.com",
      content:
        "#This is large heading\n##This is a smaller heading\n###This is even smaller\nThis is for content\n```this is code```",
      description:
        "This is a detailed guide with practical lessons on how to use Remix.js in the most effective manner for a personal project",
    },
    {
      id: 9,
      slug: "read-how-to-use-remixjs-for-personal-projects-7",
      title: "How to use Remix.js for personal projects",
      authorName: "John Doe",
      authorEmail: "john@gmail.com",
      content:
        "#This is large heading\n##This is a smaller heading\n###This is even smaller\nThis is for content\n```this is code```",
      description:
        "This is a detailed guide with practical lessons on how to use Remix.js in the most effective manner for a personal project",
    },
    {
      id: 10,
      slug: "read-how-to-use-remixjs-for-personal-projects-8",
      title: "How to use Remix.js for personal projects",
      authorName: "John Doe",
      authorEmail: "john@gmail.com",
      content:
        "#This is large heading\n##This is a smaller heading\n###This is even smaller\nThis is for content\n```this is code```",
      description:
        "This is a detailed guide with practical lessons on how to use Remix.js in the most effective manner for a personal project",
    },
    {
      id: 11,
      slug: "read-how-to-use-remixjs-for-personal-projects-9",
      title: "How to use Remix.js for personal projects",
      authorName: "John Doe",
      authorEmail: "john@gmail.com",
      content:
        "#This is large heading\n##This is a smaller heading\n###This is even smaller\nThis is for content\n```this is code```",
      description:
        "This is a detailed guide with practical lessons on how to use Remix.js in the most effective manner for a personal project",
    },
  ];

  res.status(200).json({ posts: JSON.stringify(data) });
}

export default handler;