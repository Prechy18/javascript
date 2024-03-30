const groceryForm = document.querySelector(".grocery__form");
const itemInput = document.querySelector("#item__input");
const itemQuantity = document.querySelector("#item__quantity");
const itemPrice = document.querySelector("#price__input");
let generalMsg = document.querySelector("#general__msg");
let itemListsContainer = document.querySelector(".item__lists");
let emptyCartContainer = document.querySelector("#empty__Item");
let clearBtn = document.querySelector("#clear__btn");
let itemLists = JSON.parse(localStorage.getItem("itemLists"));

groceryForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let isValid = validateInput();

  if (!isValid) {
    return;
  } else {
    acceptData();
    calculateCartLength();
    generateItem();
  }

  groceryForm.reset();
});

const validateInput = () => {
  let itemInputValue = itemInput.value.trim();
  let itemQuantityValue = itemQuantity.value.trim();
  let itemPriceValue = itemPrice.value.trim();

  if (itemInputValue == "" || itemQuantityValue == "" || itemPriceValue == "") {
    generalMsg.innerText = "Please Enter value";
    generalMsg.classList.add("err-msg");

    // asynchronous operation
    setTimeout(() => {
      generalMsg.innerText = "";
      generalMsg.classList.remove("err-msg");
    }, 2000);

    return false;
  } else {
    return true;
  }
};

const acceptData = () => {
  let item = {
    id: new Date().getTime(),
    name: itemInput.value,
    quantity: itemQuantity.value,
    price: itemPrice.value,
  };

  itemLists.push(item);
  localStorage.setItem("itemLists", JSON.stringify(itemLists));
  generalMsg.innerText = `${item.name} is added to cart`;
  generalMsg.classList.add("success-msg");

  setTimeout(() => {
    generalMsg.innerText = "";
    generalMsg.classList.remove("success-msg");
  }, 2000);
  console.log(itemLists);
};

const calculateCartLength = () => {
  document.querySelector(".cart__total").innerText = itemLists.length;
};

calculateCartLength();

const generateItem = () => {
  if (itemLists.length == 0) {
    emptyCartContainer.classList.remove("hide");
    emptyCartContainer.innerText = "The cart is empty";
    itemListsContainer.innerHTML = "";
  } else {
    emptyCartContainer.innerText = "";
    emptyCartContainer.classList.add("hide");
    itemListsContainer.innerHTML = itemLists
      .map((item) => {
        let { id, name, price, quantity } = item;

        return `
      <li class="list">
                <span class="grocery__item">${name}</span>
                <span class="grocery_quatity_price">${quantity} X $${price}</span>
                <span class="action__btns">
                  <i class="bi bi-pencil-square"></i>
                  <i onclick="deleteItem(${id})" class="bi bi-trash"></i>
                </span>
              </li>
      `;
      })
      .join("");
  }
};

generateItem();

const clearItems = () => {
  itemLists = [];
  generateItem();
  calculateCartLength();
};

clearBtn.addEventListener("click", () => {
  clearItems();
});

const deleteItem = (id) => {
  itemLists = itemLists.filter((item) => item.id !== id);
  localStorage.setItem("itemLists", JSON.stringify(itemLists));
  generateItem();
  calculateCartLength();

  console.log(itemLists);
};