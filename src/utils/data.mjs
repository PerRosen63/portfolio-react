import { request, gql } from "graphql-request";

const WORDPRESS_API_URL = "http://portfolio.local/graphql"; // Update with your Local site URL

export async function getPosts() {
  const query = gql`
    query {
      posts(first: 100) {
        nodes {
          id
          databaseId
          title
          slug
          content
          years {
            startYear
            endYear
          }
          occupation {
            occupation
          }
          featuredImage {
            node {
              sourceUrl
              altText
              mediaDetails {
                width
                height
                sizes {
                  name
                  sourceUrl
                  width
                  height
                }
              }
            }
          }
          categories {
            nodes {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const data = await request(WORDPRESS_API_URL, query);
  return data.posts.nodes;
}

export async function getPage() {
  const query = gql`
    query GetPage {
      page(id: "14", idType: DATABASE_ID) {
        content
        featuredImage {
          node {
            sourceUrl
            altText
            mediaDetails {
              width
              height
              sizes {
                name
                sourceUrl
                width
                height
              }
            }
          }
        }
      }
    }
  `;

  const data = await request(WORDPRESS_API_URL, query);
  return data.page;
}
