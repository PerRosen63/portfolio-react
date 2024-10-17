import parse from "html-react-parser";
import page from "../data/page.json";
import { Page } from "../types/Page";

export const Profile = () => {
  const pageData: Page = page;
  if (!pageData.featuredImage) {
    return <p>No image found.</p>;
  }
  const image = pageData.featuredImage.node;

  const sizes = pageData.featuredImage.node.mediaDetails.sizes;

  const mediumSize = sizes.find((size) => size.name === "medium");

  const imageUrl = mediumSize?.sourceUrl || image.sourceUrl;
  const imageWidth = mediumSize?.width || image.mediaDetails.width;
  const imageHeight = mediumSize?.height || image.mediaDetails.height;

  const imageName = imageUrl.split("/").pop();
  const imagePath = `src/images/${imageName}`;

  return (
    <>
      {image && (
        <img
          src={imagePath}
          alt={image.altText}
          width={imageWidth}
          height={imageHeight}
        />
      )}
      {parse(pageData.content)}
    </>
  );
};
