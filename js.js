function addition(){
    let x=0;
    x= document.getElementById("input1").value;
    if(x==false){
        alert("box 1 cannot be empty");
        alert("enter a number");
    }
    let y=0;
    y= document.getElementById("input2").value;
    if(y==false){
        alert("box 2 cannot be empty");
        alert("enter a number");
    }
    ans1= Number(x)+Number(y);
    
    document.getElementById("sum").value=ans1;
}
function subtraction(){
    let n=0;
    n= document.getElementById("input3").value;
    if(n==false){
        alert("box 1 cannot be empty");
        alert("enter a number");
    }
    let a=0;
    a= document.getElementById("input4").value;
    if(a==false){
        alert("box 2 cannot be empty");
        alert("enter a number");
    }
    ans2= Number(n)-Number(a);
    document.getElementById("diff").value=ans2;
}
function multiplication(){
    let c=0;
    c= document.getElementById("input5").value;
    if(c==false){
        alert("box 1 cannot be empty");
        alert("enter a number");
    }
    let d=0;
    d= document.getElementById("input6").value;
    if(d==false){
        alert("box 2 cannot be empty");
        alert("enter a number");
    }
    ans3= Number(c)*Number(d);
    document.getElementById("product").value=ans3;
}
function division(){
    let f=0;
    f= document.getElementById("input7").value;
    if(f==false){
        alert("box 1 cannot be empty");
        alert("enter a number");
    }
    let g=0;
    g= document.getElementById("input8").value;
    if(g==false){
        alert("box 2 cannot be empty");
        alert("enter a number");
    }
    ans4= Number(f)/Number(g);
    document.getElementById("quotient").value=ans4;
}
function age(){
    let age=prompt("How Old Are You?",100);
    alert(age);
}
function boss(){
    let isboss = confirm("are you there boss?");
    if(isboss==true){
        alert("welcome boss");
    }
    else{
        alert("get loss!!");
    }
}