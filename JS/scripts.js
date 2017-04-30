var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
console.log(text);
var animal = 'Zielone słonie';
console.log(animal);
var bigAnimal = animal.toUpperCase('Zielone słonie');
console.log(bigAnimal);
var textChange = text.replace('Papugi', (bigAnimal));
console.log(textChange);
console.log(textChange.length / 2);
var text1OfPart = text.substr(0, text.length / 2);//poza konkursem
var text2OfPart = textChange.substr(0, textChange.length / 2);//zgodnie z poleceniem ;)
console.log(text1OfPart);
console.log(text2OfPart);