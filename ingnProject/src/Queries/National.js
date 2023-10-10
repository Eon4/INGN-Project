
export const getNational = `
query International {
    query MyArticles {
        artikler(where: {category_contains_all: "National"}) {
          articleTitle
          date
          author
          image {
            url
          }
          articleContent {
            text
          }
        }
      }
}
`;