console.log("pass gen js")
container = document.querySelector('.container');
button = document.querySelector('button');
inptext = document.querySelector('.inptext');

button.addEventListener("click" , ()=>{
    console.log("button clicked")
    
    const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234576789@$%&"
    let pass =""; 
    for (let i = 0; i < 9; i++) {
        const random = alpha.charAt(Math.floor(Math.random() * alpha.length))
        console.log(random)
        pass +=  random
    }
    inptext.innerHTML = pass;
    
})