function obtenerProductos(done) {
    const productos = fetch("https://fakestoreapi.com/products")

    productos
            .then(response => response.json())
            .then(data => {
                done(data)
            });
}

obtenerProductos(data => {
    console.log(data)

    data.forEach(productos => {
        const article = document.createRange().createContextualFragment(`
        <article class="p-4 border rounded-lg shadow-md">
        <div class="flex flex-col items-center"> 
        <h2 class="text-xl font-bold pb-4 text-center">${productos.title}</h2>
        <img class="w-40" src="${productos.image}" alt="">
        </div>
            <div class="inline-flex items-start mt-4">
            <span><strong>Categoria:</strong> ${productos.category}</span>
            </div>
            <div class="mt-3 flex flex-col items-center">
                <span class="text-3xl font-bold">$ ${productos.price} </span>
                <p class="p-2 text-justify">${productos.description}"</p>
            </div>
            <div class="flex justify-center">
            <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-4 h-4 mr-2 icon icon-tabler icon-tabler-shopping-cart-filled" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M6 2a1 1 0 0 1 .993 .883l.007 .117v1.068l13.071 .935a1 1 0 0 1 .929 1.024l-.01 .114l-1 7a1 1 0 0 1 -.877 .853l-.113 .006h-12v2h10a3 3 0 1 1 -2.995 3.176l-.005 -.176l.005 -.176c.017 -.288 .074 -.564 .166 -.824h-5.342a3 3 0 1 1 -5.824 1.176l-.005 -.176l.005 -.176a3.002 3.002 0 0 1 1.995 -2.654v-12.17h-1a1 1 0 0 1 -.993 -.883l-.007 -.117a1 1 0 0 1 .883 -.993l.117 -.007h2zm0 16a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm11 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z" stroke-width="0" fill="currentColor" />
          </svg>
            <span>Agregar</span>
          </button> 
            </div>
        </article>
        `);

        const main = document.querySelector("main");

        main.append(article)
    })
})
