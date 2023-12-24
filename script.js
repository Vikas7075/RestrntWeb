document.addEventListener('DOMContentLoaded', function () {
    const usernameSpan = document.getElementById('username');
    const userInfoDiv = document.getElementById('user-info');
    const logoutBtn = document.getElementById('logout-btn');
    const menuSection = document.getElementById('menu');
    const cartItemsUl = document.getElementById('cart-items');
    const totalPriceP = document.getElementById('total-price');
    const checkoutBtn = document.getElementById('checkout-btn');


    const isLoggedIn = window.confirm('Login to Aman Fast Food?');
    if (isLoggedIn) {
        const username = prompt('Enter your username:');
        usernameSpan.textContent = `Welcome, ${username}!`;
        userInfoDiv.classList.remove('hidden');
    }


    const menuItems = [
        { name: 'Burger', price: 99, image: 'https://leanandgreenbusiness.com/wp-content/uploads/2019/04/images1889-5ca5983e24411-1024x683.jpg' },
        { name: 'Pizza', price: 89, image: 'https://img.freepik.com/premium-vector/realistic-pizza-fast-food-items-vector_984715-70.jpg?w=2000' },
        { name: 'Dosa', price: 150, image: 'https://3.bp.blogspot.com/-yYhnK1ggxus/Wyj70Dhc4WI/AAAAAAAAHj0/loF5h2OkW3sIAwU_vJMYkYw0UkTntLCoQCLcBGAs/s1600/indian-1768906_960_720.jpg' },
        { name: 'Chiken', price: 199, image: 'https://b.zmtcdn.com/data/pictures/chains/7/19433877/73432463301d4d23b20a1d248b29bba4.jpg' },
        { name: 'Mutton', price: 299, image: 'https://content.jdmagicbox.com/comp/darbhanga/a6/9999p6272.6272.190911000830.m9a6/catalogue/paul-s-cafeteria-darbhanga-fast-food-0cxv1e6bpj.jpg?clr=#502216' },
        { name: 'Pizza', price: 99, image: 'https://via.placeholder.com/150' },
        { name: 'Fries', price: 49, image: 'https://via.placeholder.com/150' },
        { name: 'Pizza', price: 89, image: 'https://via.placeholder.com/150' },
        { name: 'Fries', price: 109, image: 'https://via.placeholder.com/150' },
    ];

    // Display menu items
    menuItems.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>₹${item.price.toFixed(2)}</p>
            <button class="add-to-cart-btn" data-name="${item.name}" data-price="${item.price}">Add to Cart</button>
        `;
        menuSection.appendChild(card);
    });

    // Cart functionality
    const cart = [];

    function updateCart() {
        cartItemsUl.innerHTML = '';
        let total = 0;
        cart.forEach((item, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                ${item.name} - ₹${item.price.toFixed(2)}
                <button class="remove-from-cart-btn" data-index="${index}">Remove</button>
            `;
            cartItemsUl.appendChild(li);
            total += item.price;
        });
        totalPriceP.textContent = `Total: $${total.toFixed(2)}`;
    }

    menuSection.addEventListener('click', function (event) {
        if (event.target.classList.contains('add-to-cart-btn')) {
            const itemName = event.target.getAttribute('data-name');
            const itemPrice = parseFloat(event.target.getAttribute('data-price'));
            const newItem = { name: itemName, price: itemPrice };
            cart.push(newItem);
            updateCart();
        }
    });

    cartItemsUl.addEventListener('click', function (event) {
        if (event.target.classList.contains('remove-from-cart-btn')) {
            const index = parseInt(event.target.getAttribute('data-index'));
            cart.splice(index, 1);
            updateCart();
        }
    });

    checkoutBtn.addEventListener('click', function () {
        const total = cart.reduce((acc, item) => acc + item.price, 0);
        alert(`Total amount: ₹${total.toFixed(2)}`);
    });

    logoutBtn.addEventListener('click', function () {
        userInfoDiv.classList.add('hidden');
    });
});
