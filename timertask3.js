

const sayHello = ()=> {
    console.log('Hello Fellow Coders ...');
    document.getElementById("waitMessage").textContent += "Hello Fellow Coders ...";
    
  };
  setInterval(sayHello, 2000)


