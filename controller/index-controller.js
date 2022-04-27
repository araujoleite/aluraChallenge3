import { clientService } from "../service/client-service.js"

(function() {
    const createItems = async () => {
        
        const categories = await clientService.getCategories() // Carrega a lista de categorias do db.json
        const items = await clientService.getItems() // Carrega os itens cadastrados no db.json

        categories.forEach((category) => {
            const list = document.querySelector(`[data-${category.type}]`)
            let counter = 1
    
            // Separa todos os itens da categoria para carregar na sua seção específica
            items.filter(filterItem => filterItem.categoryId == category.id).forEach((item) => {
                
                // If para carregar máximo de 6 produtos por seção
                if (counter <= 6) {
                   
                    // Cria um elemento article e em seguida define 'itemBox' como classe para ele
                    const article = document.createElement('article')
                    article.classList.add('itemBox')
    
                    // Adiciona uma classe de exibição para os 2 últimos articles criados
                    if (counter > 4) {
                        article.classList.add('itemBox--hide')
                    }
    
                    article.innerHTML = `
                        <a href="produto.html?id=${item.id}" class="itemBox__img"><img src="${item.image}" alt="${item.name}"></a>
                        <p class="itemBox__name">${item.name}</p>
                        <h3 class="itemBox__price">R$ ${item.price}</h3>
                        <a href="produto.html?id=${item.id}" class="itemBox__more">Ver Produto</a>
                    `
                    list.appendChild(article)
                }
    
                counter ++

            })
        })

    }

    createItems()

})()