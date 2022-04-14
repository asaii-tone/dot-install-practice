<?php

require_once(__DIR__ . '/../app/config.php');

createToken();
$pdo = getPdoInstance();

$todos = getTodos($pdo);
if ($_SERVER['REQUEST_METHOD'] === 'POST'){
  validateToken();
  $action = filter_input(INPUT_GET, 'action');
  switch ($action) {
    case 'add':
      addTodo($pdo);
      break;
    case 'toggle':
      toggleTodo($pdo);
      break;
  }
  header('Location:' . SITE_URL);
  exit;
}

?>

<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>My Todos</title>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <h1>Todos</h1>

  <form action="?action=add" method="post">
    <input type="text" name="title"  placeholder="add new text .">
    <input type="hidden" name="token" value="<?= h($_SESSION['token']); ?>">
  </form>
  <ul>
    <?php foreach($todos as $todo): ?>
      <li>
        <form action="?action=toggle" method="post">
          <input type="checkbox" <?= $todo->is_done ? 'checked' : ''; ?>>
          <input type="hidden" name="id" value="<?= h($todo->id) ?>">
          <input type="hidden" name="token" value="<?= h($_SESSION['token']); ?>">
        </form>
        <span class="<?= $todo->is_done ? 'done' : ''; ?>"><?=h($todo->title); ?></span>
      </li>
    <?php endforeach; ?>   
    <!-- <li>
      <input type="checkbox" checked>
      <span class="done">Title</span>
    </li>
    <li>
      <input type="checkbox">
      <span>Title</span>
    </li> -->
  </ul>
  <script src="js/main.js"></script>
</body>
</html>