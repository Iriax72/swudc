<!DOCTYPE html>
<html lang="fr">
    <?php
    require './elements/head.php';
    ?>
    <body>
        <?php
        // Routage depuis le paramètre GET `page`.
        $pages = [
            'menu' => './pages/menu.php',
            'yours' => './pages/yours.php',
            'new' => './pages/new.php',
            'community' => './pages/community.php',
            'settings' => './pages/settings.php',
        ];

        $page = isset($_GET['page']) ?
        basename($_GET['page']) :
        'menu';

        if (!array_key_exists($page, $pages)) {
            $page = 'menu';
        }

        require $pages[$page];
        ?>
    </body>
</html>