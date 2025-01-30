// Función para reproducir música
function playMusic() {
    let audio = document.getElementById("cancion");
    audio.play();
}

// Función para lanzar confeti
function mostrarConfeti() {
    let canvas = document.getElementById("confetti");
    let ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let confettiPieces = [];

    for (let i = 0; i < 100; i++) {
        confettiPieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 10 + 5,
            speedY: Math.random() * 3 + 2,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`
        });
    }

    function drawConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        confettiPieces.forEach((piece, index) => {
            ctx.fillStyle = piece.color;
            ctx.beginPath();
            ctx.arc(piece.x, piece.y, piece.size, 0, Math.PI * 2);
            ctx.fill();

            piece.y += piece.speedY;
            if (piece.y > canvas.height) {
                confettiPieces[index].y = -10;
            }
        });

        requestAnimationFrame(drawConfetti);
    }

    drawConfetti();
}
