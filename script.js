let listContainer = document.getElementsByClassName("listContainer")[0]; //fetching listContainer
let input = document.getElementById("input"); //fetching input
let btn = document.getElementById("btn"); //fetching btn

btn.addEventListener("click", (e) => {
  e.preventDefault(); //prevent page for refreshing
  let inputVal = input.value; //fetching value from input box
  //listContainer.innerHTML+=inputVal; showing value on screen
if(inputVal==''){
    alert("Enter a value");
    return;

}
  let listItem = document.createElement("div"); //creating a div
  listItem.setAttribute("class", "listItem"); // adding class to div

  let textBox = document.createElement("input"); // creating input textbox
  textBox.value = inputVal; //showing fetched value in   textbox input
  textBox.setAttribute("type", "text"); //set input type = text
  textBox.setAttribute("readonly", ""); //making input non editable
  listItem.append(textBox); //  add textbox to the list

  let listBtn = document.createElement("div"); //creating a div for button as button container
  listBtn.setAttribute("class", "listBtn"); //adding class

  //edit
  let editBtn = document.createElement("div");
  editBtn.setAttribute("id", "edit");
  editBtn.innerHTML = "EDIT";
  listBtn.append(editBtn);

  //delete
  let deleteBtn = document.createElement("div");
  deleteBtn.setAttribute("id", "delete");
  deleteBtn.innerHTML = "DELETE";
  listBtn.append(deleteBtn);

  //done
  let doneBtn = document.createElement("div");
  doneBtn.setAttribute("id", "done");
  doneBtn.innerHTML = "DONE";
  listBtn.append(doneBtn);

  //adding functionality
  //edit functionality
  editBtn.addEventListener("click", () => {
    if (editBtn.innerHTML == "EDIT") {
      textBox.removeAttribute("readonly");
      editBtn.innerHTML = "SAVE";
    } else {
      textBox.setAttribute("readonly", "");
      editBtn.innerHTML = "EDIT";
    }
  });

  //done functionality
  doneBtn.addEventListener("click", () => {
    listContainer.removeChild(listItem);
    listContainer.append(listItem);
  });

  //delete functionality
  deleteBtn.addEventListener("click", () => {
    listContainer.removeChild(listItem);
  });

  listItem.append(listBtn); // append listbtn into list

  listContainer.prepend(listItem); //put item element into list conatiner
});
