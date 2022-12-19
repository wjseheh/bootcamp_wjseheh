/**
 * 이 함수는 어떠어떠한 함수입니다.
 * @param {*} productAmount
 * @returns
 */

function taxAmount(productAmount) {
  //부가세 10% 가정
  const tax = 0.1;
  return productAmount * tax;
}

function parseQueryString() {
  if (window.location.search.length === 0) {
    return {};
  } else {
    const queryStringObject = {};
    const queryString = window.location.search.substring(1).split("&");
    console.log(queryString);
    for (const s of queryString) {
      const q = s.split("=");
      queryStringObject[q[0]] = q[1];
    }
    console.log(queryStringObject);
    return queryStringObject;
  }
}
