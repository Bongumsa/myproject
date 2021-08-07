const canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");
ctx.beginPath();
ctx.arc(50, 50, 30, 0, 2*Math.PI);
ctx.fillStyle = grd;
ctx.fill();
