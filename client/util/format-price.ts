export const formatPrice = (price: number) => {
  const formattedPrice = (price / 100).toFixed(2)
  return `£${formattedPrice}`
}
