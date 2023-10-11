
export const getInterational = `
query MyArticles {
    artikler(where: {category_contains_all: "International"}) {
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