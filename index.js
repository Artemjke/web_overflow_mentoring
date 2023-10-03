document.addEventListener("DOMContentLoaded", function () {



	const todoForm = document.querySelector("#todoForm");
	const todoInput = document.querySelector("#todoInput");
	const deadlineDate = document.querySelector("#deadLineDate");
	const todoList = document.querySelector("#todoList");




	todoForm.addEventListener("submit", function (e) {
		e.preventDefault();


		const todoText = todoInput.value;
		const toDate = deadlineDate.value;


		const todoItem = createTodoItem(todoText, toDate);
		todoList.appendChild(todoItem);

		todoInput.value = "";
		deadlineDate.value = "";

		function createTodoItem(text, toDate) {
			const todoItem = document.createElement("li");
			todoItem.classList.add("todo-item");

			const checkbox = document.createElement("input");
			checkbox.type = "checkbox";
			checkbox.classList.add("checkbox");

			const todoText = document.createElement("span");
			todoText.textContent = text;

			const toDateElement = document.createElement("span");
			toDateElement.textContent = toDate ? `Last date to do: ${toDate}` : "";

			const removeButton = document.createElement("button");
			removeButton.classList.add("remove-button");
			removeButton.textContent = "Remove";
			removeButton.addEventListener("click", function () {
				todoList.removeChild(todoItem);
			});

			todoItem.appendChild(checkbox);
			todoItem.appendChild(todoText);
			todoItem.appendChild(toDateElement);
			todoItem.appendChild(removeButton);

			checkbox.addEventListener("change", function () {
				if (checkbox.checked) {
					todoText.style.textDecoration = "line-through";
					toDateElement.style.textDecoration = "line-through";
				} else {
					todoText.style.textDecoration = "none";
					toDateElement.style.textDecoration = "none";
				}
			});
		}   

   
	});

});