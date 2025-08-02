// This would normally be fetched from data.json, but we'll include it here for demonstration
const coffeeData = [
    {
        "id": 1,
        "name": "Espresso",
        "price": "₹ 170",
        "description": "Espresso with steamed milk and a silky layer of foam. A classic Italian favorite.",
        "imageUrl": "./img/espresso.jpg",
        "likes": 0
    },
    {
        "id": 2,
        "name": "Cappuccino",
        "price": "₹ 150",
        "description": "Rich espresso topped with steamed milk and a thick layer of foam.",
        "imageUrl": "./img/cappuccino.jpg",
        "likes": 0
    },
    {
        "id": 3,
        "name": "Americano",
        "price": "₹ 80",
        "description": "A classic American coffee with a rich espresso base and hot water. Perfect for those who love a strong coffee flavor.",
        "imageUrl": "./img/Americano.jpg",
        "likes": 0
    },
    {
        "id": 4,
        "name": "Indian",
        "price": "₹ 30",
        "description": "A traditional South Indian coffee made with a blend of dark roasted beans and chicory, served with steamed milk.",
        "imageUrl": "./img/Southindian.jpg",
        "likes": 0
    },
    {
        "id": 5,
        "name": "Irish Coffee",
        "price": "₹ 60",
        "description": "A delightful blend of rich coffee, Irish whiskey, and a touch of cream. Perfect for a cozy evening.",
        "imageUrl": "./img/Irish Coffee.jpg",
        "likes": 0
    },
    {
        "id": 6,
        "name": "Iced Mocha",
        "price": "₹ 100",
        "description": "A refreshing iced coffee with espresso, chocolate syrup, and milk, served over ice.",
        "imageUrl": "./img/iced-mocha.jpg",
        "likes": 0
    },
    {
        "id": 7,
        "name": "Mocha",
        "price": "₹ 200",
        "description": "A rich blend of espresso and steamed milk with chocolate syrup, topped with whipped cream.",
        "imageUrl": "./img/mocha.jpg",
        "likes": 0
    },
    {
        "id": 8,
        "name": "Flat White",
        "price": "₹ 75",
        "description": "A smooth and velvety coffee with a double shot of espresso and steamed milk, served in a ceramic cup.",
        "imageUrl": "./img/Flat White Coffee.jpg",
        "likes": 0
    },
    {
        "id": 9,
        "name": "Black Tea",
        "price": "₹ 50",
        "description": "A bold and robust tea brewed from black tea leaves, perfect for a morning boost.",
        "imageUrl": "./img/Black_tea.jpg",
        "likes": 0
    },
    {
        "id": 10,
        "name": "Desi Tea",
        "price": "₹ 20",
        "description": "Traditional Indian-style tea brewed with milk, sugar, and spices for a comforting taste.",
        "imageUrl": "./img/desi_tea.jpg",
        "likes": 0
    },
    {
        "id": 11,
        "name": "Green Tea",
        "price": "₹ 30",
        "description": "A light and refreshing tea rich in antioxidants, known for its health benefits.",
        "imageUrl": "./img/green_tea.jpg",
        "likes": 0
    },
    {
        "id": 12,
        "name": "Herbal Tea",
        "price": "₹ 50",
        "description": "A caffeine-free infusion made with herbs, flowers, and fruits to calm and soothe.",
        "imageUrl": "./img/herble_tea.jpg",
        "likes": 0
    },
    {
        "id": 13,
        "name": "Masala Tea",
        "price": "₹ 40",
        "description": "A spicy and aromatic blend of tea with Indian spices like cardamom, cinnamon, and cloves.",
        "imageUrl": "./img/masala_tea.jpg",
        "likes": 0
    },
    {
        "id": 14,
        "name": "Lemon Tea",
        "price": "₹ 30",
        "description": "A refreshing tea infused with lemon for a zesty and invigorating flavor.",
        "imageUrl": "./img/lemon_tea.jpg",  
        "likes": 0
    },
    {
        "id": 15,
        "name": "Gokarn Tea(Blue Tea)",
        "price": "₹ 50",
        "description": "A warming  blend of folowers of gokarn, perfect for a Health.",
        "imageUrl": "./img/blue_tea.jpg",
        "likes": 0  
    },
    {
        "id": 16,
        "name": "Special Cutting",
        "price": "₹ 10",
        "description": "A soothing tea made with fresh ginger, perfect for digestion and relaxation.",
        "imageUrl": "./img/secial_cutting.jpg",
        "likes": 0
    }


];
// Function to render div cards
function renderCoffeeCards() {
    const container = document.getElementById('coffeeContainer');
    container.innerHTML = '';
    coffeeData.forEach(coffee => {
        const card = document.createElement('div');
        card.className = 'coffee-card';

        card.innerHTML = `
                    <img src="${coffee.imageUrl}" alt="${coffee.name} coffee in a ceramic cup" class="coffee-image">
                    <div class="coffee-content">
                        <h3 class="coffee-title">${coffee.name}</h3>
                        <div class="coffee-price">${coffee.price}</div>
                        <p class="coffee-desc">${coffee.description}</p>
                        <div class="like-section">
                            <span>Quntity:</span>
                            <div class="btn-group">
                                <button class="btn btn-sm" onclick="updateLikes(${coffee.id}, -1)">-</button>
                                <span class="like-count" id="likes-${coffee.id}">${coffee.likes}</span>
                                <button class="btn btn-sm" onclick="updateLikes(${coffee.id}, 1)">+</button>
                            </div>
                        </div>
                    </div>
                `;

        container.appendChild(card);
    });
}
// Function to update like counts
function updateLikes(id, change) {
    const coffee = coffeeData.find(item => item.id === id);
    coffee.likes += change;

    // Ensure likes don't go negative
    if (coffee.likes < 0) coffee.likes = 0;

    document.getElementById(`likes-${id}`).textContent = coffee.likes;
}

renderCoffeeCards();


//Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// product Animation

const coffeeCards = document.querySelectorAll('.coffee-card');
coffeeCards.forEach(card => {
    card.addEventListener('mouseover', function() {
        this.style.transform = 'translateY(-15px)';
}); 
    card.addEventListener('mouseout', function() {
        this.style.transform = 'translateY(0)';
    });
});    
