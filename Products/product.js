

// product.js

let data = [];

const fetchData = async () => {
    try {
        let response = await fetch("https://fakestoreapi.com/products");
        data = await response.json();
        displayProducts(data);
    } catch (error) {
        console.log(error);
    }
}

const displayProducts = (products) => {
    let container = document.getElementById("container");
    container.innerHTML = '';

    products.forEach(product => {
        let card = document.createElement("div");
        card.className = "card";

        let img = document.createElement("img");
        img.className = "img";
        img.src = product.image;

        let h4 = document.createElement("h4");
        h4.innerText = product.category;
        h4.className = "h4";

        let p = document.createElement("p");
        p.innerText = `$${product.price}`;
        p.className = "p";

        let h5 = document.createElement("h5");
        h5.innerText = product.title;
        h5.className = "h5";

        let h3 = document.createElement("h3");
        h3.innerText = `Rating: ${product.rating.rate}`;

        card.append(img, h4, p, h5, h3);
        container.append(card);
    });
}

document.getElementById("sortSelect").addEventListener("change", () => {
    let filterValue = document.getElementById("sortSelect").value;
    let sortedData = sortProducts(data.slice(), filterValue);
    displayProducts(sortedData);
});

const sortProducts = (products, sortBy) => {
    switch (sortBy) {
        case 'price-asc':
            return products.sort((a, b) => a.price - b.price);
        case 'price-desc':
            return products.sort((a, b) => b.price - a.price);
        default:
            return products;
    }
}

document.getElementById("searchInput").addEventListener("input", () => {
    let searchQuery = document.getElementById("searchInput").value.toLowerCase();
    let filteredData = data.filter(product =>
        product.title.toLowerCase().includes(searchQuery) || 
        product.category.toLowerCase().includes(searchQuery)
    );
    displayProducts(filteredData);
});

fetchData();
