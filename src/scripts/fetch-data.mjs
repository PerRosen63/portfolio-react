import fs from "fs-extra";
import http from "http";
import { getPosts, getPage } from "../utils/data.mjs";

async function downloadImage(imageData) {
  if (imageData?.node?.mediaDetails?.sizes) {
    const sizes = imageData.node.mediaDetails.sizes;
    let imageUrl = sizes.find((size) => size.name === "medium")?.sourceUrl;
    if (!imageUrl) {
      imageUrl = imageData.node.sourceUrl;
    }
    const imageName = imageUrl.split("/").pop();
    const imagePath = `src/images/${imageName}`;

    const imageExists = await fs.pathExists(imagePath);

    if (!imageExists) {
      const file = fs.createWriteStream(imagePath);
      http.get(imageUrl, (response) => {
        response.pipe(file);
        console.log(`Image downloaded to: ${imagePath}`);
      });
    } else {
      console.log(`Image already exists: ${imagePath}`);
    }
  }
}

async function fetchData() {
  try {
    const posts = await getPosts();
    const page = await getPage();

    await fs.ensureFile("src/data/posts.json");
    await fs.ensureFile("src/data/page.json");

    await fs.writeJSON("src/data/posts.json", posts, { spaces: 2 });
    await fs.writeJSON("src/data/page.json", page, { spaces: 2 });

    // Download page featured image
    await downloadImage(page.featuredImage);

    // Download featured images for each post
    for (const post of posts) {
      await downloadImage(post.featuredImage);
    }

    console.log("Data fetched and saved successfully!");
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();
