<?php
function backBtn(string $page):void {
    $btn = <<<HTML
    <div class="back-btn-container">
        <a href="{$page}" class="back-btn-a">
            <img src="./assets/images/backbtn.png" alt="BACK" class="back-btn-img">
        </a>
    </div>
    HTML;
    echo $btn;
}
?>