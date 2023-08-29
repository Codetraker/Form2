var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
//-----------------------------------------------------------
    let newbtn = document.querySelectorAll('.list-group-item');

    newbtn.forEach(function(newbtn){
    //add edit button on li list
    let editbtn1 = document.createElement('button');
    //add class
    editbtn1.className = 'btn btn-default btn-sm float-right';
    //append text
    editbtn1.appendChild(document.createTextNode('Edit'));
    //append edit to li
    newbtn.appendChild(editbtn1);
    });
//--------------------------------------------------------------
// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);

// Add item
function addItem(e){
  e.preventDefault();
  // Get input value
  var newItem = document.getElementById('item').value;
  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  // Create del button element
  var deleteBtn = document.createElement('button');
  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));
  //------------------------------------------------------------------
    //Create Edit buttom
    let editbtn = document.createElement('button');
    //add class
    editbtn.className = 'btn btn-default btn-sm float-right';
    //append text
    editbtn.appendChild(document.createTextNode('Edit'));
//------------------------------------------------------------------
  // Append button to li
  li.appendChild(deleteBtn);
  //----------------------------------------------------------------
    //append edit to li
    li.appendChild(editbtn);
  //----------------------------------------------------------------

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
