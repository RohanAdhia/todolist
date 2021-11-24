window.onload = function() {
  document.getElementById("myInput").focus();
};

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
  saveList();
  window.location.reload();
}



// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    // div.style.display = "none";
    div.remove();
    saveList();
    window.location.reload();
  }
}




// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    saveList();
    window.location.reload();
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
    saveList();
    // window.location.reload();
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      // div.style.display = "none";
      div.remove();
      saveList();
      // loadList();
      window.location.reload();
    }
  }

  var span_edit = document.createElement("SPAN");
  var edit_txt = document.createTextNode("✏️");
  span_edit.className = "edit";
  span_edit.appendChild(edit_txt);
  li.appendChild(span_edit);
  var edit = document.getElementsByClassName("edit");

  for (i = 0; i < edit.length; i++) {
    edit[i].onclick = function() {
      var div = this.parentElement.childNodes[0].textContent;
      // console.log(div);
      document.getElementById("myInput").value = div;
      // this.parentElement.style.display = "none";
      this.parentElement.remove();
      document.getElementById("myInput").focus();
      saveList();
      // loadList();
      // window.location.reload();
    }
  }

}

// var edit = document.getElementsByClassName("edit");
// var i;
// for (i = 0; i < edit.length; i++) {
//   edit[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }

document.getElementById("myInput").addEventListener("keypress", function() {
  // event.preventDefault();
  if (event.keyCode === 13)
    newElement();
});


var toDoListItems = document.querySelector("#myUL");

function saveList() {
  var toDos = [];
  for (var i = 0; i < toDoListItems.children.length; i++) {
    var toDo = toDoListItems.children.item(i).childNodes[0];
    var toDoInfo = {
      "task": toDo.textContent,
      "completed": toDoListItems.children.item(i).classList.contains("checked")
    };
    toDos.push(toDoInfo);
  }
  // alert(JSON.stringify(toDos));
  localStorage.setItem("toDos", JSON.stringify(toDos));
}

function loadList() {
  if (localStorage.getItem("toDos") != null) {
    var toDos = JSON.parse(localStorage.getItem("toDos"));

    for (var i = 0; i < toDos.length; i++) {
      var toDo = toDos[i];
      var li = document.createElement("li");
      var t = document.createTextNode(toDo.task);
      li.appendChild(t);
      if (toDo.completed === true) {
        li.className = "checked";
      }
      document.getElementById("myUL").appendChild(li);
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      li.appendChild(span);
      for (var j = 0; j < close.length; j++) {
        close[j].onclick = function() {
          var div = this.parentElement;
          div.remove();
          saveList();
          // loadList();
          window.location.reload();
        }
      }

      var span_edit = document.createElement("SPAN");
      // var edit_txt = document.createTextNode("🖉");
      var edit_txt = document.createTextNode("✏️");
      span_edit.className = "edit";
      span_edit.appendChild(edit_txt);
      li.appendChild(span_edit);
      var edit = document.getElementsByClassName("edit");

      for (var k = 0; k < edit.length; k++) {
        edit[k].onclick = function() {
          var div = this.parentElement.childNodes[0].textContent;
          // console.log(div);
          document.getElementById("myInput").value = div;
          this.parentElement.remove();
          document.getElementById("myInput").focus();
          saveList();
          // window.location.reload();
        }
      }

    }
  }
}
// saveList();
loadList();
