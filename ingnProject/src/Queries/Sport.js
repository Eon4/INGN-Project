
export const getSport = `
query MyArticles {
    artikler(where: {category_contains_all: "Sport"}) {
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