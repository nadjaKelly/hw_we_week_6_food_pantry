document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-food-items');
  form.addEventListener('submit', handleFormSubmit);

  const deleteButton = document.querySelector('#delete-all');
  deleteButton.addEventListener('click', handleDeleteAllClick);
});

//form will empty and can be filled out again
const handleFormSubmit = function (event) {
  event.preventDefault();
  console.log(event);


  //get hold of ul in html
  const list = document.querySelector('ul')

  //create purchase date list and add
  const listItem = document.createElement('li')
  listItem.textContent = `${event.target.purchase.value}`;
  list.appendChild(listItem)

  //create item purchased list and add
  const listItem2 = document.createElement('li')
  listItem2.textContent = `${event.target.foodPurchased.value}`;
  list.appendChild(listItem2)

  //create quantity purchased list and add
  const listItem3 = document.createElement('li')
  listItem3.textContent = `${event.target.quantity.value}`;
  list.appendChild(listItem3)

  //create use by date list and add
  const listItem4 = document.createElement('li')
  listItem4.textContent = `${event.target.useByDate.value}`;
  list.appendChild(listItem4)

  //create select list and add
  const listItem5 = document.createElement('li')
  listItem5.textContent = `${event.target.category.value}`;
  list.appendChild(listItem5)

  document.getElementById('new-food-items').reset();


}

const handleDeleteAllClick = function (event) {
  console.log('delete Button clicked');

  const list = document.querySelector('#food-supplies ul');
  list.innerHTML = '';
}
