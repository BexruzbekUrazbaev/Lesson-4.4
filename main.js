let random1 = Math.trunc(100 * Math.random());
if (random1 % 3 == 0) {
    alert(random1 + " - fizz")
}else if (random1 % 5 == 0) {
    alert(random1 + " - buzz")
}
else if (random1 % 3 == 0 && random1 % 5 == 0){
    alert(random1 + " - fizzbuzz")
}
else {
    alert(random1 + " - fizz ham buzz ham emas")
}