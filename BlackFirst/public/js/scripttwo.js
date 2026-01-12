//for Last Page;
const jsDetails = document.querySelector('.jsDetails');

const objArray = [
    { img: './images/8.jpg', title: 'Designer Delights Collection' },
    { img: './images/9.jpg', title: 'Travel Essentials Collection' },
    { img: './images/10.jpg', title: 'Special Occasions Collection' },
    { img: './images/11.jpg', title: 'Seasonal Sensations Collection' },
    { img: './images/12.jpg', title: 'Vintage Treasures Collection' },
    { img: './images/13.jpg', title: 'Limited Edition Treasures' },
    { img: './images/14.jpg', title: 'Modern Classics Collection' }
];

objArray.forEach((elem, index) => {
    const ourBlock = document.createElement('div');
    ourBlock.className = 'ourBlock';

    const img = document.createElement('img');
    img.src = elem.img;
    img.alt = elem.title;

    const title = document.createElement('h4');
    title.textContent = elem.title;

    ourBlock.appendChild(img);
    ourBlock.appendChild(title);
    jsDetails.append(ourBlock);

});


const latestArticleObject = [
    { img: './images/16.jpg', title: 'The Soothing Symphony of Lavender Perfumes: Unlocking the Secrets of a Fragrant Elixir,', text: 'Lavender, with its enchanting aroma and rich history. has been cherished for centuries as a symbol of relaxation, healing, and timeless beauty. In the world of perfumery, lavender plays a key role in creating captivating fragrances loved by many', },
    { img: './images/17.jpg', title: 'The Art of Curating a Luxury Perfume Collection: A Symphony of Scents and Stories', text: 'A luxury perfume collection is not just an assortment of fragrances: it is a reflection of ones taste, personality, and experiences. Each bottle holds a unique olfactory journey, crafted with the finest ingredients and artistic mastery.', },
    { img: './images/18.jpg', title: 'The Timeless Elegance of Rose Perfumes: Unveiling the Queen of Flowers in Fragrance', text: 'Rose, often referred to as the "Queen of Flowers," has held a special place in human culture and history for centuries. Beyond its captivating beauty. this iconic bloom has also inspired perfumers to create some of the most timeless and exquisite fragrances in the world.', },
];

const article_box = document.querySelector('.article_box');

latestArticleObject.forEach((elem, index) => {
    const detalBox = document.createElement('div');
    detalBox.classList.add('detalB');
    article_box.append(detalBox);

    const image = document.createElement('img');
    image.src = elem.img;
    detalBox.append(image);

    const h4 = document.createElement('h4');
    h4.textContent = elem.title;
    detalBox.append(h4);

    const p = document.createElement('p');
    p.textContent = elem.text;
    detalBox.append(p);

    const butArticle = document.createElement('button');
    butArticle.innerText = "Read More"
    detalBox.append(butArticle);
});

const ulElement = document.querySelectorAll('.ulElement');

const footerData = [
    {arr :  ['Categories', 'Fashion', 'Jewelry', 'Sports', 'Electronics', 'Indoor'],},
    {arr :  ['Shopping', 'Payments', 'Delivery options', 'Buyer protection'],},
    {arr :  ['Customer care', 'Help center', 'Terms & Conditions', 'Privacy policy', 'Returns & refund', 'Survey & feedback'],},
    {arr :  ['Pages', 'About Us', 'Shop', 'Contact Us', 'Services', 'Blog'],},
];

footerData.forEach((elem, index) => {
    elem.arr.forEach((e, i) => {
        const liElement = document.createElement('li');
        liElement.className = 'liElement';
        ulElement[index].append(liElement);

        const aTeg = document.createElement('a');
        aTeg.textContent = e;
        liElement.appendChild(aTeg);
    })
});


