///////////////////////////////////////////////////////////////
///// EXCERCISE 1 -  Print all even numbers from 0 – 10 /////
/////////////////////////////////////////////////////////////


// Function that returns even numbers from an array.

const returnEvenNumbers = (arr) => {
  let total = [];
  arr.forEach(num => { 
       if (num %2 == 0){
            total.push(num)
        }      
    })
    return total
  }
 
const returnEvenNumbersEvent = () => {
  const button = document.getElementById('button-1');
  const output = document.getElementById('output');
  const userInput = document.getElementById('even-numbers')
  button.addEventListener('click', () => {
    output.innerHTML = returnEvenNumbers(userInput.value.split(','));
  });

  userInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      button.click();
    }
  });
};


returnEvenNumbersEvent()


/////////////////////////////////////////////////////////////////////////
///// EXCERCISE 2 - Print a table containing multiplication tables /////
///////////////////////////////////////////////////////////////////////


const userInput2 = document.getElementById('multiplication-table')
const button2 = document.getElementById('button-2')
const output2 = document.getElementById('output-2')

button2.addEventListener('click', () => {
let size = userInput2.value
let table =""
for (let i = 1; i <= size ; i++){
  let row = ""
  for (let j = 1; j <= size ; j++){
    row += i * j + "\t\t"

  }
  table+= row + '<br>'
}
output2.innerHTML = table

})


/////////////////////////////////////////////////////////////////////////
///// EXCERCISE 3 - Create a length converter function /////////////////
///////////////////////////////////////////////////////////////////////


const userInput3 = document.getElementById('length-converter')
const button3 = document.getElementById('button-3')
const output3 = document.getElementById('output-3')

button3.addEventListener('click', ()=>{
  let km = userInput3.value
  let miles =  km /1.609
  output3.innerHTML = `${km} kilometers = ${miles.toFixed(2)}  miles`
})
 userInput3.addEventListener('keypress', (event1) =>{
  if(event1.key === 'Enter'){
    button3.click()
  }
 })

/////////////////////////////////////////////////////////////////////////
///// EXCERCISE 4 - Calculate the sum of numbers within an array ///////
///////////////////////////////////////////////////////////////////////


const userInput4 = document.getElementById('sum-of-array')
const button4 = document.getElementById('button-4')
const output4 = document.getElementById('output-4')


const sumOfArray = (arr) =>{
  const totalArr = arr.reduce((total,acc) => {
    return total += Number(acc)
  },0)
return totalArr
}
button4.addEventListener('click',() =>{

  if(userInput4.value === "" || isNaN(parseFloat(userInput4.value))){
    output4.innerHTML = 'Please enter some numbers.'
  }
  else{
  output4.innerHTML = sumOfArray(userInput4.value.split(','))
}})

userInput4.addEventListener('keypress',(event2)=>{
  if(event2.key === 'Enter'){
    button4.click()
  }
})



/////////////////////////////////////////////////////////////////////////
///// EXCERCISE 5 - Create a function that reverses an array ///////////
///////////////////////////////////////////////////////////////////////


const userInput5 = document.getElementById('reverse-array')
const button5 = document.getElementById('button-5')
const output5 = document.getElementById('output-5')

button5.addEventListener('click', ()=>{
  
  const userArray = userInput5.value.split(',')
  let newArray = []
  for(let i = userArray.length -1; i >=0; i--){
    newArray.push(userArray[i])
  }
  output5.innerHTML = newArray.join(',')
})

userInput5.addEventListener('keypress',(event3)=>{
  if(event3.key === 'Enter'){
    button5.click()
  }
})



/////////////////////////////////////////////////////////////////////////
///// EXCERCISE 6 - Sort an array from lowest to highest ///////////////
///////////////////////////////////////////////////////////////////////

const userInput6 = document.getElementById('low-to-high')
const button6 = document.getElementById('button-6')
const output6 = document.getElementById('output-6')

