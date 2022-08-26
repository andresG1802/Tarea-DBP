var tarifa = document.getElementById("pagos");
var horasTrabajadas = document.getElementById("horas");
var sueldoBruto;
var descuento;
var sueldoNeto;

function solucion()
{
    sueldoBruto = tarifa.value*horasTrabajadas.value;
    if(sueldoBruto<3500)
    {
        descuento = sueldoBruto*0.11;
    }
    else
    {
        descuento = sueldoBruto*0.15;
    }
    sueldoNeto = sueldoBruto-descuento;
    document.getElementById("text").innerHTML = "Sueldo Bruto: " + sueldoBruto + "\n" +
                                                     "Importe de descuento: " + descuento + "\n" +
                                                     "Sueldo neto: " + sueldoNeto;
}
