var randomLetters =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var _1;
var _2;
var _3;
var _4;
var _5;
var _6;
var _7;
var _8;
var _9;
var _10;
var _11;
var _12;
var _13;
var _14;
var _15;
var _16;
var _17;
var _18;
var _19;
var _20;
var _21;
var _22;
var _23;
var _24;
var _25;
var _26;

var hide= document.getElementById("hide")
hide.style.display="none"

var submitt= document.getElementById("submit")
submitt.style.display="none"

// For Generating random letters at each box
function one(){
    hide.style.display="block"
    submitt.style.display="block"

    var show = randomLetters [Math.floor(Math.random() * 26 )]
     _1 = document.getElementById("one").innerText=show

     show = randomLetters [Math.floor(Math.random() * 26 )]
     _2 =document.getElementById("two").innerText=show

     show = randomLetters [Math.floor(Math.random() * 26 )]
     _3 = document.getElementById("3").innerText=show

     show = randomLetters [Math.floor(Math.random() * 26 )]
     _4 = document.getElementById("4").innerText=show

     show = randomLetters [Math.floor(Math.random() * 26 )]
     _5 = document.getElementById("5").innerText=show

     show = randomLetters [Math.floor(Math.random() * 26 )]
     _6 = document.getElementById("6").innerText=show

     show = randomLetters [Math.floor(Math.random() * 26 )]
     _7 = document.getElementById("7").innerText=show

     show = randomLetters [Math.floor(Math.random() * 26 )]
     _8 =document.getElementById("8").innerText=show

     show = randomLetters [Math.floor(Math.random() * 26 )]
     _9 =document.getElementById("9").innerText=show

     show = randomLetters [Math.floor(Math.random() * 26 )]
     _10 = document.getElementById("10").innerText=show

     show = randomLetters [Math.floor(Math.random() * 26 )]
     _11 = document.getElementById("11").innerText=show

     show = randomLetters [Math.floor(Math.random() * 26 )]
     _12 = document.getElementById("12").innerText=show

     show = randomLetters [Math.floor(Math.random() * 26 )]
     _13 = document.getElementById("13").innerText=show

     show = randomLetters [Math.floor(Math.random() * 26 )]
     _14 =  document.getElementById("14").innerText=show

     show = randomLetters [Math.floor(Math.random() * 26 )]
     _15 =  document.getElementById("15").innerText=show

     show = randomLetters [Math.floor(Math.random() * 26 )]
     _16 = document.getElementById("16").innerText=show

     show = randomLetters [Math.floor(Math.random() * 26 )]
     _17 = document.getElementById("17").innerText=show

     show = randomLetters [Math.floor(Math.random() * 26 )]
     _18 =  document.getElementById("18").innerText=show

     show = randomLetters [Math.floor(Math.random() * 26 )]
     _19 =  document.getElementById("19").innerText=show

     show = randomLetters [Math.floor(Math.random() * 26 )]
     _20 = document.getElementById("20").innerText=show


     show = randomLetters [Math.floor(Math.random() * 26 )]
     _21 = document.getElementById("21").innerText=show


     show = randomLetters [Math.floor(Math.random() * 26 )]
     _22 =  document.getElementById("22").innerText=show

     show = randomLetters [Math.floor(Math.random() * 26 )]
     _23 =  document.getElementById("23").innerText=show

     show = randomLetters [Math.floor(Math.random() * 26 )]
     _24 =  document.getElementById("24").innerText=show


     show = randomLetters [Math.floor(Math.random() * 26 )]
     _25 = document.getElementById("25").innerText=show

     show = randomLetters [Math.floor(Math.random() * 26 )]
     _26 =  document.getElementById("26").innerText=show

}

// End of generating letters


// Get value of each box in input
function valueButton1 () {
    var calculatedResult=document.getElementById("screen")
    var a=document.getElementById("one")
    a.style.textDecoration="line-through"
    calculatedResult.value +=_1

}

function valueButton2 () {
    var calculatedResult=document.getElementById("screen")
    var b=document.getElementById("two")
    b.style.textDecoration="line-through"
    calculatedResult.value +=_2

}

function valueButton3 () {
    var calculatedResult=document.getElementById("screen")
    var c=document.getElementById("3")
    c.style.textDecoration="line-through"
    calculatedResult.value +=_3

}

