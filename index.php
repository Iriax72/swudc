<!DOCTYPE html>
<html lang="fr">
    <?php
    require './elements/head.php';
    ?>
    <body>
        <?php
        // Routage simple depuis le paramètre GET `page`.
        $allowed = [
            'menu' => './pages/menu.php',
            'yours' => './pages/yours.php',
            'new' => './pages/new.php',
            'community' => './pages/community.php',
            'settings' => './pages/settings.php',
        ];

        $page = isset($_GET['page']) ? basename($_GET['page']) : 'menu';
        if (!array_key_exists($page, $allowed)) {
            $page = 'menu';
        }

        require $allowed[$page];
        ?>
    </body>
</html>