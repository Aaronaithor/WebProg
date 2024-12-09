const createRestaurantHomePage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    // Create and append image element
    const image = document.createElement('img');
    image.src = "..\\img\\restaurant.jpg";
    image.height = '300';
    pageContent.appendChild(image);

    
    // Create and append headline
    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to our restaurant!';
    pageContent.appendChild(headline);

    // Create and append copy element
    const copy = document.createElement('p');
    copy.textContent = 'We serve the best food in town. Come and taste it!';
    pageContent.appendChild(copy);
    content.appendChild(pageContent);
}

export default createRestaurantHomePage;