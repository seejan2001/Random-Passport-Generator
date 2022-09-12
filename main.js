let userNumber = document.getElementById('userNumber');
let submit = document.getElementById('btn');
let inputProcessed = document.getElementById('inputProcessedData');
let data;              // Translate string to integer
let i=0;              //Initial loop
let random=0;        // Generate random value;
let randomData=0;   // Storage of data;
var output;
var length;         // Contain size of the string;
let text;           // Currently Not used
let a;          // Currently Not used

function getDataOnClick(){
    data = parseInt(userNumber.value);
    for(i=0;i<data;i++)
{   
    if(randomData == 0)
    {
        random = Math.floor(Math.random() * data);
        randomData = random;
    }
    else{
        random = Math.floor(Math.random()* data);
        randomData = randomData +''+random;
    }

}
output = randomData +''+ randomData; // Incase if i need to translate into alphabet(ASCII);
console.log(output);                    
inputProcessed.value = randomData;  
length = output.length;          // Give length of the string
a = parseInt(output);           // converting string to number
convertToCharacter(a);         // function calling to convert number into character

data=0;
randomData =0;
random =0;

}  
    //Second funciton to convert integer into random value;
function convertToCharacter(a){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
    // console.log(typeof(a));
     
    //  console.log(text);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            

}

submit.addEventListener('click',()=>{
    getDataOnClick();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
})

