const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");
const deleted = document.getElementById("deleted");

addBtn.addEventListener("click", addItem);
input.addEventListener("keydown", e => {
 if (e.key === "Enter") addItem();
});

function addItem() {
 const text = input.value.trim();

 if (text === "") return;

 const item = document.createElement("div");
 const span = document.createElement("span");

 span.textContent = text + " ";

 const delBtn = document.createElement("button");

 delBtn.textContent = "Törlés";
 delBtn.addEventListener("click", () => {
   moveToDeleted(text);
   item.remove();
 });

 item.append(span, delBtn);
 list.appendChild(item);
 input.value = "";
}

function moveToDeleted(text) {
 const delItem = document.createElement("div");
 delItem.textContent = text;
 deleted.appendChild(delItem);
}