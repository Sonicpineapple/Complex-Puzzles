function pointOnCircle(rad, angle) {
    return [rad * Math.cos(angle), rad * Math.sin(angle)];
}

function drawTriangle(ctx, col, centreX, centreY, rad, angle, circle = false) {
    const points = [
        pointOnCircle(rad, angle), 
        pointOnCircle(rad, angle + 2 * Math.PI / 3), 
        pointOnCircle(rad, angle - 2 * Math.PI / 3)
    ];
    ctx.fillStyle = col;
    ctx.translate(centreX, centreY);
    ctx.beginPath();
    ctx.moveTo(...points[0]);
    ctx.lineTo(...points[1]);
    ctx.lineTo(...points[2]);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    if (circle) {
        const cRad = rad / 4
        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.moveTo(cRad, 0);
        ctx.arc(0, 0, cRad, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    }
    ctx.translate(-centreX, -centreY);
}

function drawSquare(ctx, col, centreX, centreY, edge, angle, circle = false) {
    ctx.fillStyle = col;
    ctx.translate(centreX, centreY);
    ctx.fillRect(-edge / 2, -edge / 2, edge, edge);
    ctx.strokeRect(-edge / 2, -edge / 2, edge, edge);
    if (circle) {
        const cRad = edge / (4 * sqrt3);
        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.moveTo(cRad, 0);
        ctx.arc(0, 0, cRad, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    }
    ctx.translate(-centreX, -centreY);
}