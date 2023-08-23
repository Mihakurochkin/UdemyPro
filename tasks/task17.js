function amountOfPages(summary){
  let num = '';

  if(summary <= 0) {
    return 'Дані введено неправильно';
  }

  for(let i = 1;; i++) {
    num += `${i}`
    if(num.length === summary) {
      return i;
    }
  }
}

console.log(amountOfPages(13));
