import parse from "html-react-parser";
import posts from "../data/posts.json";
import { Post } from "../types/Post";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { useState } from "react";

const PostsList: React.FC = () => {
  const [selectedtab, setSelectedTab] = useState("2");

  const postsData: Post[] = posts;

  const handleChange = (newValue: string) => {
    setSelectedTab(newValue);
    console.log("click", selectedtab);
  };

  const filteredPosts = postsData
    .filter((post) => {
      return post.categories.nodes.find(
        (category) => category.categoryId.toString() === selectedtab
      );
    })
    .sort((a, b) => {
      // Handle potential null values for startYear
      const startYearA = a.years.startYear || 0; // Default to 0 if null
      const startYearB = b.years.startYear || 0; // Default to 0 if null
      return startYearB - startYearA;
    });

  return (
    <Tabs value={selectedtab}>
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger onClick={() => handleChange("2")} value="2">
          Arbetslivserfarenhet
        </TabsTrigger>
        <TabsTrigger onClick={() => handleChange("4")} value="4">
          Uppdrag
        </TabsTrigger>
        <TabsTrigger onClick={() => handleChange("3")} value="3">
          Utbildning
        </TabsTrigger>
      </TabsList>
      <TabsContent value={selectedtab}>
        <Accordion type="single" collapsible>
          <ul>
            {filteredPosts.map((post, index) => {
              const mediumSize =
                post.featuredImage?.node.mediaDetails.sizes.find(
                  (size) => size.name === "medium"
                );

              const imageUrl =
                mediumSize?.sourceUrl || post.featuredImage?.node.sourceUrl;
              const imageWidth =
                mediumSize?.width ||
                post.featuredImage?.node.mediaDetails.width;
              const imageHeight =
                mediumSize?.height ||
                post.featuredImage?.node.mediaDetails.height;

              const imageName = imageUrl?.split("/").pop();
              const imagePath = new URL(
                `/src/images/${imageName}`,
                import.meta.url
              ).href;
              return (
                <li>
                  <AccordionItem value={`item-${index}`} key={post.id}>
                    <AccordionTrigger>{post.title}</AccordionTrigger>
                    <AccordionContent>
                      {post.featuredImage && (
                        <img
                          src={imagePath}
                          alt={post.featuredImage.node.altText}
                          width={imageWidth}
                          height={imageHeight}
                        />
                      )}
                      {post.occupation.occupation && (
                        <p className="font-semibold">
                          {post.occupation.occupation}
                        </p>
                      )}
                      {post.years.startYear && (
                        <div>
                          {post.years.startYear} - {post.years.endYear}
                        </div>
                      )}
                      <div>{parse(post.content || "")}</div>
                    </AccordionContent>
                  </AccordionItem>
                </li>
              );
            })}
          </ul>
        </Accordion>
      </TabsContent>
    </Tabs>
  );
};

export default PostsList;
