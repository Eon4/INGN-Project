
export const oneArticle = `
query MyOneArticle($id: ID) {
  artikler(where: {id: $id}) {
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