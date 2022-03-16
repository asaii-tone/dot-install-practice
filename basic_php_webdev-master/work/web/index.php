<?php

require('../app/functions.php');

include('../app/_parts/_header.php');

?>

<form action="result.php" method="get">
  <label><input type="radio" name="color" value="orange">Orange</label>
  <label><input type="radio" name="color" value="pink">Pink</label>
  <label><input type="radio" name="color" value="gold">Gold</label>
  <!-- <label><input type="checkbox" name="colors[]" value="orange">Orange</label>
  <label><input type="checkbox" name="colors[]" value="pink">Pink</label>
  <label><input type="checkbox" name="colors[]" value="gold">Gold</label> -->
  <!-- <select name="colors[]" multiple>
    <option value="orange">Orange</option>
    <option value="pink">Pink</option>
    <option value="gold">Gold</option>
  </select> -->
  <!-- <textarea name="message"></textarea> -->
  <!-- <input type="text" name="username"> -->
  <button>Send</button>
  <a href="reset.php">reset</a>
</form>

<?php 

include('../app/_parts/_footer.php');
