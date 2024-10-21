import parse from "html-react-parser";
import page from "../data/page.json";
import { Page } from "../types/Page";
import { FC } from "react";

export const Profile: FC = () => {
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
  const imagePath = new URL(`/src/images/${imageName}`, import.meta.url).href;

  return (
    <>
      <div className="flex flex-col flex-grow flex-wrap content-center px-4 ">
        <h1 className="max-md:max-w-min">{pageData.title}</h1>
        <div className="max-w-64">{parse(pageData.content)}</div>
      </div>
      <div>
        {image && (
          <img
            className="w-80 h-auto"
            src={imagePath}
            alt={image.altText}
            width={imageWidth}
            height={imageHeight}
          />
        )}
      </div>
    </>
  );
};
