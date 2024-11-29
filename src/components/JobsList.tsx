import parse from "html-react-parser";
import posts from "../data/posts.json";
import { Post } from "../types/Post";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Tabs, TabsContent, TabsTrigger } from "./ui/tabs";
import { TabsList } from "@radix-ui/react-tabs";

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
    <Tabs>
      <TabsList>
        <TabsTrigger value="">Arbetslivserfarenhet</TabsTrigger>
        <TabsTrigger value="">Uppdrag</TabsTrigger>
        <TabsTrigger value="">Utbildning</TabsTrigger>
      </TabsList>
      <TabsContent value="">
        <Accordion type="single" collapsible>
          {filteredPosts.map((post, index) => (
            <AccordionItem value={`item-${index}`} key={post.id}>
              <AccordionTrigger>{post.title}</AccordionTrigger>
              <AccordionContent>
                <p>{post.occupation.occupation}</p>
                <div>
                  {post.years.startYear} - {post.years.endYear}
                </div>
                <div>{parse(post.content || "")}</div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </TabsContent>
    </Tabs>
  );
};

export default JobsList;
