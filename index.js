// Code your solutions in this file

function writeCards(name, event){
    let messages = [];
    for (let i = 0; i < name.length; i++){
        messages.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }
    return messages;
}
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");
// function countDown(){
//     let countDown = 10;
//     while (countDown > -1){
//         console.log(countDown--);
//     }
// }

function countDown(a){
    while(a>=0){
        console.log(a--);
    }
}
countDown(10);