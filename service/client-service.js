const getCategories = async () => {
    const url = 'http://localhost:3000/categories'
    const takeData = await fetch(url)
    const data = await takeData.json()
    return data
}

const getItems = async () => {
    const url = 'http://localhost:3000/products'
    const takeData = await fetch(url)
    const data = await takeData.json()
    return data
}

export const clientService = {
    getCategories,
    getItems
}