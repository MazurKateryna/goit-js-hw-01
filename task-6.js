let input;
let total = 0;

while (input !== null) {
  input = prompt('Введите число');

  if (input !== null) {
    let count=(Number(input));

    if (Number.isNaN(count)) {
        alert('Было введено не число, попробуйте еще раз');
    } else {
        total += Number(input);
    }
  }
}
alert(`Общая сумма чисел равна ${total}`);