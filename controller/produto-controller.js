import { clientService } from "../service/client-service.js";

( async () => {
    // -- CARREGA O PRODUTO SELECIONADO
    
    const takeURL = new URL(window.location)
    const id = takeURL.searchParams.get('id')

    const item = await clientService.itemInfos(id)

    const productImage = document.querySelector(':root')
    productImage.style.setProperty('--imgHighlight', `url(/${item.image})`)

    const productDetail = document.querySelector('[data-productDetail]')
    productDetail.innerHTML = `
        <div class="product__details">
            <h1 class="product__name">${item.name}</h1>
            <p class="product__price">R$${item.price}</p>
            <p class="product__info">${item.description}</p>
        </div>
    `

    // -- CARREGA OS PRODUTOS RELACIONADOS

    const relatedItems = await clientService.getCategoryItems(item.categoryId)

    const relatedField = document.querySelector('[data-related]')
    let counter = 1
    // Percorre todos os itens relacionados e adiciona ao DOM
    relatedItems.forEach((relatedItem) => {
        
        // If para carregar máximo de 6 produtos por seção
        if (counter <= 6 && relatedItem.id != item.id) {
                   
            // Cria um elemento article e em seguida define 'itemBox' como classe para ele
            const article = document.createElement('article')
            article.classList.add('itemBox')

            // Adiciona uma classe de exibição para os 2 últimos articles criados
            if (counter > 4) {
                article.classList.add('itemBox--hide')
            }

            article.innerHTML = `
                <a href="produto.html?id=${relatedItem.id}" class="itemBox__img"><img src="${relatedItem.image}" alt="${relatedItem.name}"></a>
                <p class="itemBox__name">${relatedItem.name}</p>
                <h3 class="itemBox__price">R$ ${relatedItem.price}</h3>
                <a href="produto.html?id=${relatedItem.id}" class="itemBox__more">Ver Produto</a>
            `
            relatedField.appendChild(article)

            counter ++
        }

        
    })

    console.log(relatedItems)
})()