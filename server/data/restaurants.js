// Fill this in
let restaurantData = [
    {
        id: 0,
        name: "Seasons Restaurant",
        address: "15, 5 Mesrop Mashtots, Yerervan 0002 Armenia", 
        phone: "+374 43 709070", 
        photo: "./images/seasons.jpg"
    },
    {
        id: 1,
        name: "Tavern Yerevan", 
        address: "91 Teryan St., Yerevan 0009 Armenia",
        phone: "+374 96 508800", 
        photo: "./images/tavernYerevan.jpg"
    },
    {
        id: 2,
        name: "In Vino",
        address: "6 Saryan street, Yerevan 0002 Armenia",
        phone: "+374 10 521931",
        photo: "./images/invino.jpg"
    },
    {
        id: 3,
        name: "Sherep Restaurant",
        address: "Amiryan str. 1, Yerevan 0010 Armenia",
        phone: "+374 43 600880",
        photo: "./images/sherep-restaurant.jpg"
    },
    {
        id: 4,
        name: "Syrovarnya",
        address: "Northern Avenue 5, Yerevan 0001 Armenia",
        phone: "+374 11 381111",
        photo: "./images/syrovarnya.jpg"
    },
    {
        id: 5,
        name: "Cosa Nostra",
        address: "91 Pavstos Buzand str., Yerevan 0002 Armenia",
        phone: "+374 10 754466",
        photo: "./images/cosanostra.jpg"
    }
];

let lastId = restaurantData.length;

const getNextId = () => {
    lastId += 1;
    return lastId;
}

// Get a list of restaurants
const getRestaurants = () => {
    return restaurantData;
};


// Get a restaurant by id
const getRestaurant = (id) => {
    return restaurantData.find(r => r.id === id);
};

// Create a new restaurant entry
const createRestaurant = (newRestaurant) => {
    const id = getNextId()-1;
    const restaurant = { id, ...newRestaurant };
    restaurantData.push(restaurant);
    console.log('Updated restaurantData:', restaurantData);
    return restaurant;
};

// Delete a restaurant by id
const deleteRestaurant = (id) => {
    restaurantData = restaurantData.filter(r => r.id !== id);
    console.log('Updated restaurantData:', restaurantData);
    return restaurantData;
};

export { getRestaurants, getRestaurant, createRestaurant, deleteRestaurant };