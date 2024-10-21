import parse from "html-react-parser";
import posts from "../data/posts.json";
import { Post } from "../types/Post";
import { Accordion } from "flowbite-react";

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
