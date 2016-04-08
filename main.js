function addNewItem(list,itemText) {
    var date = new Date();
    //this will create unique id for each list item that will be added
    var id = "" + date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconds();
    var listItem = document.createElement("li");
    listItem.id = "li_" + id;
    //adding a check box
    var check = document.createElement("input");
    check.type = "checkbox";
    check.id = "cb_" + id;
    check.onclick = updateStatus;
    //Spanning the list item text so that checkbox and list item text appear inline
    var span = document.createElement("span");
    span.id = "item_" + id;
    span.innerText = itemText;
    //this will apply rename property on single click
    span.onclick = renameItem;
    //this will apply remove proprty in double click
    span.oncontextmenu = removeItem;
    list.appendChild(check);
    list.appendChild(span);
    list.appendChild(listItem);
    list.style.textTransform = "capitalize";
    list.style.font = "20px arial";
}
function updateStatus() {
    var cbId = this.id.replace("cb_","");
    var itemText = document.getElementById("item_" + cbId);
    //This will check if the checkbox is checked or not
    if(this.checked){
        itemText.style.textDecoration = "line-through";
        itemText.style.font = "20px monospace";
    }
    else{
        itemText.style.textDecoration = "none";
        itemText.style.textTransform = "capitalize";
        itemText.style.font = "20px arial";  
    }
}
function removeItem() {
    var spanId = this.id.replace("item_", "");
    //this will remove all 3 elements "li", "span" , "checkbox"
    var itemText1 = document.getElementById("li_" + spanId);
    var itemText2 = document.getElementById("item_" + spanId);
    var itemText3 = document.getElementById("cb_" + spanId);
    itemText1.parentNode.removeChild(itemText1);
    itemText2.parentNode.removeChild(itemText2);
    itemText3.parentNode.removeChild(itemText3);
}
function renameItem() {
    //a dialogue box will appear 
    var newText = prompt("Change the text to");
    //this will check if newText is blank or have single space
    if(newText == "" || newText == " ") {
            return false;
    }
    else {
        this.innerText = newText;
    }
}
var inItemText = document.getElementById("inItemText");
//webpage will load with textfield already focused
inItemText.focus();
inItemText.onkeyup = function(event) {
    //On pressing enter (13), list item will be added  
    if(event.which == 13) {    
        var itemText = inItemText.value;
        //blank and single space item will not be accepted
        if(itemText == "" || itemText == " ") {
            return false;
        }
        addNewItem(document.getElementById("todoList"),itemText);
        document.getElementById("inItemText").blur();
        //this will clear the textfield once an item is appended
        document.getElementById("inItemText").value = "";
        //this will focus the textfield
        inItemText.focus();
    }
};
