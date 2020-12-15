export const currencyStringToFloat = (string) => {
  if (string === undefined || typeof string !== 'string') {
    return null;
  } else {
    return parseFloat(string.replace(/^\$\s*/, '').replace(/,/g, ''));
  }
};
