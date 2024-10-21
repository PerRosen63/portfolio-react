import parse from "html-react-parser";
import posts from "../data/posts.json";
import { Post } from "../types/Post";
import { Accordion, CustomFlowbiteTheme } from "flowbite-react";

const JobsList: React.FC = () => {
  const postsData: Post[] = posts;

  const filteredPosts = postsData
    .filter((post) => {
      return post.categories.nodes.some(
        (category) => category.slug === "arbetslivserfarenhet"
      );
    })
    .sort((a, b) => {
      // Handle potential null values for startYear
      const startYearA = a.years.startYear || 0; // Default to 0 if null
      const startYearB = b.years.startYear || 0; // Default to 0 if null
      return startYearB - startYearA;
    });

  /* const customTheme: CustomFlowbiteTheme =     {
          "root": {
    "base": "divide-y divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700",
    "flush": {
      "off": "rounded-lg border",
      "on": "border-b"
    }
  },
  "content": {
    "base": "p-5 first:rounded-t-lg last:rounded-b-lg dark:bg-gray-900"
  },
  "title": {
    "arrow": {
      "base": "h-6 w-6 shrink-0",
      "open": {
        "off": "",
        "on": "rotate-180"
      }
    },
    "base": "flex w-full items-center justify-between p-5 text-left font-medium text-gray-500 first:rounded-t-lg last:rounded-b-lg dark:text-gray-400",
    "flush": {
      "off": "hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800",
      "on": "bg-transparent dark:bg-transparent"
    },
    "heading": "",
    "open": {
      "off": "",
      "on": "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white"
    }
  }
        }     */

  return (
    <Accordion className="[&>*>h2]:text-2xl">
      {filteredPosts.map((post) => (
        <Accordion.Panel key={post.id}>
          <Accordion.Title>{post.title}</Accordion.Title>
          <Accordion.Content>
            <p>{post.occupation.occupation}</p>
            <div>
              {post.years.startYear} - {post.years.endYear}
            </div>
            <div>{parse(post.content || "")}</div>
          </Accordion.Content>
        </Accordion.Panel>
      ))}
    </Accordion>
  );
};

export default JobsList;
