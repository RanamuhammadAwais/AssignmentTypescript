import { getUnit } from "gsap"
let a:string = "Ahmed"
console.log("Hello" ,a, "would you like to learn some Python today?");

/*Name Cases: Store a person’s name in a variable, 
and then print that person’s name in lowercase, uppercase, and titlecase
*/

let b ="eric"
console.log(b.toLowerCase());
console.log(b.toUpperCase());


/*Famous Quote: Find a quote from a famous person you admire. 
Print the quote and the name of its author */

console.log('J. R. R. Tolkein said, "Not all those who wander are lost."')


/*Famous Quote 2: Repeat Exercise 4, but this time store the famous 
person’s name in a variable called famous_person. Then compose your 
message and store it in a new variable called message. Print your message.
*/
let famous_person="J. R. R. Tolkein said,"
let message='"Not all those who wander are lost."'
console.log(famous_person+message);

// Stripping Names: Store a person’s name, and include
//  some whitespace characters at the beginning and end 
//  of the name.
var ak : String="\tRana Awais'\n"

console.log(ak)

//Then print the name after striping the white spaces.

let aj = "rana Awais"
console.log(aj)

/*Number Eight: Write addition, subtraction, multiplication,
and division operations that each result in the number 8.
Be sure to enclose your operations in print statements to see the results*/

console.log(5+3);
console.log(10-2);
console.log(4*2);
console.log(32/4);


/* Favorite Number: Store your favorite number in a variable. 
Then, using that variable, create a message that reveals your
 favorite number. Print that message.*/
 let a1=16
 console.log("my favourite number is",a1)


 /* Adding Comments: Choose two of the programs you’ve written, 
 and add at least one comment to each*/

 //This program is showing my favourite number
 let a2=16
 console.log("my favourite number is",a1)
 //This program is hsowing my name
 let a3 = "rana Awais"
console.log(aj)

/*Names: Store the names of a few of your friends in a array 
called names. Print each person’s name by accessing each element in 
the list, one at a time. */

let names=["Eric","John","David","solman"]
for(let i =0 ;i<=names.length;i++)
console.log(names[i])


/*Greetings: Start with the array you used in Exercise 11, but instead
of just printing each person’s name, print a message to them. The text
of each message should be the same, but each message should be
personalized with the person’s name. */

let mames=["Eric","John","David","solman"]
for(let i =0 ;i<=names.length;i++){
console.log("Hello",mames[i],"How are you?")}


/* 13. Your Own Array: Think of your favorite mode of transportation, 
such as a motorcycle or a car, and make a list that stores several
examples. Use your list to print a series of statements about these
items, such as “I would like to own a Honda motorcycle.”*/

let transportation= ["motorcycle","Car","Helicopter"]
for (let i =0; i<transportation.length;i++){
    console.log(`I would like to own ${transportation[i]}`)
}

/* 14. Guest List: If you could invite anyone, living or deceased,
 to dinner, who would you invite? Make a list that includes at least 
 three people you’d like to invite to dinner. Then use your list to 
 print a message to each person, inviting them to dinner*/

 let guest =["Akram","Rahman","Dadi"]
 for(let i=0;i<guest.length;i++){
    console.log(`Salam Dear ${guest[i]}! i Would like to invite you on dinner.`)
 }

 /* 15. Changing Guest List: You just heard that one of your guests can’t 
 make the dinner, so you need to send out a new set of invitations. You’ll 
 have to think of someone else to invite. */

 console.log("Our Guest Dear Mr.Akram was unble to attend the Dinner");
guest.shift()
guest.unshift("Ashraf")
for (let i =0; i<guest.length;i++){
    console.log(`Salam Dear ${guest[i]}! i Would like to invite you on dinner.`)
}


/* 16. More Guests: You just found a bigger dinner table, so now more space is available.
Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program
 informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end
 of your list. • Print a new set of invitation messages, one for each person in your list.*/

 guest.unshift("Shamshad");
 guest.push("Munshi")
 guest.splice(2,0,"Annie")
 for(let i=0;i<guest.length;i++){
    console.log(`Salam Dear ${guest[i]}! i Would like to invite you on dinner.`)
 }

 /* Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for 
 the dinner, and you have space for only two guests.
 
Start with your program from Exercise 16. Add a new line that prints a message saying that you can 
invite only two people for dinner.*/ 

console.log("We regret to inform you that we can invite only 2 peoplpe")

/* Remove guests from your list one at a time until only two names remain in your list. 
Each time you pop a name from your list, print a message to that person letting them know 
you’re sorry you can’t invite them to dinner.*/

let d= guest.pop()
console.log(`Hello Dear ${d}! Due to limitation of available table i am sorry that i cant invite you to dinner.`)

let d1= guest.pop()
console.log(`Hello Dear ${d1}! Due to limitation of available table i am sorry that i cant invite you to dinner.`)
console.log(guest)


/* Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.*/
let places =["Nigeria","Iraq","India","Afganistan","Pakistan","Somalia"] 

//Print your array in its original order.
console.log(places)

// Print your array in alphabetical order without modifying the actual list.
let changedPlaces=places.slice()
console.log(changedPlaces.sort())

