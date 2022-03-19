var mouseEvent = ("empty");
var x1, y1;
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
color = "black";
linewidth = 1;
canvas.addEventListener("mousedown", my_mousedown)

function my_mousedown(e) {
    color = document.getElementById("color").value;
    linewidth = document.getElementById("width_of_line").value;
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    current_postition_of_mouse_x = e.client - canvas.offsetleft;
    current_postition_of_mouse_y = e.client - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = linewidth;

        console.log("Last position of x and y coordinates =");
        console.log("x =" + x1 + "y =" + y1);
        ctx.moveTo(x1, y1);


        console.log("Current position of x and y coordinates =");
        console.log("x =" + current_postition_of_mouse_x + "y =" + current_postition_of_mouse_y);
        ctx.lineTo(current_postition_of_mouse_x, current_postition_of_mouse_y);
        ctx.stroke();
    }
    x1 = current_postition_of_mouse_x;
    y1 = current_postition_of_mouse_y;
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouseEvent = "mouseUP";
}
canvas.addEventListener("mouseleave", my_mouseleave)
function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}


function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}