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

const add = (num1, num2) => {
    return num1 + num2
};

//väljer tal att plussa ihop
console.log(add(2,2));

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