const products = [
    {
        name: "Salted Pistachio",
        price: 365,
        image: "salted-pistachio.jpg",
        description: "A classic snack, perfect for any occasion."
    },
    {
        name: "Raw Pistachio",
        price: 780,
        image: "raw-pistachio.jpg",
        description: "A healthy and nutritious snack, straight from nature."
    },
    // ... Add more products with image and description
];

const productGrid = document.querySelector('.product-grid');

products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.alt = product.name;
    productCard.appendChild(productImage);

    const productName = document.createElement('h3');
    productName.textContent = product.name;
    productCard.appendChild(productName);

    const productPrice = document.createElement('p');
    productPrice.textContent = `R${product.price}`;
    productCard.appendChild(productPrice);

    const productDescription = document.createElement('p');
    productDescription.textContent = product.description;
    productCard.appendChild(productDescription);

    productGrid.appendChild(productCard);
});
