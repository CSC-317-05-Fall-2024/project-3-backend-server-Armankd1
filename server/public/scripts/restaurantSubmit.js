document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('new-restaurant-form');
    form.addEventListener('submit', handleSubmit);
});

function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const form = event.target;
    const formData = new FormData(form);

    const newRestaurant = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        address: formData.get('address'),
        photo: formData.get('photo')
    };

    console.log('Form Data:', newRestaurant);
    
    try {
        const response = fetch('/api/restaurants', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newRestaurant)
        });

        if (response.ok) {
            window.location.href = '/views/restaurants';
        } else {
            console.error('Failed to create restaurant');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}