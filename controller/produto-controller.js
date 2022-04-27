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

    const relatedItems = await clientService.relatedItems(item.categoryId)

    console.log(relatedItems)
})()