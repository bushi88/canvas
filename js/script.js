window.onload = () => {
    let canvas = new Signature("#signature");

    // écouteur d'évênement pour effacer l'image
    document.querySelector("#effacer").addEventListener("click", (e) => {
        e.preventDefault();
        canvas.delete();
    });

    // écouteur d'évênement pour enregistrer l'image
    document.querySelector("#enregistrer").addEventListener("click", (e) => {
        e.preventDefault();

        let data = {
            image: canvas.generateImage(),
        };

        fetch("upload_signature.php", {
            method: "POST",
            body: JSON.stringify(data),
        }).then((response) => response.text())
            .then((message) => {
                if (message === 'Succès') {
                    document.getElementById('message').textContent = 'La signature a été enregistrée avec succès.';
                } else {
                    document.getElementById('message').textContent = 'Erreur lors de l\'enregistrement de la signature.';
                }
            })
            .catch((error) => {
                console.log(error);
                document.getElementById('message').textContent = 'Erreur lors de l\'enregistrement de la signature.';
            });
    });
};
