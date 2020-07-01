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
    price = null
}

if (price === null) {
  alert('В вашей стране доставка не доступна');
} else {
  alert(`Доставка в ${country} будет стоить ${price} кредитов`);
}
