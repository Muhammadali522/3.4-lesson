const num = Math.round(Math.random() * 100);
alert(`Random orqali tanlangan son: ${num}`);
if(num % 3 == 0 && num % 5 == 0){
    alert("FizzBuzz");
}else if(num % 5 == 0){
    alert("Buzz");
}else if(num % 3 == 0){
    alert("Fizz");
}else{
    alert("Random orqali tanlangan son Fizz ham buzz hma emas")
}