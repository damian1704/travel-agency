export const promoPrice = (amount, discount) => {
  
  if (amount === undefined || 
    discount === undefined || 
    typeof amount !== 'number' || 
    typeof discount !== 'number' ||
    amount < 0 ||
    discount < 0 ||
    discount > 100 ) {
    return null;
  } else {
    return (amount * (1 - discount/100));
  }
};