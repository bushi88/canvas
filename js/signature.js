class Signature {
    constructor(canvas) {
        this.sign = false;
        this.prevX = 0;
        this.prevY = 0;

        this.canvas = document.querySelector(canvas);
        this.ctx = this.canvas.getContext("2d");
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 2;

        // Écouteur d'événement pour le clic de souris
        this.canvas.addEventListener("mousedown", (event) => {
            // Activation de la signature
            this.sign = true;
            this.prevX = event.clientX - this.canvas.offsetLeft;
            this.prevY = event.clientY - this.canvas.offsetTop;
        });

        // Écouteur d'événement pour le mouvement de souris
        this.canvas.addEventListener("mousemove", (event) => {
            if (this.sign) {
                let currentX = event.clientX - this.canvas.offsetLeft;
                let currentY = event.clientY - this.canvas.offsetTop;
                this.draw(this.prevX, this.prevY, currentX, currentY);
                this.prevX = currentX;
                this.prevY = currentY;
            }
        });

        // Écouteur d'événement pour le relâchement de la souris
        this.canvas.addEventListener("mouseup", (event) => {
            // Désactivation de la signature
            this.sign = false;
        });

        // Écouteur d'événement si la souris sort du canvas
        this.canvas.addEventListener("mouseout", (event) => {
            this.sign = false;
        });
    }

    // Méthode pour dessiner un trait entre deux points
    draw (depX, depY, destX, destY) {
        this.ctx.beginPath();
        this.ctx.moveTo(depX, depY);
        this.ctx.lineTo(destX, destY);
        this.ctx.closePath();
        this.ctx.stroke();
    }

    // Méthode pour effacer
    delete () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    // Méthode pour générer l'image
    generateImage () {
        let image = this.canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
        return image;
    }
}