//Show that your array is still in its original order by printing it.
console.log(places)

//Print your array in reverse alphabetical order without changing the order of the original list.

 let reverse = places.slice()
 console.log(reverse.sort((a,b)=>b.localeCompare(a)))

 //Show that your array is still in its original order by printing it again.
 console.log("orignal data of places")
 console.log(places)

 //Reverse the order of your list. Print the array to show that its order has changed.
 console.log("reverse the order")
 console.log(places.reverse())

 //Reverse the order of your list again. Print the list to show it’s back to its original order
 console.log("Back to orignal")
console.log(places.reverse())

//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("in alphabetical order")
console.log(places.sort())

//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("in reverse order")
console.log(places.reverse())


/* 19.Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
print a message indicating the number of people you are inviting to dinner*/
console.log(`We are inviting ${guest.length} people on our dinner.`)


/* 20. Think of something you could store in a array. For example, you could make a list 
of mountains, rivers, countries, cities, languages, or anything else you’d like. Write 
a program that creates a list containing these items.*/

console.log("creating list item")
let country= ["K2","Sindh","Pakistan","Lahore","Urdu"]
for(let i=0; i<country.length;i++){
    console.log(`${country[i]}`)
}

/*21. They think of something you could store in a TypeScript Object. Write a program 
that creates Objects containing these items */



/*22. Intentional Error: If you haven’t received an array index error in one of your 
programs yet, try to make one happen. Change an index in one of your programs to produce 
an index error. Make sure you correct the error before closing the program. */

console.log ("index eror")
console.log(country[10])

/*23. Conditional Tests: Write a series of conditional tests. Print a statement describing each test and 
your prediction for the results of each test 
Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/
console.log ('test')
let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

//1. 
let phone="Nokia"
console.log("Is phone == 'Nokia'? I predict True.")
console.log(phone== "Nokia")

//2.
let smartphone="Samsung"
console.log("Is smart phone == 'samsung'? I predict True.")
console.log(smartphone== "Samsung")

//3.
let watch="Apple"
console.log("Is Watch == 'Apple'? I predict True.")
console.log(watch== "Apple")

//4.
let shoe="Nike"
console.log("Is shoe == 'Nike'? I predict True.")
console.log(shoe == "Nike")

//5.
let ink="piano"
console.log("Is ink == 'Piano'? I predict True.")
console.log(ink == "piano")

//6.
let shirt= "Monark"
console.log('is Shirt == Monark? i predict False')
console.log(shirt== "engine")

//7.
let Trouser= "Monark"
console.log('is Trouser == Monark? i predict False')
console.log(Trouser== "engine")


//8.
let Tie= "Monark"
console.log('is Tie == Monark? i predict False')
console.log(Tie== "engine")

//9.
let TShirt= "Monark"
console.log('is Trouser == Monark? i predict False')
console.log(TShirt== "engine")

//10.
let Underwear= "Monark"
console.log('is Underwear == Monark? i predict False')
console.log(Underwear== "engine")


/* More Conditional Tests: You don’t have to limit the number of tests 
you create to 10. If you want to try more comparisons, write more tests. 
Have at least one True and one False result for each of the following:*/

//Tests for equality and inequality with strings
console.log("Is string = string? I  predict False")
console.log(Underwear== "jiger")

console.log("Is string = string? I  predict True")
console.log(Underwear== "Monark")

// Test using lower case function 
console.log("Is lowerCase = lowerCase? I  predict False")
console.log(Underwear.toLowerCase()== "Monark")

console.log(" in lowerCase")
console.log("Is LowerCase = LowerCase? I  predict True")
console.log(Underwear.toLowerCase()== "Monark".toLowerCase())

/*Numerical tests involving equality and inequality, greater than and less than, 
greater than or equal to, and less than or equal to*/

console.log("Testing Numbers")
let mobile= "33368161"
console.log("are Numbers = mobile numbers? i predict False ")
console.log(mobile.length==7)

console.log("greater than ")
console.log("are Numbers > mobile numbers? i predict False ")
console.log(mobile.length>10)

console.log("Smaller than ")
console.log("are Numbers <=> mobile numbers? i predict False ")
console.log(mobile.length<10)


/* 25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a 
variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
*/
//Write an if statement to test whether the alien’s color is green. If it is, print a message 
//that the player just earned 5 points.

let aliean_color="green"

if (aliean_color=="green"){
    console.log("Player just earned 5 points")
}

console.log("Fails have no output")

if (aliean_color=="green"){
    console.log("Player just earned 5 points")
}else{
    console.log("Failed!! no number")
}

/*26.Alien Colors #2: Choose a color for an alien as you did in Exercise 25, 
and write an if-else chain. */

//If the alien’s color is green, print a statement that the player just earned 5 points 
//for shooting the alien.*/

if (aliean_color=="green"){
    console.log("Player just earned 5 points")
}else{
    console.log("Failed!! no number")
}

// If the alien’s color isn’t green, print a statement that the player just earned 10 points

if (aliean_color=="blue"){
    console.log("Player just earned 5 points")
}else{
    console.log("Player just earned 10 points")
}

/*27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.*/

