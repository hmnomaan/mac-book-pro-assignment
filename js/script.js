let promoAdded = false;

// this function will return DOM item of specific id 
function getDomElement(id) {
    return document.getElementById(id);
}

let promoInput = getDomElement('promo-input');
let memoryCost = getDomElement('memory-cost');
let storageCost = getDomElement('storage-cost');
let deliveryCost = getDomElement('delivery-cost');
let totalCost = getDomElement('total-cost');
let baseCost = getDomElement('base-cost');
let grandTotalCost = getDomElement('grand-total-cost');



function updateCost(type, cost) {
    if (type.includes('memory')) {
        memoryCost.innerText = cost;
    } else if (type.includes('storage')) {
        storageCost.innerText = cost;
    } else if (type.includes('delivery')) {
        deliveryCost.innerText = cost;
    }

    // calculating total cost from price table
    totalCost.innerText = parseFloat(baseCost.innerText) + parseFloat(memoryCost.innerText) +
        parseFloat(storageCost.innerText) + parseFloat(deliveryCost.innerText);

    grandTotalCost.innerText = totalCost.innerText;

    promoAdded = false;
}

function addPromo() {
    grandTotalCost.innerText = parseFloat(grandTotalCost.innerText) - parseFloat(grandTotalCost.innerText) * (20 / 100);
    promoAdded = true;
}

function calculateItem(item, cost) {
    getDomElement(item).addEventListener('click', function() {
        updateCost(item, cost);
    });
}

// calculate cost for each item 
calculateItem('memory-8gb', 0);
calculateItem('memory-16gb', 180);
calculateItem('storage-256gb', 0);
calculateItem('storage-512gb', 100);
calculateItem('storage-1tb', 180);
calculateItem('delivery-normal', 0);
calculateItem('delivery-fast', 20);


document.getElementById('promo-btn').addEventListener('click', function() {
    if (promoAdded == true) //check if promo alreay used
        alert('Promo Code already added');
    else if (promoInput.value == 'stevekaku' && promoAdded == false)
        addPromo();
    else
        alert('Wrong Promo Code!');

    // clear input 
    promoInput.value = '';
});