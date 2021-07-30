let btn = document.querySelector('button');
let txt = document.querySelector('.txt');
let grisha = document.querySelector('.grisha');
let chlen = document.querySelector('.chlen');
let randomNumb = Math.round(Math.random() * 100);
console.log(randomNumb);
btn.onclick = function () {
   let a = txt.value;
   console.log(a);
   if (txt.value < randomNumb) {
      alert('Это значение больше МРАЗЬ!!!');
   } if (txt.value > randomNumb) {
      alert('Это значение меньше МРАЗЬ!!!');
   } if (txt.value == randomNumb) {
      alert("Это то число которое я загадал ЧУДОВИЩЕ");
      grisha.style = 'display: block;';
      chlen.style = 'display: block;';
      chlen.classList.add('padla');
   }
}






