

const button = document.getElementById("button");
    button.addEventListener("click",function(){
        // Step 1 = Store messages in a container. I'll use an object this time.

        const messageContainer = {
            petOptions: ['snake','bird','fish','rabbit','dog','cat'],
            qualityOfOwning: ['best','worst','most fun','most playful'],
            likePets: ['like','are obsessed','are okay with','love']
        }
        
        // Step 2 = Create a variable to push the final message to.
        
        let finalOutput = []
        
        // Step 3 = Create a function that will generate a random number based on the length of an array.
        
        const generateRandomNumber = num => Math.floor(Math.random()* num)
        
        // Step 3 = Iterate through the object and select a random string from each propertie's array
        
        for(let randstring in messageContainer){
         let randomIndx = generateRandomNumber(messageContainer[randstring].length)
         switch(randstring){
            case 'petOptions':
                finalOutput.push(`A ${messageContainer[randstring][randomIndx]}`)
                break
            case 'qualityOfOwning':
                finalOutput.push(` is the ${messageContainer[randstring][randomIndx]} pet to own`)
                break
            case 'likePets':
                finalOutput.push(` if you ${messageContainer[randstring][randomIndx]} pets.`)
                break
         }
        }
        
        
        

    let message = document.getElementById("random-message");
    message.innerHTML = finalOutput.join('');
    })
