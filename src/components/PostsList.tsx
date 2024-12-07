import parse from "html-react-parser";
import posts from "../data/posts.json";
import { Post } from "../types/Post";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { useState } from "react";

const PostsList: React.FC = () => {
  const [selectedtab, setSelectedTab] = useState("2");

  /* const [openAccordionItem, setOpenAccordionItem] = useState<string | null>(
    null
  ); */

  const postsData: Post[] = posts;

  const handleChange = (newValue: string) => {
    setSelectedTab(newValue);
    //setOpenAccordionItem(null);
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
    <Tabs value={selectedtab} className="mb-40 border rounded-lg">
      <TabsList className="max-md:flex-col lg:grid w-full grid-cols-3">
        <TabsTrigger onClick={() => handleChange("2")} value="2">
          <p>Arbetslivserfarenhet</p>
        </TabsTrigger>
        <TabsTrigger onClick={() => handleChange("4")} value="4">
          Uppdrag
        </TabsTrigger>
        <TabsTrigger onClick={() => handleChange("3")} value="3">
          Utbildning
        </TabsTrigger>
      </TabsList>
      <TabsContent value={selectedtab}>
        <Accordion
          type="single"
          collapsible
          key={selectedtab}
          className="animate-fade-in"
        >
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
                    <AccordionTrigger
                    /* onClick={() => setOpenAccordionItem(`item-${index}`)} */
                    >
                      {post.title}
                    </AccordionTrigger>
                    <AccordionContent
                      className={` 
                        ${
                          post.categories.nodes[0].slug === "portfolio-webb"
                            ? "text-center flex flex-col flex-wrap content-center"
                            : ""
                        }`}
                    >
                      {post.featuredImage && (
                        <img
                          src={imagePath}
                          alt={post.featuredImage.node.altText}
                          width={imageWidth}
                          height={imageHeight}
                          className="self-center"
                        />
                      )}
                      {post.occupation.occupation && (
                        <p className="font-semibold">
                          {post.occupation.occupation}
                        </p>
                      )}
                      {post.years.startYear && (
                        <div className="italic">
                          {post.years.startYear} - {post.years.endYear}
                        </div>
                      )}
                      <div className="mt-4 [&>*>a]:underline [&>*>a]:block">
                        {parse(post.content || "")}
                      </div>
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
