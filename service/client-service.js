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

const itemInfos = (id) => {
    return fetch(`http://localhost:3000/products/${id}`)
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possivel detalhar cliente')
    })
}

export const clientService = {
    getCategories,
    getItems,
    itemInfos
}