button6.addEventListener('click',() =>{
 
  const userArray = userInput6.value.split(',')

  if (userArray.some((element) => isNaN(element))) {
    output6.innerHTML = 'Please enter a number';
    return;
  }

  userArray.sort(function(a,b){
    return a - b;
  })
  output6.innerHTML = userArray

})
userInput6.addEventListener('keypress',(event4)=>{
  if(event4.key === 'Enter'){
    button6.click()
  }
})


////////////////////////////////////////////////////////////////////////////
///// EXCERCISE 7 - Create a function that filters out negative numbers ///
//////////////////////////////////////////////////////////////////////////

const button7 = document.getElementById('button-7')
const output7 = document.getElementById('output-7')
const userInput7 = document.getElementById('filter-negative')

button7.addEventListener('click', () => {

  const negativeUser = userInput7.value.split(',')
  if (negativeUser.some((element) => isNaN(element))) {
    output7.innerHTML = 'Please enter a string of numbers';
    return;
  }

  let newArray = []
      negativeUser.forEach((number) =>{
        if(number >=0) {
          newArray.push(number)
        }
      })
      output7.innerHTML = newArray
  })
  userInput7.addEventListener('keypress',(event6)=>{
    if(event6.key === 'Enter'){
      button7.click()
    }
  })
////////////////////////////////////////////////////////////////////////////
///// EXCERCISE 8 - Remove the spaces found in a string ///////////////////
//////////////////////////////////////////////////////////////////////////


const button8 = document.getElementById('button-8')
const output8 = document.getElementById('output-8')
const userInput8 = document.getElementById('remove-whitespace')

button8.addEventListener('click',()=>{
  const fullString = userInput8.value
  let newString = fullString.split(" ").join("")
  output8.innerHTML = newString
})
userInput8.addEventListener('keypress',(event7)=>{
  if(event7.key === 'Enter'){
    button8.click()
  }
})


////////////////////////////////////////////////////////////////////////////
///// EXCERCISE 9 - Return a Boolean if a number is divisible by 10 ///////
//////////////////////////////////////////////////////////////////////////

const button9 = document.getElementById('button-9');
const output9 = document.getElementById('output-9');
const userInput9 = document.getElementById('divisible-10')
button9.addEventListener('click', () => {
  const checkDivisible = userInput9.value;
  output9.innerHTML = trueIfDivisibleByTen(checkDivisible);
});

function trueIfDivisibleByTen(num) {
  if(num === ''){
    return 'Please enter a number'
  }
   return num % 10 === 0 ? `${num} is divisible by 10` : `${num} is not divisble by 10.`
   
}
userInput9.addEventListener('keypress',(event9)=>{
  if(event9.key === 'Enter'){
    button9.click()
  }
})



////////////////////////////////////////////////////////////////////////////
///// EXCERCISE 10 - Return the number of vowels in a string //////////////
//////////////////////////////////////////////////////////////////////////

const button10 = document.getElementById('button-10')
const output10 = document.getElementById('output-10')
const userInput10 = document.getElementById('vowels')
button10.addEventListener('click', () => {
  const numVowels =userInput10.value

  output10.innerHTML = numberOfVowels(numVowels)

})

const numberOfVowels = (letter) => {
  const vowels = ['a','A', 'e','E', 'i','I', 'o','O', 'u','U'];
  let total = 0
  for(let i=0; i< letter.length; i++){
    if (vowels.includes(letter[i])) {
      total++;
   
  }
}
return `There ${total === 1 ? 'is' : 'are'} ${total} ${total === 1 ? 'vowel' : 'vowels'} in the string.`;
}

userInput10.addEventListener('keypress',(event10)=>{
  if(event10.key === 'Enter'){
    button10.click()
  }
})



/////////I will use the code below to refactor and make the code less DRY//////////

// const getElementReferences = (inputId, buttonId, outputId) => {
//   const userInput = document.getElementById(inputId);
//   const button = document.getElementById(buttonId);
//   const output = document.getElementById(outputId);

//   return {
//     userInput,
//     button,
//     output
//   };
// };

// const { userInput5, button5, output5 } = getElementReferences('reverse-array', 'button-5', 'output-5');
// const { userInput6, button6, output6 } = getElementReferences('low-to-high', 'button-6', 'output-6');
//etc.
