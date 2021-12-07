'use strict'

const inputBtn = document.querySelector('.input-button');
const listInput = document.querySelector('.input-text');
const priceInput = document.querySelector('.input-price');
const allList = document.querySelector('.shopping-list');
const resetBtn = document.querySelector('.all-delete');
const totalPrice = document.querySelector('.price-total');
let listIndex = 0;
let total = 0;

inputBtn.addEventListener('click', (event) => {
    const listName = listInput.value;
    const price = priceInput.value;
    if(listName === '' || price === '') {
        return;
    }
    creatList(listName,price,listIndex);
    addPrice(listIndex);
    updataPrice(total);
    listIndex++;
    listInput.value = '';
    priceInput.value = '';
    listInput.focus();
});

allList.addEventListener('click', (event) => {
    if(event.target.className == 'item-delete' || event.target.parentNode.className == 'item-delete') {
        const index = event.target.dataset.index || event.target.parentNode.dataset.index;
        const deleteList = allList.querySelector(`.item[data-index="${index}"]`);
        const deletePrice = deleteList.querySelector(`.item-price[data-index="${index}"]`);
        const price = Number(deletePrice.innerText);
        total = total - price;
        deleteList.remove();
        updataPrice(total);
    }
})

resetBtn.addEventListener('click', () =>{
    resetList();
    returnTotal();
    updataPrice(total);
})


function creatList(listName, price, listIndex) {
    const list = document.createElement('li');
    list.setAttribute('class', 'item');
    list.setAttribute('data-index', `${listIndex}`);
    list.innerHTML = `
        <div class="item-left">
            <input type="checkbox" class="item-checkbox">
            <span class="item-name">${listName}</span>
        </div>
        <div class="item-right">
            <span class="item-price" data-index ="${listIndex}"><i class="fas fa-coins"></i>${price}</span>
            <button class="item-delete" data-index ="${listIndex}"><i class="fas fa-trash-alt"></i></button>
        </div> `;
    allList.append(list);
}

function resetList() {
    allList.innerHTML = '';
    listIndex = 0;
}

function deleteList(event) {
    console.log(event.target.dataset.index);
}

function addPrice(listIndex) {
    const priceList = allList.querySelector(`.item-price[data-index="${listIndex}"]`);
    let price = Number(priceList.innerText);
    return total = total + price;
}

function updataPrice(total) {
    totalPrice.innerText = total;
}

function returnTotal() {
    total = 0;
}