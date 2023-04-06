import { TOKEN } from "../utils/token"

export const productsFetch = () => {
  return fetch('https://api.react-learning.ru/products', {
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  })
}
