var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
//-----------------------------------------------------------
//ADD EDIT IN ITEM 1,2,3,4
let newbtn = document.querySelectorAll('.list-group-item');
newbtn.forEach(function(newbtn){
let editbtn1 = document.createElement('button');//add edit button on li list
editbtn1.className = 'btn btn-default btn-sm float-right';//add class
editbtn1.appendChild(document.createTextNode('Edit'));//append text
newbtn.appendChild(editbtn1);//append edit to li
});
//--------------------------------------------------------------
//ADD ADD BOX
//Create text box
let newSub = document.createElement('input');
newSub.setAttribute('type' , 'text');
newSub.className = 'form-control mr-2';
newSub.id = 'description';
//Add it
let addlocation = document.querySelector('#addForm');
addlocation.appendChild(newSub);
let addbefore = document.querySelector('.btn');
addlocation.insertBefore(newSub,addbefore);
//--------------------------------------------------------------
// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();
  var newItem = document.getElementById('item').value; // Get input value
  let newDes = document.getElementById('description').value;//GET INPUT VALUE OF DESCRIPTION BOX
  console.log(newDes);
  let text1 = document.createTextNode(newItem);
  console.log(text1);
  let text2 = document.createTextNode(newDes);
  console.log(text2);

  var li = document.createElement('li');// Create new li element
  li.className = 'list-group-item';// Add class
  li.appendChild(text1);// Add text node with input value
  li.appendChild(text2);
  var deleteBtn = document.createElement('button');// Create del button element
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';// Add classes to del button
  deleteBtn.appendChild(document.createTextNode('X'));// Append text node
  //------------------------------------------------------------------
    let editbtn = document.createElement('button');//Create Edit buttom
    editbtn.className = 'btn btn-default btn-sm float-right';//add class
    editbtn.appendChild(document.createTextNode('Edit'));//append text
//------------------------------------------------------------------
  li.appendChild(deleteBtn); // Append Delete button to li
  li.appendChild(editbtn);//append edit to li
  
  // Append li to list
  itemList.appendChild(li);

  
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get list
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
      let itemName1 = item.childNodes[0].textContent;
      let itemName2 = item.childNodes[1].textContent;
      if(itemName1.toLowerCase().indexOf(text)!=-1 || itemName2.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }