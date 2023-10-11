export const getPolitics = `
query MyArticles {
    artikler(where: {category_contains_all: "Politics"}) {
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