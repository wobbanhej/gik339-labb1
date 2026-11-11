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