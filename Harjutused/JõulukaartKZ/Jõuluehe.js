function Jouluehe()
{
    const joulukaart = document.getElementById("joulukaart");
    let ctx = joulukaart.getContext("2d");
    let a = joulukaart.getContext("2d");
    let b = joulukaart.getContext("2d");
    let c = joulukaart.getContext("2d");
    let d = joulukaart.getContext("2d");
    let e = joulukaart.getContext("2d");
    let f = joulukaart.getContext("2d");
    let g = joulukaart.getContext("2d");
    let h = joulukaart.getContext("2d");
    let j = joulukaart.getContext("2d");

    // Star properties
    let centerX = 160; // top triangle tip X
    let centerY = 270; // slightly above the tip
    let spikes = 5;
    let outerRadius = 20; // adjust size if needed
    let innerRadius = 10;

    let rot = Math.PI / 2 * 3;
    let x = centerX;
    let y = centerY;
    let step = Math.PI / spikes;

    ctx.beginPath();
    ctx.moveTo(centerX, centerY - outerRadius);
    for (let i = 0; i < spikes; i++) {
        x = centerX + Math.cos(rot) * outerRadius;
        y = centerY + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = centerX + Math.cos(rot) * innerRadius;
        y = centerY + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
    }
    ctx.lineTo(centerX, centerY - outerRadius);
    ctx.closePath();
    ctx.fillStyle = "#BBB761";
    ctx.fill();
    ctx.strokeStyle = "#BBB761";
    ctx.stroke();




    a.beginPath();
    a.fillStyle = "#40476D"
    a.lineWidth = 1;
    a.arc(100, 400, 10, 0, 2 * Math.PI, true); //x, y-keskpunkt, R
    a.stroke()
    a.fill()

    b.beginPath();
    b.fillStyle =  "#A71D31";
    b.lineWidth = 1;
    b.arc(200, 400, 10, 0, 2 * Math.PI, true); //x, y-keskpunkt, R
    b.stroke()
    b.fill()

    c.beginPath();
    c.fillStyle = "#A71D31";
    c.lineWidth = 1;
    c.arc(150, 350, 10, 0, 2 * Math.PI, true); //x, y-keskpunkt, R
    c.stroke()
    c.fill()

    d.beginPath();
    d.fillStyle = "#40476D";
    d.lineWidth = 1;
    d.arc(150, 425, 10, 0, 2 * Math.PI, true); //x, y-keskpunkt, R
    d.stroke()
    d.fill()

    e.beginPath();
    e.fillStyle = "#A71D31";
    e.lineWidth = 1;
    e.arc(100, 450, 10, 0, 2 * Math.PI, true); //x, y-keskpunkt, R
    e.stroke()
    e.fill()

    f.beginPath();
    f.fillStyle = "#A71D31";
    f.lineWidth = 1;
    f.arc(200, 450, 10, 0, 2 * Math.PI, true); //x, y-keskpunkt, R
    f.stroke()
    f.fill()

    g.beginPath();
    g.fillStyle = "#40476D"
    g.lineWidth = 1;
    g.arc(120, 500, 10, 0, 2 * Math.PI, true); //x, y-keskpunkt, R
    g.stroke()
    g.fill()

    h.beginPath();
    h.fillStyle =  "#40476D"
    h.lineWidth = 1;
    h.arc(220, 500, 10, 0, 2 * Math.PI, true); //x, y-keskpunkt, R
    h.stroke()
    h.fill()

    j.beginPath();
    j.fillStyle = "#A71D31";
    j.lineWidth = 1;
    j.arc(180, 500, 10, 0, 2 * Math.PI, true); //x, y-keskpunkt, R
    j.stroke()
    j.fill()

}