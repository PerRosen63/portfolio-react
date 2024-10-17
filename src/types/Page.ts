export interface Page {
  content: string;
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
}
