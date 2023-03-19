//1- Belirlediğimiz sayı aralığında rasgele sayı üreten fonksiyonu yazınız

function randomNumber(a, b) {
  return Math.floor(Math.random() * (a - b)) + b;
}

console.log(randomNumber(1, 45));

// 2- Elimizdeki people dizisiyle people2 yi oluşturalım.

let people = ["Greg", "Mary", "Devon", "James"];
people.splice(1, 0, "Elizabeth");
people.splice(3, 1, "Artie");
let people2 = people.slice();
console.log(people2);

//3-bu üç veriyi de yanda yazılan çıktılara dönüştüren fonksiyonu yazın. (üç ayrı fonksiyon değil tek fonksiyon istiyoruz.)

function donusturucu(text) {
  const words = text.split("_");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  let nameMail = words.join(" ").split("@")[0];
  return nameMail;
}
console.log(donusturucu("mustafa_selman@gmail.com"));
console.log(donusturucu("mehmet_colak@hotmail.com"));
console.log(donusturucu("yasin_sezer@yandex.com"));

// 4- let sayilar = [12,34,2,3,67,66,5,24]
// a- function maxSecond(sayilar) -> elimizdeki dizinin en büyük ikinci değerini veren fonksiyon
// b- function minSecond(sayilar) -> elimizdeki dizinin en küçük ikinci değerini veren fonksiyon

// yukarıdaki fonksiyonları oluşturunuz.

let sayilar = [12, 34, 2, 3, 67, 66, 5, 24];

function minSecond(sayilar) {
  let numbers = sayilar.sort(function (a, b) {
    return a - b;
  });
  return numbers[1];
}

function maxSecond(sayilar) {
  let numbers = sayilar.sort(function (a, b) {
    return b - a;
  });
  return numbers[1];
}

console.log(maxSecond(sayilar));
console.log(minSecond(sayilar));
