var  aquarium = {
    filledWithWater: true,
    capacityInGallons: 12,
    numberOfRocks: 5,
    fish: [
            {
                type: 'goldfish' ,
                size: '3.5 inches',
                color: 'golden'
            },
            {
                type: 'puffer',
                size: '4 inches',
                color: 'tan'
            },
            {
                type: 'clown',
                size: '3 inches',
                color: 'orange'
            }
        ]
}
console.log(aquarium.capacityInGallons);

console.log(aquarium.numberOfRocks + 2);

console.log(aquarium.fish[2]);

console.log(aquarium.fish[1].size);

aquarium.fish[0].size = '4 inches';
console.log(aquarium.fish[0].size);

var fishStar = [ { 
type: 'starfish',
size: '5 inches',
color: 'blue'
}
]
aquarium.fish[3] = fishStar;
console.log(aquarium.fish);
