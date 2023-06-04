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
 
// Function that takes user input and returns only even numbers.

// const returnEvenNumbersEvent = () => {
//   const userInput = document.getElementById('even-numbers');
//   const button = document.getElementById('button-1');
//   const output = document.getElementById('output');

//   const handleButtonClick = () => {
//     output.innerHTML = returnEvenNumbers(userInput.value.split(','));
//   };

//   const handleInputKeyPress = (event) => {
//     if (event.key === 'Enter') {
//       handleButtonClick();
//     }
//   };

//   button.addEventListener('click', handleButtonClick);
//   userInput.addEventListener('keypress', handleInputKeyPress);
// };

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
    row += i * j + "\t"

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
  output3.innerHTML = miles +' miles'
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
  let userArray = userInput4.value.split('')
  output4.innerHTML = sumOfArray(userArray)
})



/////////////////////////////////////////////////////////////////////////
///// EXCERCISE 5 - Create a function that reverses an array ///////////
///////////////////////////////////////////////////////////////////////


const userInput5 = document.getElementById('reverse-array')
const button5 = document.getElementById('button-5')
const output5 = document.getElementById('output-5')

button5.addEventListener('click', ()=>{
  
  const userArray = userInput5.value.split('')
  let newArray = []
  for(let i = userArray.length -1; i >=0; i--){
    newArray.push(userArray[i])
  }
  output5.innerHTML = newArray
})



/////////////////////////////////////////////////////////////////////////
///// EXCERCISE 6 - Sort an array from lowest to highest ///////////////
///////////////////////////////////////////////////////////////////////

const userInput6 = document.getElementById('low-to-high')
const button6 = document.getElementById('button-6')
const output6 = document.getElementById('output-6')

button6.addEventListener('click',() =>{
  const userArray = userInput6.value.split('')
  userArray.sort(function(a,b){
    return a - b;
  })
  output6.innerHTML = userArray

})


////////////////////////////////////////////////////////////////////////////
///// EXCERCISE 7 - Create a function that filters out negative numbers ///
//////////////////////////////////////////////////////////////////////////

const button7 = document.getElementById('button-7')
const output7 = document.getElementById('output-7')
button7.addEventListener('click', () => {


  const userInput7 = document.getElementById('filter-negative').value.split(',')
  let newArray = []
      userInput7.forEach((number) =>{
        if(number >=0) {
          newArray.push(number)
        }
      })
      output7.innerHTML = newArray
  })

////////////////////////////////////////////////////////////////////////////
///// EXCERCISE 8 - Remove the spaces found in a string ///////////////////
//////////////////////////////////////////////////////////////////////////


const button8 = document.getElementById('button-8')
const output8 = document.getElementById('output-8')

button8.addEventListener('click',()=>{
  const userInput8 = document.getElementById('remove-whitespace').value
  let newString = userInput8.split(" ").join("")
  output8.innerHTML = newString
})



////////////////////////////////////////////////////////////////////////////
///// EXCERCISE 9 - Return a Boolean if a number is divisible by 10 ///////
//////////////////////////////////////////////////////////////////////////

  const button9 = document.getElementById('button-9');
const output9 = document.getElementById('output-9');

button9.addEventListener('click', () => {
  const userInput9 = document.getElementById('divisible-10').value;
  output9.innerHTML = trueIfDivisibleByTen(userInput9);
});

function trueIfDivisibleByTen(num) {
  return num % 10 === 0;
}


////////////////////////////////////////////////////////////////////////////
///// EXCERCISE 10 - Return the number of vowels in a string //////////////
//////////////////////////////////////////////////////////////////////////

const button10 = document.getElementById('button-10')
const output10 = document.getElementById('output-10')

button10.addEventListener('click', () => {
  const userInput9 = document.getElementById('vowels').value

  output10.innerHTML = numberOfVowels(userInput9)

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

