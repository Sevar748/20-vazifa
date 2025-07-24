// === 1 ===
let year = prompt("1. Ваш год рождения:");
let now = new Date().getFullYear();
console.log("Ваш возраст: " + (now - year));

// === 2 ===
let a = prompt("2. Сторона a:");
let b = prompt("Сторона b:");
console.log("Площадь: " + (a * b));

// === 3 ===
let c = prompt("3. Температура в °C:");
console.log("Температура в °F: " + (c * 1.8 + 32));

// === 4 ===
let num1 = +prompt("4. 1-е число:");
let num2 = +prompt("2-е число:");
let num3 = +prompt("3-е число:");
console.log("Среднее: " + ((num1 + num2 + num3) / 3));

// === 5 ===
let num = prompt("5. Введите число:");
console.log("Последняя цифра: " + (num % 10));

// === 6 ===
let z = +prompt("6. Введите число:");
if (z > 0) console.log("Положительное");
else if (z < 0) console.log("Отрицательное");
else console.log("Ноль");

// === 7 ===
let n = +prompt("7. Введите число:");
let sumEven = 0;
for (let i = 1; i <= n; i++) {
  if (i % 2 === 0) sumEven += i;
}
console.log("Сумма чётных: " + sumEven);

// === 8 ===
let x = +prompt("8. Число 1:");
let y = +prompt("Число 2:");
let z2 = +prompt("Число 3:");
let maxNum = Math.max(x, y, z2);
console.log("Максимум: " + maxNum);
console.log(maxNum % 2 === 0 ? "Чётное" : "Нечётное");

// === 9 ===
let score = +prompt("9. Введите балл (0-100):");
if (score >= 90) console.log("A'lo");
else if (score >= 80) console.log("Yaxshi");
else if (score >= 70) console.log("Qoniqarli");
else console.log("Yiqildingiz");

// === 10 ===
let firstNum = prompt("10. Введите число:");
console.log("Первая цифра: " + firstNum[0]);

// === 11 ===
let n11 = +prompt("11. Введите n:");
let sum11 = 0;
for (let i = 1; i <= n11; i++) {
  console.log(i);
  sum11 += i;
}
console.log("Сумма: " + sum11);

// === 12 ===
let n12 = +prompt("12. Введите n:");
let sum12 = 0;
for (let i = 1; i <= n12; i++) {
  sum12 += i;
}
console.log("Сумма от 1 до n: " + sum12);

// === 13 ===
let n13 = +prompt("13. Введите n:");
let sum13 = 0;
for (let i = 2; i <= n13; i += 2) {
  sum13 += i;
}
let sumStr = sum13.toString();
console.log("Сумма чётных: " + sum13);
console.log("Первая цифра: " + sumStr[0]);
console.log("Последняя цифра: " + sumStr[sumStr.length - 1]);

// === 14 ===
let day = +prompt("14. Введите число от 1 до 7:");
let dayName;
switch (day) {
  case 1: dayName = "Dushanba"; break;
  case 2: dayName = "Seshanba"; break;
  case 3: dayName = "Chorshanba"; break;
  case 4: dayName = "Payshanba"; break;
  case 5: dayName = "Juma"; break;
  case 6: dayName = "Shanba"; break;
  case 7: dayName = "Yakshanba"; break;
  default: dayName = "Noto‘g‘ri raqam";
}
console.log("Kun: " + dayName);
if (dayName !== "Noto‘g‘ri raqam") console.log("Первая буква: " + dayName[0]);

// === 15 ===
let a15 = +prompt("15. Введите a:");
let b15 = +prompt("Введите b:");
console.log("Большее число: " + (a15 > b15 ? a15 : b15));

// === 16 ===
let arr = [4, 5, 8, 1, 9];
console.log("Массив: " + arr);
console.log("Максимум: " + Math.max(...arr));

// === 17 ===
let user = {
  name: "Ali",
  age: 25
};
console.log("Имя: " + user.name);
console.log("Возраст: " + user.age);

// === 18 ===
let i = 1;
while (i <= 5) {
  console.log("Число: " + i);
  i++;
}

// === 19===
let pass;
do {
  pass = prompt("19. Введите пароль:");
} while (pass !== "1234");
console.log("Пароль верный!");

// === 20 ===
let rand = Math.floor(Math.random() * 10) + 1;
let guess = +prompt("20. Угадай число от 1 до 10:");
if (guess === rand) {
  console.log("Вы угадали! 🎉");
} else {
  console.log("Неверно. Было: " + rand);
}
