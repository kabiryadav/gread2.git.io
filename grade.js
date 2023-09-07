 function calculater(){
    var a=parseInt(document.getElementById('bookone').value);
    var b =parseInt(document.getElementById('booktow').value);
    var c=parseInt(document.getElementById('bookthree').value);
    var d=parseInt(document.getElementById('bookfor').value);
    var e=parseInt(document.getElementById('bookfive').value);

    if(a>100 || b>100 || c>100 || d>100 || e>100){
        alert("Please Enter Correct Value");
    }
    else{
        var optain=a+b+c+d+e;
        document.getElementById("optained").innerHTML=optain;

        var per=optain/500*100;
        document.getElementById("per").innerHTML=per;
    }

    if(per>=80){
        document.getElementById("grade").innerHTML="A";
    }

    else if (per>=70){
        document.getElementById("grade").innerHTML="B";
    }

    else if(per>=60){
        document.getElementById("grade").innerHTML="C";
    }

    else if(per>=50){
        document.getElementById("grade").innerHTML="D";
    }

    else if(per>=40){
        document.getElementById("grade").innerHTML="E"
    }
    else{
        document.getElementById("grade").innerHTML="F";
    }

    if(a>40 && b>40 && c>40 && d>40 && e>40){
        document.getElementById("remarks").innerHTML="<span style='color:green'>Pass</span>"
    }
    else{
        document.getElementById("remarks").innerHTML="<span style='color:red'>Fail</span>";
    }
 }