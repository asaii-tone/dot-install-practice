"use strict";

{
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      fetch("?action=toggle", {
        method: "POST",
        body: new URLSearchParams({
          // カスタム属性data-*の*(id, token)を受け取る。
          id: checkbox.dataset.id,
          token: checkbox.dataset.token,
        }),
      });
    });
  });

  const deleteTodos = document.querySelectorAll(".delete");
  deleteTodos.forEach((deleteTodo) => {
    deleteTodo.addEventListener("click", () => {
      if (!confirm("Are you sure?")) {
        return;
      }
      fetch("?action=delete", {
        method: "POST",
        body: new URLSearchParams({
          id: deleteTodo.dataset.id,
          token: deleteTodo.dataset.token,
        }),
      });
      deleteTodo.parentNode.remove();
    });
  });

  const purge = document.querySelector(".purge");
  purge.addEventListener("click", () => {
    if (!confirm("Are you sure?")) {
      return;
    }
    fetch('?action=purge', {
      method: 'POST',
      body: new URLSearchParams({
        token: purge.dataset.token
      }),
    });
    const lis = document.querySelectorAll("li");
    lis.forEach(li => {
      if(li.children[0].checked){
        li.remove();
      }
    });
  });
}
