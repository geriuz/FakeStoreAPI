function obtenerProductos(done) {
  const productos = fetch("https://fakestoreapi.com/products");

  productos
    .then((response) => response.json())
    .then((data) => {
      done(data);
    });
}

obtenerProductos((data) => {
  console.log(data);

  data.forEach((productos) => {
    const article = document.createRange().createContextualFragment(`
    <article class="max-w-sm rounded overflow-hidden shadow-lg">
            <div class="flex justify-center">
                <img class="w-40" src="${productos.image}" alt="">
            </div>
            <div class="flex items-center justify-center text-center pt-4 px-6">
                <div class="font-bold text-xl mb-2">${productos.title}</div>
            </div>
            <span class="px-6"><strong>Categoria:</strong> ${productos.category}</span>
            <hr class="mt-4">
            <div class="flex justify-center px-6 pt-4">
                <span class="text-2xl font-bold">$ ${productos.price} </span>
            </div>
            <p class="px-6 py-4 text-gray-700 text-base text-justify" s>
                ${productos.description}
            </p>

            <div class="px-6 mt-2">
                <span
                    class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Calificación:
                    ${productos.rating.rate}
                </span>
                <span
                    class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Cantidad:
                    ${productos.rating.count}
                </span>
            </div>
            <div class="px-6 py-4">
                <a href="#"
                    class="inline-flex items-center justify-center w-full px-3 py-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="fill-current w-4 h-4 mr-2 ms-2icon icon-tabler icon-tabler-shopping-cart-filled"
                        width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path
                            d="M6 2a1 1 0 0 1 .993 .883l.007 .117v1.068l13.071 .935a1 1 0 0 1 .929 1.024l-.01 .114l-1 7a1 1 0 0 1 -.877 .853l-.113 .006h-12v2h10a3 3 0 1 1 -2.995 3.176l-.005 -.176l.005 -.176c.017 -.288 .074 -.564 .166 -.824h-5.342a3 3 0 1 1 -5.824 1.176l-.005 -.176l.005 -.176a3.002 3.002 0 0 1 1.995 -2.654v-12.17h-1a1 1 0 0 1 -.993 -.883l-.007 -.117a1 1 0 0 1 .883 -.993l.117 -.007h2zm0 16a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm11 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z"
                            stroke-width="0" fill="currentColor" />
                    </svg>
                    Agregar al carrito
                </a>
            </div>
        </article>
        `);

    const main = document.querySelector("main");

    main.append(article);
  });
});
