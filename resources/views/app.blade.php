<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>TcxStocks</title>

        <!-- iconos -->
        <link rel="icon" href="/favicon.ico" sizes="16x16" type="image/x-icon">
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png">
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png">
        <link rel="icon" href="/favicon-96x96.png" sizes="96x96" type="image/png">
        <link rel="icon" href="/favicon-256x256.png" sizes="256x256" type="image/png">
        <link rel="icon" href="/ms-icon-70x70.png" sizes="70x70" type="image/png">
        <link rel="icon" href="/ms-icon-144x144.png" sizes="144x144" type="image/png">
        <link rel="icon" href="/ms-icon-150x150.png" sizes="150x150" type="image/png">
        <link rel="icon" href="/ms-icon-310x310.png" sizes="310x310" type="image/png">
        <link rel="icon" href="/apple-icon-57x57.png" sizes="57x57" type="image/png">
        <link rel="icon" href="/apple-icon-60x60.png" sizes="60x60" type="image/png">
        <link rel="icon" href="/apple-icon-72x72.png" sizes="72x72" type="image/png">
        <link rel="icon" href="/apple-icon-76x76.png" sizes="76x76" type="image/png">


        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
