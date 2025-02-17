let input = document.querySelector(".input");
let button = document.querySelector(".addBtn");
let lists = document.querySelector(".lists");


let i = 1;

function addTaskFunc() {
  
    let li = document.createElement("li");
    let inputTask = document.createElement("input");
    inputTask.type="text"
    inputTask.readOnly = true;
    inputTask.classList.add("toDoInput")
    let closeBtn = document.createElement("i");
    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.classList.add("editBtn");
    let saveBtn = document.createElement("button");
    saveBtn.innerText = "Save";
    saveBtn.classList.add("editBtn","saveBtn");
    inputTask.value = input.value;
    closeBtn.classList.add("fa-solid", "fa-xmark", "closeMark");
    li.appendChild(inputTask);
    li.appendChild(editBtn);
    li.appendChild(saveBtn);
    li.appendChild(closeBtn);
    lists.appendChild(li);
    closeBtnFunc(closeBtn);
    editBtnFunc(editBtn, inputTask,saveBtn);
    input.value="";
  }


button.addEventListener("click", () => {
if (!input.value.trim()) {
  alert("Please write something!!!")
return
} else {
  addTaskFunc()
}
});

function closeBtnFunc(closeBtn) {
  closeBtn.addEventListener("click", () => {
    closeBtn.parentElement.remove();
  });
}

function editBtnFunc(editBtn, inputTask,saveBtn) {
  editBtn.addEventListener("click", () => {
    inputTask.readOnly = false;
    inputTask.focus();
    saveBtnFunc(saveBtn,inputTask);
  });
}

function saveBtnFunc(saveBtn,inputTask) {
  saveBtn.addEventListener("click",()=>{
    inputTask.readOnly = true;

  })
}