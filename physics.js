var a;
var usePhysics = false;
var rectangle;

function initialize() {
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    rectangle = ctx.rect(0, 675, 50, 50);
    drawObjects(ctx);
}

function rotateTank() {

}

function shootAmmo() {
    a = requestAnimationFrame(animate);

}

function drawObjects(ctx) {
    ctx.fillStyle = "#000000";
    var verticies = [
        createVertex(rectangle.x, rectangle.y),
        createVertex(rectangle.x + rectangle.width, rectangle.y),
        createVertex(rectangle.x + rectangle.width, rectangle.y + rectangle.height),
        createVertex(rectangle.x, rectangle.y + rectangle.height)
    ];

    ctx.beginPath();
    
}

function createVertex(x, y) {
    return {x: x, y: y};
}