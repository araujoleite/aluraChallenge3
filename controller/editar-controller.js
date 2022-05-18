import { clientService } from "../service/client-service.js";

(function() {
    const createItems = async () => {
        
        const items = await clientService.getItems() //Carrega todos os itens do banco
        const container = document.querySelector('[data-container]') //Seleciona campo onde os itens serão inseridos

        items.forEach((item) => {
            
            // Cria um elemento article e em seguida define 'itemBox' como classe para ele
            const article = document.createElement('article')
            article.classList.add('itemBox')
            article.innerHTML = `
                <div class="itemBox__changes">
                <a href="#" class="delete"></a>
                <a href="#" class="edit"></a>
                </div>
                <img src="${item.image}" alt="${item.name}" class="itemBox__img">
                <p class="itemBox__name">${item.name}</p>
                <h3 class="itemBox__price">R$ ${item.price.toFixed(2)}</h3>
                <p class="itemBox__code">#${item.id.toString().padStart(5,"0")}</p>
            ` // Adiciona 2 casas decimais ao preço e exibe o ID sempre com 5 digitos
            
            container.appendChild(article)
            
        })

    }

    createItems()

})()