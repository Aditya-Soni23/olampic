canvas = document.getElementById("can");
ctx = canvas.getContext("2d");


ctx.beginPath();
ctx.strokeStyle = "violet";
ctx.lineWidth = 5;
ctx.rect(10, 10, 280, 130);
ctx.stroke();





ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 3;
ctx.arc(70, 50, 30, 0, 2 * Math.PI);
ctx.stroke();




ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.arc(250, 210, 40, 0, 2 * Math.PI);
ctx.stroke();




ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.arc(250, 210, 40, 0, 2 * Math.PI);
ctx.stroke();





ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 5;
ctx.arc(250, 210, 40, 0, 2 * Math.PI);
ctx.stroke();





ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.arc(250, 210, 40, 0, 2 * Math.PI);
ctx.stroke();