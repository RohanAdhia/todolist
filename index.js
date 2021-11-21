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

}



// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}




// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
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
      div.style.display = "none";
    }
  }

  var span_edit = document.createElement("SPAN");
  var edit_txt = document.createTextNode("🖉");
  span_edit.className = "edit";
  span_edit.appendChild(edit_txt);
  li.appendChild(span_edit);
  var edit = document.getElementsByClassName("edit");

  for (i = 0; i < edit.length; i++) {
    edit[i].onclick = function() {
      var div = this.parentElement.childNodes[0].textContent;
      // console.log(div);
      document.getElementById("myInput").value = div;
      this.parentElement.style.display = "none";
      document.getElementById("myInput").focus();

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
