//JavaScript Fundamentals – Part 1

// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;
// 2. Calculate both their BMIs using the formula (you can even implement both versions)
let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;
// 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
let markHigherBMI = markBMI > johnBMI;
if (markHigherBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})`);
}

//data2
markMass = 95;
markHeight = 1.88;
johnMass = 85;
johnHeight = 1.76;
markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / johnHeight ** 2;
markHigherBMI = markBMI > johnBMI;
if (markHigherBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})`);
}

// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"\
// funtion to calculate BMI and print the result 
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
function compareBMI(markBMI, johnBMI) {

    let markHigherBMI = markBMI > johnBMI;
    if (markHigherBMI) {
        console.log(`Mark's BMI (${markBMI.toFixed(2)}) is higher than John's (${johnBMI.toFixed(2)})`);
    } else {
        console.log(`John's BMI (${johnBMI.toFixed(2)}) is higher than Mark's (${markBMI.toFixed(2)})`);
    }
}
console.log(compareBMI(markBMI, johnBMI));

