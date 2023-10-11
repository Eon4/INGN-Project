
export const getTechnology = `
query MyArticles {
    artikler(where: {category_contains_all: "Technology"}) {
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