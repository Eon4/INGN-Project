export const getSociety = `
query MyArticles {
    artikler(where: {category_contains_all: "Society"}) {
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