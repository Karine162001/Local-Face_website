const slider_box = document.querySelector('.slider_box');
// React_ի Map_ին Կփոխարինի forEach_ը;

// Այն ինչ կրկնվում է Առանձնացնում ենք բոլորից;
const ml = "100ml";

const objectsss = [
        { a : './images/4.jpg', b : 'Luxurious ...', c : '$ 220.00', d : ml },
        { a : './images/5.jpg', b : 'Luxurious ...', c : '$ 220.00', d : ml },
        { a : './images/6.jpg', b : 'Luxurious ...', c : '$ 220.00', d : ml },
        { a : './images/7.jpg', b : 'Luxurious ...', c : '$ 220.00', d : ml }
];
   
objectsss.forEach((elem, index) => {
    const detal = document.createElement('div');
    detal.classList.add('detal');
    slider_box.append(detal);

    const img = document.createElement('img');
    img.src = elem.a;
    detal.append(img);

    const p = document.createElement('p');
    p.textContent = elem.b;
    detal.append(p);
    
    const info = document.createElement('div');
    info.classList.add('info');
    detal.append(info);

    info.innerHTML = `
                        <span style="color : #AA572D;">${elem.c}</span>
                        <span style="color : gray;">${elem.d}</span>
                    `
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