let ps = document.querySelector("#progress");
let pc = document.querySelector("span");
let h3 = document.querySelector("h3");
let alert = document.querySelector("#alert");

setTimeout(()=>{
    alert.style.display="none";
},5000);

let count = 1;
let bar = setInterval(()=>{
    if(count<100){
        count++;
        pc.textContent=count;
        ps.style.width=`${count}%`;    
    }
    else{
        h3.textContent="File Downloaded";
        clearInterval(bar);
    }
},100);