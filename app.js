let input = document.querySelector(".input");
let button = document.querySelector(".addBtn");
let lists = document.querySelector(".lists");

// <!-- <li> <span>1.</span> My name is muneeb Ali <i class="fa-solid fa-xmark closeMark "></i></li> -->
let i = 1;
button.addEventListener("click", () => {
  let li = document.createElement("li");
  let para = document.createElement("p");
  let closeBtn = document.createElement("i");
  let editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.classList.add("editBtn");
  let saveBtn = document.createElement("button");
  saveBtn.innerText = "Save";
  saveBtn.classList.add("editBtn","saveBtn");
  para.innerText = input.value;
  para.classList.add("editPara")
  closeBtn.classList.add("fa-solid", "fa-xmark", "closeMark");
  li.appendChild(para);
  li.appendChild(editBtn);
  li.appendChild(saveBtn);
  li.appendChild(closeBtn);
  lists.appendChild(li);
  closeBtnFunc(closeBtn);
  editBtnFunc(editBtn, para,saveBtn);
  input.value="  ";
});

function closeBtnFunc(closeBtn) {
  closeBtn.addEventListener("click", () => {
    closeBtn.parentElement.remove();
  });
}

function editBtnFunc(editBtn, para,saveBtn) {
  editBtn.addEventListener("click", () => {
    let newInput = document.createElement("input");
    newInput.type = "text";
    newInput.value = para.innerText;
    para.innerText = " ";
    para.append(newInput);
    saveBtnFunc(saveBtn,para,newInput);
  });
}

function saveBtnFunc(saveBtn,para,newInput) {
  saveBtn.addEventListener("click",()=>{
    para.innerText=newInput.value;
    newInput.remove();

  })
}