'use strict';

{
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      fetch('?action=toggle', {
        method: 'POST',
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
      if (!confirm('Are you sure?')){
        return;
      }
      deleteTodo.parentNode.submit();
    });
  });

  const purge = document.querySelector(".purge");
  purge.addEventListener("click", () => {
    if (!confirm('Are you sure?')){
      return;
    }
    purge.parentNode.submit();
  });
}
