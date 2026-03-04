<?php
require('./elements/backBtn.php');
?>
<h1>Nouveau Deck</h1>
<div id="newdeck-container">
    <button class="card-btn horizontal leader">
        <img src="./assets/images/plus-icon.png" alt="plus icon">
    </button>
    <button class="card-btn horizontal base">
        <img src="./assets/images/plus-icon.png" alt="plus icon">
    </button>
    <div id="newdeck-base-container">
        <?php
        for ($i = 0; $i < 50; $i++) {
            echo '<button class="card-btn">
                <img src="./assets/images/plus-icon.png" alt="plus icon">
            </button>';
        }
        ?>
    </div>
</div>