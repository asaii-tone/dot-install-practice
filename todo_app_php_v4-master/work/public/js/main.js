"use strict";

{
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      checkbox.parentNode.submit();
    });
  });

  const deleteTodos = document.querySelectorAll(".delete");
  deleteTodos.forEach((deleteTodo) => {
    deleteTodo.addEventListener("click", () => {
      if (!confirm('Are you sure?')){
        return;
      }
      deleteTodo.parentNode.submit();
    });
  });
}
