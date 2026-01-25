var ul = document.getElementById('ul');

function todo() {
   var input = document.getElementById('inp');

//    create li
   var li = document.createElement('li');
   li.innerHTML = input.value;
   ul.appendChild(li);

//    deleteBtn
  var dltBtn = document.createElement('button');
  dltBtn.innerHTML = "Delete";
  dltBtn.className = "delete-btn";
  li.appendChild(dltBtn);

    dltBtn.addEventListener('click', function() {
      dlt(this);
   })

//    edit btn 
 var editbtn = document.createElement('button');
 editbtn.innerHTML = "Edit";
 editbtn.className = "edit-btn";
 li.appendChild(editbtn);
  
    editbtn.addEventListener('click', function() {
        edit(this);
    })
}

   function dlt(e) {
      e.parentNode.remove();
    }

    function edit(e) {
        var oldvalue = e.parentNode.firstChild.nodeValue;
        var newvalue = prompt('new value', oldvalue);
        // oldvalue = newvalue;
        e.parentNode.firstChild.nodeValue = newvalue;
    

    }
