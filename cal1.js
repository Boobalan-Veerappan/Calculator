form = document.querySelector("#calcForm");
result = document.querySelector("#result");
btnadd= document.querySelector("#btnAdd");
btnmul= document.querySelector("#btnmul");
btndiv= document.querySelector("#btndiv");
btnsub= document.querySelector("#btnSUB");


let res=0;
btnadd.addEventListener("click", e => {
    e.preventDefault();
    let num1 = form.num1.value;
    let num2 = form.num2.value;
    res = Number.parseInt(num1) + Number.parseInt(num2);
    result.innerHTML = `${num1}+${num2} = ${res}`;
    
});
btnmul.addEventListener("click", e => {
    e.preventDefault();
    let num1 = form.num1.value;
    let num2 = form.num2.value;
    res = Number.parseInt(num1) *
     Number.parseInt(num2);
    result.innerHTML = `${num1}*${num2} = ${res}`;
    
});
btndiv.addEventListener("click", e => {
    e.preventDefault();
    let num1 = form.num1.value;
    let num2 = form.num2.value;
    res = Number.parseInt(num1) / Number.parseInt(num2);
    result.innerHTML = `${num1}/${num2} = ${res}`;
    
});
btnsub.addEventListener("click", e => {
    e.preventDefault();
    let num1 = form.num1.value;
    let num2 = form.num2.value;
    res = Number.parseInt(num1)-Number.parseInt(num2);
    result.innerHTML = `${num1}-${num2} = ${res}`;
    
});