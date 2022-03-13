<?php

require('../app/functions.php');

include('../app/_parts/_header.php');

$names = [
  'taro',
  'jiro',
  'saburo',
];

?>
  <ul>
    <?php if (empty($names)): ?>
      <li>Nobody!</li>
    <?php else: ?>
      <?php foreach ($names as $name): ?>
        <li>Hello, <?= h($name); ?>!</li>
      <?php endforeach; ?>
    <?php endif; ?>
  </ul>

<?php 

include('../app/_parts/_footer.php');
