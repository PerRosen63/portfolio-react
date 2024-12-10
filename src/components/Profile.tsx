import parse from "html-react-parser";
import page from "../data/page.json";
import { Page } from "../types/Page";
import { FC } from "react";
import { Mail, Phone } from "lucide-react";
import { Github, Linkedin } from "grommet-icons";

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
      <div className="flex flex-col max-lg:my-12 flex-grow flex-wrap content-center justify-center lg:min-h-[15svh]">
        <h1 className="text-center">
          Per Rosén <span className="max-md:hidden">-</span> cv/portfolio
        </h1>
      </div>
      <div className="md:grid gap-12 md:grid-cols-3 lg:min-h-[75svh]">
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
          <div className="my-4">
            <a className="mr-4" href="https://github.com/PerRosen63">
              <Github color="plain" size="3rem" />
            </a>
            <a href="https://www.linkedin.com/in/per-ros%C3%A9n-a27a5060/">
              <Linkedin color="plain" size="3rem" />
            </a>
          </div>
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
          <div className="my-2">
            <a className="flex" href="mailto:per@ronz.org">
              <Mail aria-label="mail-icon" />
              <span className="mx-1">per@ronz.org</span>
            </a>
          </div>
          <div className="my-2 flex">
            <Phone aria-label="phone-icon" className="-scale-x-100" />
            <span className="mx-1">0731-515063</span>
          </div>
        </div>
      </div>
    </>
  );
};
