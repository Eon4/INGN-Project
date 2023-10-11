
export const getAll = `
query All {
    artikler(where: {category_contains_all: "All"}) {
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