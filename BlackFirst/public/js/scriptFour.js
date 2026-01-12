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