
export const getNational = `
query MyArticles {
    artikler(where: {category_contains_all: "National"}) {
        id
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
  
`;