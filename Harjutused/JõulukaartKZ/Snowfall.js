let snowflakes = []; // array to store snowflakes

function createSnow(num) {
    const joulukaart = document.getElementById("joulukaart");
    let width = joulukaart.width;
    let height = joulukaart.height;

    snowflakes = [];
    for (let i = 0; i < num; i++) {
        snowflakes.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 3 + 2,
            speed: Math.random() * 1 + 0.5
        });
    }
}

function snowFallDay() {
    const joulukaart = document.getElementById("joulukaart");
    let ctx = joulukaart.getContext("2d");

    ctx.clearRect(0, 0, joulukaart.width, joulukaart.height); // clear canvas

    // draw existing scene (tree, star, grass, etc.)
    night();
    grass();
    kolmnurk();
    text();
    Poder();
    Jouluehe();


    // draw snowflakes
    ctx.fillStyle = "white";
    ctx.beginPath();
    for (let i = 0; i < snowflakes.length; i++) {
        let s = snowflakes[i];
        ctx.moveTo(s.x, s.y);
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
    }
    ctx.fill();

    // update snowflake positions
    for (let i = 0; i < snowflakes.length; i++) {
        let s = snowflakes[i];
        s.y += s.speed;
        if (s.y > joulukaart.height) {
            s.y = 0; // reset to top
            s.x = Math.random() * joulukaart.width;
        }
    }

    requestAnimationFrame(snowFallDay); // loop animation
}

// initialize snow and start animation
createSnow(100); // 100 snowflakes
snowFallDay();

function snowFall1() {
    const joulukaart1 = document.getElementById("joulukaart");
    let ctx = joulukaart.getContext("2d");

    ctx.clearRect(0, 0, joulukaart1.width, joulukaart.height); // clear canvas

    // draw existing scene (tree, star, grass, etc.)
    day();
    grass();
    kolmnurk();
    text();
    Poder();
    Jouluehe();


    // draw snowflakes
    ctx.fillStyle = "white";
    ctx.beginPath();
    for (let i = 0; i < snowflakes.length; i++) {
        let s = snowflakes[i];
        ctx.moveTo(s.x, s.y);
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
    }
    ctx.fill();

    // update snowflake positions
    for (let i = 0; i < snowflakes.length; i++) {
        let s = snowflakes[i];
        s.y += s.speed;
        if (s.y > joulukaart1.height) {
            s.y = 0; // reset to top
            s.x = Math.random() * joulukaart.width;
        }
    }

    requestAnimationFrame(snowFall1); // loop animation
}

// initialize snow and start animation
createSnow(100); // 100 snowflakes
snowFall1();

function snowFall2() {
    const joulukaart1 = document.getElementById("joulukaart");
    let ctx = joulukaart.getContext("2d");

    ctx.clearRect(0, 0, joulukaart1.width, joulukaart.height); // clear canvas

    // draw existing scene (tree, star, grass, etc.)
    night();
    snow();
    kolmnurk();
    text();
    Poder();
    Jouluehe();


    // draw snowflakes
    ctx.fillStyle = "white";
    ctx.beginPath();
    for (let i = 0; i < snowflakes.length; i++) {
        let s = snowflakes[i];
        ctx.moveTo(s.x, s.y);
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
    }
    ctx.fill();

    // update snowflake positions
    for (let i = 0; i < snowflakes.length; i++) {
        let s = snowflakes[i];
        s.y += s.speed;
        if (s.y > joulukaart1.height) {
            s.y = 0; // reset to top
            s.x = Math.random() * joulukaart.width;
        }
    }

    requestAnimationFrame(snowFall2); // loop animation
}

// initialize snow and start animation
createSnow(100); // 100 snowflakes
snowFall2();

function snowFall3() {
    const joulukaart1 = document.getElementById("joulukaart");
    let ctx = joulukaart.getContext("2d");

    ctx.clearRect(0, 0, joulukaart1.width, joulukaart.height); // clear canvas

    // draw existing scene (tree, star, grass, etc.)
    day();
    snow();
    kolmnurk();
    text();
    Jouluehe();
    Poder();


    // draw snowflakes
    ctx.fillStyle = "white";
    ctx.beginPath();
    for (let i = 0; i < snowflakes.length; i++) {
        let s = snowflakes[i];
        ctx.moveTo(s.x, s.y);
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
    }
    ctx.fill();

    // update snowflake positions
    for (let i = 0; i < snowflakes.length; i++) {
        let s = snowflakes[i];
        s.y += s.speed;
        if (s.y > joulukaart1.height) {
            s.y = 0; // reset to top
            s.x = Math.random() * joulukaart.width;
        }
    }

    requestAnimationFrame(snowFall3); // loop animation
}

// initialize snow and start animation
createSnow(100); // 100 snowflakes
snowFall3();