function valueButton4 () {
    var calculatedResult=document.getElementById("screen")
    var d=document.getElementById("4")
    d.style.textDecoration="line-through"
    calculatedResult.value +=_4

}
function valueButton5 () {
    var calculatedResult=document.getElementById("screen")
    var e=document.getElementById("5")
    e.style.textDecoration="line-through"
    calculatedResult.value +=_5

}
function valueButton6 () {
    var calculatedResult=document.getElementById("screen")
    var f=document.getElementById("6")
    f.style.textDecoration="line-through"
    calculatedResult.value +=_6

}
function valueButton7 () {
    var calculatedResult=document.getElementById("screen")
    var g=document.getElementById("7")
    g.style.textDecoration="line-through"
    calculatedResult.value +=_7

}
function valueButton8 () {
    var calculatedResult=document.getElementById("screen")
    var h=document.getElementById("8")
    h.style.textDecoration="line-through"
    calculatedResult.value +=_8

}
function valueButton9 () {
    var calculatedResult=document.getElementById("screen")
    var i=document.getElementById("9")
    i.style.textDecoration="line-through"
    calculatedResult.value +=_9

}
function valueButton10 () {
    var calculatedResult=document.getElementById("screen")
     var j=document.getElementById("10")
    j.style.textDecoration="line-through"
    calculatedResult.value +=_10

}
function valueButton11 () {
    var calculatedResult=document.getElementById("screen")
    var k=document.getElementById("11")
    k.style.textDecoration="line-through"
    calculatedResult.value +=_11

}
function valueButton12 () {
    var calculatedResult=document.getElementById("screen")
    var l=document.getElementById("12")
    l.style.textDecoration="line-through"
    calculatedResult.value +=_12

}
function valueButton13 () {
    var calculatedResult=document.getElementById("screen")
    var m=document.getElementById("13")
    m.style.textDecoration="line-through"
    calculatedResult.value +=_13

}
function valueButton14 () {
    var calculatedResult=document.getElementById("screen")
    var n=document.getElementById("14")
    n.style.textDecoration="line-through"
    calculatedResult.value +=_14

}
function valueButton15 () {
    var calculatedResult=document.getElementById("screen")
    var o=document.getElementById("15")
    o.style.textDecoration="line-through"
    calculatedResult.value +=_15

}
function valueButton16 () {
    var calculatedResult=document.getElementById("screen")
    var p=document.getElementById("16")
    p.style.textDecoration="line-through"
    calculatedResult.value +=_16

}
function valueButton17 () {
    var calculatedResult=document.getElementById("screen")
    var q=document.getElementById("17")
    q.style.textDecoration="line-through"
    calculatedResult.value +=_17

}
function valueButton18 () {
    var calculatedResult=document.getElementById("screen")
    var r=document.getElementById("18")
    r.style.textDecoration="line-through"
    calculatedResult.value +=_18

}
function valueButton19 () {
    var calculatedResult=document.getElementById("screen")
    var s=document.getElementById("19")
    s.style.textDecoration="line-through"
    calculatedResult.value +=_19

}
function valueButton20 () {
    var calculatedResult=document.getElementById("screen")
    var t=document.getElementById("20")
    t.style.textDecoration="line-through"
    calculatedResult.value +=_20

}
function valueButton21 () {
    var calculatedResult=document.getElementById("screen")
    var u=document.getElementById("21")
    u.style.textDecoration="line-through"
    calculatedResult.value +=_21

}
function valueButton22 () {
    var calculatedResult=document.getElementById("screen")
    var v=document.getElementById("22")
    v.style.textDecoration="line-through"
    calculatedResult.value +=_22

}
function valueButton23 () {
    var calculatedResult=document.getElementById("screen")
    var w=document.getElementById("23")
    w.style.textDecoration="line-through"
    calculatedResult.value +=_23

}
function valueButton24 () {
    var calculatedResult=document.getElementById("screen")
    var x=document.getElementById("24")
    x.style.textDecoration="line-through"
    calculatedResult.value +=_24

}
function valueButton25 () {
    var calculatedResult=document.getElementById("screen")
    var y=document.getElementById("25")
    y.style.textDecoration="line-through"
    calculatedResult.value +=_25

}
function valueButton26 () {
    var calculatedResult=document.getElementById("screen")
    var z=document.getElementById("26")
    z.style.textDecoration="line-through"
    calculatedResult.value +=_26

}


var input =document.getElementById("screen").value;
var points = 1
var totalPoints;


function submit () {
    var input =document.getElementById("screen").value;
    input=input.toLowerCase();


    for (var k = 0; k < Dictonery.length; k++) {
        if (input === Dictonery[k]){
            totalPoints = document.getElementById("point").innerText=points++
            document.getElementById("words").innerHTML+="." + input + "</br>"

        }

        // if (input !== Dictonery[k]){
        //     alert("Not a Word")
        //     break;
        // } 
    }

   displayPoints =document.getElementById("total").innerText="Total points you score are: " + totalPoints


    


    if (input.length <= 1 || input.length > 20) {
        alert("Word should be greater than 1 and under 15 characters")
    }

    var text=document.getElementById("screen").value
    document.getElementById("screen").value=""


 
}


function del () {
    var text=document.getElementById("screen").value
    document.getElementById("screen").value=text.substring(0,text.length-1)
}

function reset () {
    var text=document.getElementById("screen").value
    document.getElementById("screen").value=""

}

var main=document.getElementById("main")


    
function greeting(){
    main.style.display="none"


  }
  
  setTimeout(greeting, 30000);


    













