
let count = 0;
 
function printCount() {
    console.log('Count:', count);
    document.getElementById("waitMessage").textContent += ("/nHello Fellow Coders ...",count);
   
    count++;
    if (count >= 5) {
        clearInterval(intervalId);
        console.log('Interval stopped after 5 counts');
        
       document.getElementById("waitMessage").textContent += 'Stoped after 5 counts';

    }
}
 
const intervalId = setInterval(printCount, 1000); 




