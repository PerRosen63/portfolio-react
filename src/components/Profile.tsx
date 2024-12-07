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
      <div className="flex flex-col my-12 flex-grow flex-wrap content-center">
        <h1 className="text-center">
          Per Rosén <span className="max-md:hidden">-</span> cv/portfolio
        </h1>
      </div>
      <div className="md:grid gap-12 md:grid-cols-3">
        <div className="md:order-1 ">
          {image && (
            <img
              className="md:w-72 lg:w-full h-auto rounded-lg"
              src={imagePath}
              alt={image.altText}
              width={imageWidth}
              height={imageHeight}
            />
          )}
        </div>
        <div className="max-md:mt-6 md:col-[1/3] md:row-span-3">
          <p className="[&>h2]:mb-4 [&>h3]:text-base [&>h3]:font-semibold [&>h3]:uppercase [&>h3]:mt-2 [&>h3]:font-[Roboto]">
            {parse(pageData.content)}{" "}
          </p>
        </div>

        <div className="md:order-2 bg-muted max-md:mt-4 p-4 rounded-lg border">
          <h5>Lite mer om mig:</h5>
          <ul className="list-disc ml-5">
            <li>låtskrivare, sångare, gitarrist</li>
            <li>medlem i bandet The Dogmen och soloprojektet Präriepilen</li>
            <li>bor i Visby</li>
            <li>sommarhus i Alva, södra Gotland</li>
            <li>född och uppvuxen i Nynäshamn</li>
            <li>intresserad av odling och mat</li>
          </ul>
        </div>
      </div>
    </>
  );
};
