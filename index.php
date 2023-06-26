<!DOCTYPE html>
<html lang="fr">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Bon de livraison</title>
        <link rel="stylesheet" href="./css/styles.css">
    </head>

    <body>
        <section class="container">
            <h1>Bon de livraison</h1>
            <div class="content">
                <div class="signature-section">
                    <h2>Signature du destinataire</h2>
                    <canvas id="signature" width="400" height="120"></canvas>
                    <p>Veuillez signer ci-dessus pour confirmer la réception de
                        la livraison.</p>
                    <div class="buttons">
                        <button id="effacer">Effacer</button>
                        <button id="enregistrer">Enregistrer</button>
                    </div>
                    <span id="message"></span>
                </div>
                <div class="order-details">
                    <h2>Détails de la commande</h2>
                    <p><strong>Nom du client :</strong> John Doe</p>
                    <p><strong>Date de la commande :</strong> 26 Octobre 2022
                    </p>
                    <p><strong>Numéro de commande :</strong> XYZ-ABC-123</p>
                    <p><strong>Produit :</strong> produit XYZ</p>
                    <p><strong>Quantité :</strong> 4</p>
                    <p><strong>Prix unitaire :</strong> 10,00 €</p>
                    <p><strong>Total :</strong> 40,00 €</p>
                </div>
            </div>
        </section>

        <script src="./js/signature.js"></script>
        <script src="./js/script.js"></script>
    </body>

</html>