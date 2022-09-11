

let userNumber = document.getElementById('userNumber');
let submit = document.getElementById('btn');
let data;              // Translate string to integer
let i=0;              //Initial loop
let random=0;        // Generate random value;
let randomData=0;   // Storage of data;
var output;

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
output = randomData;
console.log(typeof(output));
a = parseInt(output);           // converting string to number
convertToCharacter(a);         // function calling to convert number into character

data=0;
randomData =0;
random =0;

}  
    //Second funciton to convert integer into random value;
function convertToCharacter(a){

}

submit.addEventListener('click',()=>{
    getDataOnClick();
})

