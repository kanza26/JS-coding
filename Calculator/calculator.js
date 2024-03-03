let btns = document.querySelectorAll(".btn");
let lbl = document.querySelector("label");
let clr=document.querySelector(".clr");
let sqrtButton=document.querySelector(".calculate")
sqrtButton.addEventListener("click",calculateSqrt);
function calculateSqrt(){
    //console.log("hi");
    let ele=document.querySelector("input").value;
    if(isNaN(ele)){
        lbl.innerText="not a valid number";
    }else{
        lbl.innerText=Math.sqrt(ele);
    };
}
function click(val){
    if(val=='='){
        let result=eval(lbl.innerText);
        lbl.innerText=result;
    }else if(val=='x'){
        let len=lbl.innerText.length-1;
        let item=lbl.innerText[len];
        lbl.innerText=lbl.innerText.replace(item," ");
    }
    else{
    lbl.innerText+=val;
    }
}
// Iterating over each button in the NodeList
btns.forEach(function(btn) {
    btn.addEventListener("click", function() {
        click(this.textContent);
    });
});
clr.addEventListener("click",function(){
    lbl.innerText="";
    document.querySelector("input").value="";
})





