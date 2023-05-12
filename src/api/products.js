export const fetchProducts = (token) => fetch('https://api.react-learning.ru/products', {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${token}`
  }
})

export const fetchCurrentProduct = (id, token) => fetch(`https://api.react-learning.ru/products/${id}`, {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${token}`
  }
})

export const fetchCurrentProduct1 = async (id, token) => {
  const res = await fetch(`https://api.react-learning.ru/products/${id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  if (res.ok) {
  const responce = await res.json()

  }

  return false
}























