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
        <article class="flex flex-col items-center p-4 border rounded-lg shadow-md">
            <h2 class="text-xl font-bold pb-4 text-center">${productos.title}</h2>
            <img class="w-40" src="${productos.image}" alt="">
            <div class="pt-4 flex flex-col items-center">
                <span class="text-3xl font-bold">$ ${productos.price} </span>
                <p class="p-2 text-justify">${productos.description}"</p>
            </div>
        </article>
        `);

        const main = document.querySelector("main");

        main.append(article)
    })
})
