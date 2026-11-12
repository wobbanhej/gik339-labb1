console.log("Hej! Jag testar output.");

//Uppgift 2
//Console.log innan block

//console.log(disLet);
//console.log(disConst);
//console.log(disVar);

{ //Block med variabler

    let disLet = "I am betMan";
    const disConst = "I em botman"; 
    var disVar = "I am Batman";

    //Console.log innanför block

    console.log(disLet);
    console.log(disConst);
    console.log(disVar);
}
//Console.log efter block

//console.log(disLet);
//console.log(disConst);
console.log(disVar);

/* 
(Jag har satt // på console.logs som inte är körbara). 

1. Let och Const är låsta till blocket och går inte att hämta utifrån,
medan var går att använda utanför blocket efter att koden lästs.

2. Före block:
Let och Const kraschar, då de inte kan användas utanför block. Var hittas inte, då variabelns deklaration inte lästs än

I block: 
Alla kodrader är körbara och visas.

Efter block:
Let och Const körs inte, då de inte kan köra utanför blocket.
Var körs, då den går att köra utanför block, och variabelns deklaration har körts.*/


//Uppgift 3

//const add = (num1, num2) => {
//    return num1 + num2
//};

//väljer tal att plussa ihop
//console.log(add(2,2));

/*
1. Hade jag skrivit let istället så är det möjligt för variabeln att ändra värde senare i koden,
medan const gör så att värdet är låst. 

2. Samma funktion med funktionsdeklaration istället:
function add(num1, num2) {
    return num1 + num2;
}
   
3. Return skickar tillbaka ett värde till den plats i koden där funktionen anropades och resultatet sparas i en variabel, 
skriva ut det eller använda det i beräkningsfunktioner. 
När return körs så avslutas funktionen.*/

//Uppgift 4

const add = (num1, num2) => {
  
console.log(num1 == 0);
console.log(num2 === '0');
console.log(num2 === 0);
console.log(num1 == NaN);

console.log(num1 ? "truthy" : "falsy");
if (
!(num1 === null || num1 === undefined || isNaN(num1)) &&
!(num2 === null || num2 === undefined || isNaN(num2)) &&
typeof num1 === 'number' && typeof num2 === 'number')

    {
        return num1 + num2;
    }
    else {
        console.log("Felaktig input");
    }
};

/* 
1. En ternary-operator är en förenklad och mer kompakt variant av en if/else-sats,
största skillnaden är att en ternary operatorn alltid returnerar ett värde och att i en if-sats går det genom ett block av villkor.
 
2. == jämför värdet och omvandlar datatyper automatiskt
=== jämför både värde och datatyp

3. Jag kombinerade && och || genom att använda || i paranteser för att gruppera ogiltiga värden.
Jag satte (!) framför paranteserna för att värderna inte får vara något av det som paranteserna innehåller, 
samt använde type of för att säkerställa att parameterna är 'number'.
Med && ställs kravet att både num1 och num2 måste uppfylla villkoren.*/

// Uppgift 5

const num1 = 0;
let arg1;
let sum = false;

//Test 1
console.log("Test 1:")
console.log(add(sum, 1));

//Test 2
console.log("Test 2:")
console.log(add("0", 3));

//Test 3
console.log("Test 3:")
console.log(add(3, "num1"));

//Test 4
console.log("Test 4:")
console.log(add(-5, num1));

//Test 5
console.log("Test 5:")
console.log(add(arg1, 7));

//Test 6
console.log("Test 6:")
console.log(add())

//Skriver ut num1 och sum
console.log("Summa")
console.log("num1:", num1);
console.log("sum:", sum);

/* Reflektion uppgift 5
1. 
Variabel är en namngiven behållare som tillhandahåller ett givet värde.
Parameter skulle man kunna beskriva som tomma argument. De körs i en funktion utan ett egentligt värde.
Argument är de faktiska värdet när en funktion anropas.

2.
num1 som slutvärde får jag 0.
Detta är av anleding "const num1 = 0" högst upp, medan parametern num1 används i annat scope,
därav förblir num1 som 0 som slutresultat.

3. Översta utskrift är från min första console.log i skript.js

Därefter kommer olika utskrifter som "I am batman", vilket kommer från blocket i uppgift 2, där jag
provade var, let och const.

I test 1-6 står det utskrifter som "falsy, false, true, undefined, felaktig input, truthy".
Dessa utskrifter kommer från anropen till add() i uppgift 5.
Varje gång add() anropas körs de fem console.log-raderna högst upp i funktionen, därav true/false/falsy/truthy som skrivs ut.
Samtliga tester utom test 4 har felaktig datatyp (inte siffror), så skickas den till else - därav utskriften "Felaktig input" på övriga,
och eftersom det inte finns en return så skrivs dessutom "undefined" ut. Test 4 däremot, där det är -5 och 0, som därför returnerar -5.

Längst ner i utskrifterna står det "num1: 0" & "sum: false". Detta beror på att de inte tillhör samma scope,
och därför skrivs det som skrivits ut utanför scopet eftersom const och let skrivits ut efter blocket och inte heller kan nås in till scopet."
*/