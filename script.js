//your code here
const input=document.getElementById("newTodoInput");
const btn=document.getElementById("addTodoBtn");
const list=document.getElementById("todoList");
btn.addEventListener("click",()=>{
	let task=input.value
	if(task === "") return
	const li=document.createElement("li");
	li.innerText=task
	list.appendChild(li)
	input.value=""
})
