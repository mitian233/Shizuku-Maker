function maker(text) {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var drawText = text.split('');
    var temp = '';
    var row = [];
    for (var i = 0; i < text.length; i++) {
        if(ctx.measureText(temp).width > 160){
            row.push(temp);
            temp = '';
        }
        temp += drawText[i];
    }
    row.push(temp);
    ctx.font="30px Noto Sans SC";
    var img = new Image();
    img.src = "img/pic.jpg";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(10,355);
    ctx.rotate(-28 * Math.PI/ 180);
    for (var i = 0; i < row.length; i++) {
        ctx.fillText(row[i], 0, 0+(i+1)*30*1.2);
    }
    ctx.restore();
}
function saveCanvas(canvasID) {
    var image = new Image();
    image.src = document.getElementById(canvasID).toDataURL("image/png", 1.0, width=593, height=593);
    var url = image.src.replace(/^data:image\/[^;]/, 'data:application/octet-stream');
    window.open(url);
}