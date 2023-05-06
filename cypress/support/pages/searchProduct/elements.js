export const searchProductElements = {
  aPageNumber: (page) => `a[href="http://lojaebac.ebaconline.art.br/produtos/page/${page}/"]`,
  aProduct: (product) => `a[title="${product}"]`,
  inputSearchProduct : 'input[type="text"]'
}