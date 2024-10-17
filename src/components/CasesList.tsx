import parse from "html-react-parser";
import posts from "../data/posts.json";
import { Post } from "../types/Post";

export const CasesList = () => {
  const postsData: Post[] = posts;

  const filteredPosts = postsData.filter((post) => {
    return post.categories.nodes.some(
      (category) => category.slug === "portfolio-webb"
    );
  });

  return (
    <>
      <ul>
        {filteredPosts.map((post) => {
          const mediumSize = post.featuredImage?.node.mediaDetails.sizes.find(
            (size) => size.name === "medium"
          );

          const imageUrl =
            mediumSize?.sourceUrl || post.featuredImage?.node.sourceUrl;
          const imageWidth =
            mediumSize?.width || post.featuredImage?.node.mediaDetails.width;
          const imageHeight =
            mediumSize?.height || post.featuredImage?.node.mediaDetails.height;

          const imageName = imageUrl?.split("/").pop();
          const imagePath = `src/images/${imageName}`;

          return (
            <li key={post.id}>
              <h3>{post.title}</h3>
              {post.featuredImage && (
                <img
                  src={imagePath}
                  alt={post.featuredImage.node.altText}
                  width={imageWidth}
                  height={imageHeight}
                />
              )}
              <p>{post.occupation.occupation}</p>
              <div>
                {post.years.startYear} - {post.years.endYear}
              </div>
              <div>{parse(post.content || "")}</div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CasesList;
