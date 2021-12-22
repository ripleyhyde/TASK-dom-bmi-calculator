function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻

const bmi=(weight/(height/100*height/100));
alert(`I am ${bmi}`)

if(bmi<18.5) {

  alert(`I am underweight`);
}

 else if(bmi<24.9) {
  alert(`I am healthy weight`);

}

else if(bmi<29.9) {
  alert(`I am  overweight`);

}

else if(bmi>30) {
  alert(`I am obese`);

}


}