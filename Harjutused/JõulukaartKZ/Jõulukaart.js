


function kolmnurk()
//määrame tahvli
{
    const joulukaart = document.getElementById("joulukaart");
    if (joulukaart.getContext) {
        let a = joulukaart.getContext("2d"); //anname tahvlinimi on t
        let b = joulukaart.getContext("2d");
        let c = joulukaart.getContext("2d");
        let d = joulukaart.getContext("2d");

        d.fillStyle = "brown";
        d.fillRect(145,500,30,80);

        c.beginPath();
        c.strokeStyle = "#316243";
        c.fillStyle = "#39955C";
        c.lineWidth = 3;
        c.moveTo(150 + 10, 80 + 300); //alguspunkt
        c.lineTo(80 + 10, 220 + 300);
        c.lineTo(220 + 10, 220 + 300);
        c.closePath();
        c.stroke();
        c.fill();

        b.beginPath();
        b.strokeStyle = "#316243";
        b.fillStyle = "#39955C";
        b.lineWidth = 3;
        b.moveTo(150 + 10, 80 + 250); //alguspunkt
        b.lineTo(80 + 10, 220 + 250);
        b.lineTo(220 + 10, 220 + 250);
        b.closePath();
        b.stroke();
        b.fill();
        //joon
        a.beginPath();
        a.strokeStyle = "#316243";
        a.fillStyle = "#39955C";
        a.lineWidth = 3;
        a.moveTo(150 + 10, 80 + 200); //alguspunkt
        a.lineTo(80 + 10, 220 + 200);
        a.lineTo(220 + 10, 220 + 200);
        a.closePath();
        a.stroke();
        a.fill();







    }
}
function day()
{
    const joulukaart = document.getElementById("joulukaart");
    let t = joulukaart.getContext("2d");
    let a = joulukaart.getContext("2d");

    t.fillStyle = "#5AA8D8";
    t.fillRect(0,0,1000,300 + 5000);

    //ring
    a.beginPath();
    a.strokeStyle = "yellow";
    a.fillStyle = "yellow";
    a.lineWidth = 1;
    a.arc(100, 100, 50, 0, 2 * Math.PI, true); //x, y-keskpunkt, R
    a.stroke()
    a.fill()



}

function night()
{
    const joulukaart = document.getElementById("joulukaart");
    let t = joulukaart.getContext("2d");
    let a = joulukaart.getContext("2d");

    t.fillStyle = "#273239";
    t.fillRect(0,0,1000,300 + 5000);

    a.beginPath();
    a.strokeStyle = "#EBE3C3";
    a.fillStyle = "#EBE3C3";
    a.lineWidth = 1;
    a.arc(100, 100, 50, 0, 2 * Math.PI, true); //x, y-keskpunkt, R
    a.stroke()
    a.fill()


}
function grass()
{
    const joulukaart = document.getElementById("joulukaart");
    let t = joulukaart.getContext("2d");

    t.fillStyle = "#1C8544";
    t.fillRect(0,480,500,300);

}

function snow()
{
    const joulukaart = document.getElementById("joulukaart");
    let t = joulukaart.getContext("2d");

    t.fillStyle = "white";
    t.fillRect(0,480,500,300);

}
function Poder()
{
    const joulukaart = document.getElementById("joulukaart");
    let t = joulukaart.getContext("2d");
    let a = joulukaart.getContext("2d");
    let d = joulukaart.getContext("2d");
    let e = joulukaart.getContext("2d");
    let b = joulukaart.getContext("2d");
    let c = joulukaart.getContext("2d");
    let i = joulukaart.getContext("2d");
    let m = joulukaart.getContext("2d");
    let n = joulukaart.getContext("2d");

    t.fillStyle = "#B07D61";
    t.fillRect(280,500,100,50);

    m.fillStyle = "#7A5752";
    m.fillRect(280,450,10,30);

    m.fillStyle = "#7A5752";
    m.fillRect(260,450,10,30);

    a.beginPath();
    a.fillStyle = "#B07D61"
    a.lineWidth = 1;
    a.arc(275, 500, 30, 0, 2 * Math.PI, true); //x, y-keskpunkt, R
    a.stroke()
    a.fill()
    a.closePath();

    b.beginPath();
    b.fillStyle = "#000000"
    b.lineWidth = 1;
    b.arc(260, 500, 5, 0, 2 * Math.PI, true); //x, y-keskpunkt, R
    b.stroke()
    b.fill()
    b.closePath();




    c.beginPath();
    c.fillStyle = "#000000"
    c.lineWidth = 1;
    c.arc(280, 500, 5, 0, 2 * Math.PI, true); //x, y-keskpunkt, R
    c.stroke()
    c.fill()
    c.closePath();

    i.beginPath();
    i.fillStyle = "#E11616"
    i.lineWidth = 1;
    i.arc(270, 510, 8, 0, 2 * Math.PI, true); //x, y-keskpunkt, R
    i.stroke()
    i.fill()
    i.closePath();



    d.fillStyle = "#B07D61";
    d.fillRect(360,550,20,30);

    e.fillStyle = "#B07D61";
    e.fillRect(280,550,20,30);


}
function text()
{
    const joulukaart = document.getElementById("joulukaart");
    let t = joulukaart.getContext("2d");

    t.font = "50px Verdana";
    t.fillStyle = "white";

    t.textAlign = "center";
    t.textBaseline = "top";
    t.fillText("Häid jõule!",joulukaart.width/2,200);

}




