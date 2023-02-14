const btn = document.getElementById('button');
btn.addEventListener("click", changeRandomColor);
const randomColor = () => {
   let hex = '0123456789ABCDEF'; // a hexcode is a combination of 0-9 & A-F. Also it has # in the start
   let myColor = '#';
   for(let i=0; i<6; i++){ // we need combination of 6 number 
        myColor = myColor + hex[Math.floor(Math.random() * 16)];
        // Math.random() is a function that generates a random number, which is a 16 decimal place number. Hence, we're multiplying a random decimal by sixteen, and then rounding it down.
   }
   return myColor;
};
console.log(randomColor());
function changeRandomColor() {
    document.body.style.backgroundColor = randomColor();
}