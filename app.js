
// console.log(Dictonery)

var randomLetters =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
function one(){
    var show = randomLetters [Math.floor(Math.random()*randomLetters.length)]
    var one = document.getElementById("one").innerText=show

}