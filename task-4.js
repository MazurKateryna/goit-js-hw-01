const credits = 23580;
const pricePerDroid = 3000;
let input = prompt("Какое количество дроидов Вы хотите приобрести?");
let totalPrice;

if (input === null) {
  console.log('Отменено пользователем!');
} else {
  let number = Number(input);
  totalPrice = number * pricePerDroid;

    if (totalPrice > credits) {
      console.log ('Недостаточно средств на счету!');
    } else {
      totalPrice = credits - number * pricePerDroid;
      console.log(`Вы купили ${number} дроидов, на счету осталось ${totalPrice} кредитов.`)
    }
}