let country = prompt("Укажите страну доставки");
country = country.toLowerCase();
let price = 0;

switch(country) {
  case 'китай':
    price = 100;
    break;

  case 'чили':
    price = 250;
    break;
  
  case 'австралия':
    price = 170;
    break;

  case 'индия':
    price = 80;
    break;

  case 'ямайка':
    price = 120;
    break;

  default:
    price = 1
}

if (price != 1) {
  alert(`Доставка в ${country} будет стоить ${price} кредитов`);
} else {
  alert('В вашей стране доставка не доступна');
}
