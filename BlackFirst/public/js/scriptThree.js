const all = document.querySelector('.all');

const objArr = [
    { img: './picture_next/1.jpg', text: 'Luxorius Elixir Rough', price: '$ 220' },
    { img: './picture_next/2.jpg', text: 'The Golden Legacy', price: '$ 160' },
    { img: './picture_next/3.jpg', text: 'Luxorius Elixir', price: '$ 250' },
    { img: './picture_next/4.jpg', text: 'Luxorius Essence', price: '$ 260' },
    { img: './picture_next/5.jpg', text: 'Auru Aura', price: '$ 200' },
    { img: './picture_next/6.jpg', text: 'Gleaming Gilt', price: '$ 160' },
    { img: './picture_next/7.jpg', text: 'Gilded Elixer Rough', price: '$ 170' },
    { img: './picture_next/8.jpg', text: 'Golden Luminary', price: '$ 120' },
    { img: './picture_next/9.jpg', text: 'Decadent  Opal', price: '$ 160' },
    { img: './picture_next/10.jpg', text: 'Gilded Rough', price: '$ 200' },
    { img: './picture_next/11.jpg', text: 'Glamourous Gilt', price: '$ 160' },
    { img: './picture_next/12.jpg', text: 'Luxury Enigma', price: '$ 190' },
];

const starsArr = new Array(5).fill('★');

objArr.forEach((elem, index) => {
    const elements = document.createElement('div');
    elements.className = 'elements fcc';

    elements.innerHTML = `
                            <img src="${elem.img}">
                            <p>${elem.text}</p>
                            <div class="forStar x"><span>(103)</span></div>
                            <div class="for_price x">
                                <font style="color : #AA572D;">${elem.price}</font>
                                <font style="color : gray;">100ml</font>
                            </div>
                         `

    all.appendChild(elements);
});


const forStar = document.querySelectorAll('.forStar');

forStar.forEach((elem, index) => {
    starsArr.forEach((e, i) => {
        elem.innerHTML += e;
    })
})


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