const WIDTH = 400;
const HEIGH = 400;

let target = {
    x: getRandomNumber(WIDTH),
    y: getRandomNumber(HEIGH)
};
console.log(target)

let $map = document.getElementById('map');
let $distance = document.getElementById('distance');
let clicks = 0

$map.addEventListener("click", function(e){
    clicks++;
    let distance = getDistance(e, target);
    let distanceHint = getDistanceHint(distance);
    $distance.innerHTML = `<h1>${distanceHint} </h1>`
    if(distance<20){
        alert( `Has encontrado al tesoro ${clicks} clicks! `);
        location.reload();
    }
});

