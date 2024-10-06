// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuContainer = document.getElementById('menu');
    menuContainer.innerHTML = '';// Clear the existing menu items


    // Loop through each category and its items in the menu object
    Object.keys(menu).forEach(category => {
        const categoryElement = document.createElement('h2');
        categoryElement.textContent = category;
        menuContainer.appendChild(categoryElement);

        const itemsList = document.createElement('ul');
        menuContainer.appendChild(itemsList);
        menu[category].forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            itemsList.appendChild(listItem);
            listItem.addEventListener('click', () => {
                addToOrder(item);
            });
        });
    });
    
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    const orderItemsList = document.getElementById('order-items')
    const orderTotalElement = document.getElementById('order-total');

    const listItem = document.createElement('li');
    listItem.textContent = itemName;
    orderItemsList.appendChild(listItem);

    const orderItems = Array.from(orderItemsList.getElementsByTagName('li'));
    const totalPrice = orderItems.length * 60;
    orderTotalElement.textContent = totalPrice.toFixed(2);
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    displayMenuItems(menu); // Display the menu items initially
    // Call the function to display menu items
}

// Start the menu system by calling the init function
initMenuSystem(menu);
