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
