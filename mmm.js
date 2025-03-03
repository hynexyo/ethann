function randColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function makeFullCircleFirework(fire) {
    if (!fire || typeof fire.x !== "number" || typeof fire.y !== "number" || typeof fire.number !== "number") {
        console.error("Error: Parámetros de fire inválidos.");
        return [];
    }
    let color = randColor();
    let velocity = Math.random() * 8 + 8;
    let max = fire.number * 3;
    let range = 50;
    let fireworks = [];
    for (let i = 0; i < max; i++) {
        let rad = (i * Math.PI * 2) / max;

        let firework = {
            x: fire.x,
            y: fire.y,
            size: Math.random() + 1.5,
            fill: color,
            vx: Math.cos(rad) * velocity + (Math.random() - 0.5) * 0.5,
            vy: Math.sin(rad) * velocity + (Math.random() - 0.5) * 0.5,
            ay: 0.06,
            alpha: 1,
            life: Math.round((Math.random() * range) / 2) + range / 1.5
        };
        fireworks.push(firework);
    }
    let text = "Feliz Cumpleaños";
    let spacing = 15; 
    let startX = fire.x - (text.length * spacing) / 2; 
    let startY = fire.y - 50; 

    for (let i = 0; i < text.length; i++) {
        let charX = startX + i * spacing;
        let charY = startY;

        for (let j = 0; j < 5; j++) { 
            let firework = {
                x: charX + Math.random() * 5 - 2.5,
                y: charY + Math.random() * 5 - 2.5,
                size: Math.random() + 1.5,
                fill: randColor(),
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                ay: 0.02,
                alpha: 1,
                life: Math.round((Math.random() * range) / 2) + range / 1.5
            };
            fireworks.push(firework);
        }
    }
    return fireworks;
}
