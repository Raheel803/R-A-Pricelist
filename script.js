// Function to calculate product counts
function updateCategoryCounts() {
    const categories = {
        all: document.querySelectorAll('.product').length,
        Nuts: document.querySelectorAll('.product[data-category="Nuts"]').length,
        "Dried Fruits": document.querySelectorAll('.product[data-category="Dried Fruits"]').length,
        "Sweet Snacks": document.querySelectorAll('.product[data-category="Sweet Snacks"]').length,
        Biltong: document.querySelectorAll('.product[data-category="Biltong"]').length,
        "Health Foods and Supplements": document.querySelectorAll('.product[data-category="Health Foods and Supplements"]').length,
        "Create your own gift box": document.querySelectorAll('.product[data-category="Create your own gift box"]').length,
    };

    document.getElementById('count-all').textContent = `(${categories.all})`;
    document.getElementById('count-nuts').textContent = `(${categories.Nuts})`;
    document.getElementById('count-dried-fruits').textContent = `(${categories["Dried Fruits"]})`;
    document.getElementById('count-sweet-snacks').textContent = `(${categories["Sweet Snacks"]})`;
    document.getElementById('count-biltong').textContent = `(${categories.Biltong})`;
    document.getElementById('count-health-foods').textContent = `(${categories["Health Foods and Supplements"]})`;
    document.getElementById('count-gift-box').textContent = `(${categories["Create your own gift box"]})`;
}

// Call the function to update counts on page load
updateCategoryCounts();

// Function to open social media links
function openLink(url) {
    window.open(url, '_blank');
}

