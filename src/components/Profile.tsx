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
      <div className="flex flex-col max-lg:my-12 flex-grow flex-wrap content-center justify-center lg:max-[2000px]:min-h-[13svh]">
        <h1 className="text-center">
          Per Rosén <span className="max-md:hidden">-</span> cv/portfolio
        </h1>
      </div>
      <div className="md:grid gap-x-12 md:grid-cols-3 lg:max-[2000px]:min-h-[77svh]">
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
          <p className="[&>h2]:mb-4 [&>h3]:text-base [&>h3]:font-semibold [&>h3]:uppercase [&>h3]:mt-2 [&>h3]:font-[Roboto] [&>p>a]:underline hover:[&>p>a]:text-muted-foreground">
            {parse(pageData.content)}{" "}
          </p>
          <div className="max-md:my-8 mt-6">
            <div className="my-1 flex flex-wrap">
              <img
                src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
                alt="js-badge"
              />
              <img
                src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"
                alt="ts-badge"
              />
              <img
                src="https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D"
                alt="vue-badge"
              />
              <img
                src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
                alt="react-badge"
              />
            </div>
            <div className="my-1 flex flex-wrap">
              <img
                src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
                alt="node-badge"
              />
              <img
                src="https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white"
                alt="sql-badge"
              />
              <img
                src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"
                alt="mongodb-badge"
              />
              <img
                src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white"
                alt="vite-badge"
              />
            </div>
            <div className="my-1 flex flex-wrap">
              <img
                src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
                alt="html-badge"
              />
              <img
                src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
                alt="css-badge"
              />
              <img
                src="https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white"
                alt="sass-badge"
              />
              <img
                src="https://img.shields.io/badge/Tailwind_CSS-grey?style=for-the-badge&logo=tailwind-css&logoColor=38B2AC"
                alt="tw-badge"
              />
            </div>
            <div className="my-1 flex flex-wrap">
              <img
                src="https://img.shields.io/badge/WordPress-%23117AC9.svg?style=for-the-badge&logo=WordPress&logoColor=white"
                alt="wp-badge"
              />
              <img
                src="https://img.shields.io/badge/WCAG-%23015A69.svg?style=for-the-badge&logo=WCAG&logoColor=white"
                alt="wcag-badge"
              />
            </div>
            <div className="my-1 flex flex-wrap">
              <img
                src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"
                alt="github-badge"
              />
              <img
                src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white"
                alt="figma-badge"
              />
              <img
                src="https://img.shields.io/badge/affinityphoto-%237E4DD2.svg?style=for-the-badge&logo=affinity-photo&logoColor=white"
                alt="affinity-badge"
              />
            </div>
          </div>
        </div>

        <div className="md:order-2 bg-muted mt-4 px-4 pt-3 rounded-lg border">
          <h5>Lite mer om mig:</h5>
          <ul className="list-disc ml-5 mt-2">
            <li>låtskrivare, sångare, gitarrist</li>
            <li>medlem i bandet The Dogmen och soloprojektet Präriepilen</li>
            <li>bor i Visby</li>
            <li>sommarhus i Alva, södra Gotland</li>
            <li>född och uppvuxen i Nynäshamn</li>
            <li>intresserad av odling och mat</li>
          </ul>
          <div className="flex mt-2 max-xl:flex-col items-center xl:justify-between">
            <div className="my-2">
              <a className="flex" href="mailto:per@ronz.org">
                <Mail aria-label="mail-icon" />
                <span className="mx-1">per@ronz.org</span>
              </a>
            </div>
            <span className="my-2 max-xl:hidden">|</span>
            <div className="my-2 flex">
              <Phone aria-label="phone-icon" className="-scale-x-100" />
              <span className="mx-1">0731-515063</span>
            </div>
          </div>
          <div className="my-4 flex justify-center">
            <a className="mr-4" href="https://github.com/PerRosen63">
              <Github color="plain" size="2rem" />
            </a>
            <a href="https://www.linkedin.com/in/per-ros%C3%A9n-a27a5060/">
              <Linkedin color="plain" size="2rem" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
