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
      // データベースが更新されると打ち消し線をつけて、画面も更新されたように見せる。
      // 非同期処理
      checkbox.nextElementSibling.classList.toggle('done');
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
