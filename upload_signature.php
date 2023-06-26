<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // récupération des données de l'image transmise en Json
    $donnees = json_decode(file_get_contents('php://input'), false);

    // extraction du type et des données de l'image
    list($type, $data) = explode(';', $donnees->image);

    // décodage de l'image
    list(, $image) = explode(',', $data);
    $image_decodee = base64_decode($image);

    // création nom de fichier basé sur la date et une chaîne de caractères unique
    $date = date("Y-m-d");
    $fichier = $date . "_" . md5(uniqid()) . '.png';

    // Enregistrement de l'image
    if (file_put_contents(__DIR__ . "/images/$fichier", $image_decodee)) {
        echo 'Succès';
    } else {
        echo 'Échec';
    }
}