export interface Post {
  id: string;
  databaseId: number;
  title: string;
  slug: string;
  content: string | null;
  years: {
    startYear: number | null;
    endYear: number | null;
  };
  occupation: {
    occupation: string | null;
  };
  featuredImage: {
    node: {
      sourceUrl: string;
      altText: string;
      mediaDetails: {
        width: number;
        height: number;
        sizes: {
          name: string;
          sourceUrl: string;
          width: string;
          height: string;
        }[];
      };
    };
  } | null; // Use | null if featuredImage might be missing
  categories: {
    nodes: {
      name: string;
      slug: string;
      categoryId: number;
    }[];
  };
}
