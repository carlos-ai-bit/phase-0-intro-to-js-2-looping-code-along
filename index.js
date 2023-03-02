const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts)

const names = ["Guadalupe", "Ollie", "Aki",];
function writeCards(names, event) {
  return names.map(name => `Thank you, ${name}, for the wonderful ${event} gift!`)
}

console.log(writeCards(names, "birthday"))

function countDown(startInt) {
  while (startInt > 0) {
    console.log(startInt);
    startInt -= 1;
  } console.log(startInt);
}

