const itemForm = document.getElementById('item-form');
const iteminput = document.getElementById('item-input')
const itemlist = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter');
const formBtn = itemForm.querySelector('button');
let isEditMode = false;

// display items
function displayItems(){
    const ItemsFromStorage = getItemsFromStorage();
    ItemsFromStorage.forEach((item) => addItemtoDOM(item))

    clearUI()
}


function onAISubmit(e){
 
    
  e.preventDefault()
 const newItem = iteminput.value

 if(newItem === ''){
    alert('Insert Something')
    return
 }
 
 if(isEditMode){
    const itemToEdit = itemlist.querySelector('.edit-mode');

    removeItemfromStorage.apply(itemToEdit.textContent);
    itemToEdit.classList.remove('edit-mode');
    itemToEdit.remove();
    isEditMode = false;
 }else{
    if(checkIfItemExists(newItem)) {
    alert('That Item already Exists!');
    return
    }
 }
 //Create Item dom Elemeent
 addItemtoDOM(newItem);

 //Add item to local storage
 addItemstoStorage(newItem)

 clearUI()
 iteminput.value = ''
}

function addItemtoDOM(item){
    const li = document.createElement('li');
 li.appendChild(document.createTextNode(item));

 const btn = createBtn("remove-item btn-link text-red");

 li.appendChild(btn);

 itemlist.appendChild(li);
}

function createBtn(classes){
    const cBtn = document.createElement('button');
    const Icon = createIcon('fa-solid fa-xmark')
    cBtn.className = classes;
    cBtn.appendChild(Icon);
    return cBtn;
    }
    
    function createIcon(classes){
        const cIcon = document.createElement('i');
        cIcon.className = classes;
        return cIcon;
    }

function addItemstoStorage(item){
    const ItemsFromStorage = getItemsFromStorage();

    //add new item to array
    ItemsFromStorage.push(item);

    //Convert to JSON String and set to local storage
    localStorage.setItem('items', JSON.stringify(ItemsFromStorage))
}

function getItemsFromStorage(){
    let ItemsFromStorage;

    if(localStorage.getItem('items') === null){
        ItemsFromStorage = [];
    }else {
        ItemsFromStorage = JSON.parse(localStorage.getItem('items'))
    }

    return ItemsFromStorage
}

function onClickItem(e){
    if(e.target.parentElement.classList.contains('remove-item')){
        removebtn(e.target.parentElement.parentElement)
    }else {
        setItemtoEdit(e.target)
    }
}

function checkIfItemExists(item){
    const itemsFromStorage = getItemsFromStorage();

    return itemsFromStorage.includes(item)
}

function setItemtoEdit(item){
 isEditMode = true;

 itemlist
 .querySelectorAll('li')
 .forEach((i)=> i.classList.remove('edit-mode'))

 item.classList.add('edit-mode');

 formBtn.innerHTML = `<i class = "fa-solid fa-pen"></i> Update Item`
 formBtn.style.backgroundColor = '#290199'
 iteminput.value = item.textContent
}

function removebtn(item){
    if(confirm('So, you want to clear the list')){

       item.remove()

        removeItemfromStorage(item.textContent);

        clearUI()
    }

    
}

function removeItemfromStorage(item){
let itemsFromStorage = getItemsFromStorage();

 //Filter out Item to be removed
 itemsFromStorage = itemsFromStorage.filter((i) => i !== item)

 //reset to localStorage
 localStorage.setItem('items', JSON.stringify(itemsFromStorage))
}



function clearall() {
while(itemlist.firstChild) {
itemlist.removeChild(itemlist.firstChild);


}

//clear from the localStorage
localStorage.removeItem('items')

clearUI()}

function filterItems(e){
    const text = e.target.value.toLowerCase();
    const items = itemlist.querySelectorAll('li');

    items.forEach((item) => {
        const itemName = item.firstChild.textContent.toLowerCase()

        if (itemName.indexOf(text) != -1){
            item.style.display = 'flex'
        
        }else{
            item.style.display = 'none'
        }
        
    });  
};

function clearUI(){
    iteminput.value = '';
    const items = itemlist.querySelectorAll('li');
if(items.length === 0){
    clearBtn.style.display = 'none';
    itemFilter.style.display = 'none';
} else {
    clearBtn.style.display = 'block';
    itemFilter.style.display = 'block';
}
formBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Add Item';
formBtn.style.backgroundColor = '#333'

isEditMode = false;
}

//Initialize app
function init(){

itemForm.addEventListener('submit', onAISubmit);
itemlist.addEventListener('click', onClickItem);
clearBtn.addEventListener('click', clearall);
itemFilter.addEventListener('input', filterItems);
document.addEventListener('DOMContentLoaded', displayItems)

clearUI()
}

init()
