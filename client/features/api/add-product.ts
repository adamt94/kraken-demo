export const fakeAddProductRequest = async (productId: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Product ${productId} added!`)
      resolve(true)
    }, 500)
  })
}
