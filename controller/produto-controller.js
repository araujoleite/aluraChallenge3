import { clientService } from "../service/client-service.js";

( async () => {
    const takeURL = new URL(window.location)
    const id = takeURL.searchParams.get('id')

    const item = await clientService.itemInfos(id)

    console.log(item)
    
})()