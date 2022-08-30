function getProcesar()
{
    let ex1=parseFloat(document.getElementById("ex1").value),
    ex2=parseFloat(document.getElementById("ex2").value),
    ex3=parseFloat(document.getElementById("ex3").value),
    pf=(0.20*ex1)+(0.35*ex2)+(0.45*ex3);
    if(pf<13)
    {
        document.getElementById("resultado").value="El promedio final del alumno es: "+pf;
    }
    else
    {
        document.getElementById("resultado").value="El promedio final del alumno es: "+pf+"\n"
        +"El alumno aprobo"
    }
    
}