var uni = document.getElementById("unidades");
var pre = document.getElementById("precio");
var importeCompra, descuento, importePagar;
var mensaje;
function procesar()
{
    importeCompra = uni.value*pre.value;
    if(uni.value<10)
    {
        descuento = importeCompra*0.15;
    }
    else
    {
        descuento = importeCompra*0.05;
    }
    importePagar = importeCompra-descuento;
    if(importePagar<200)
    {
        mensaje = "Un cuaderno";
    }
    else
    {
        mensaje = "Una agenda";
    }
    document.getElementById("parrafo1").innerHTML = "Importe de compra: " + importeCompra + "\n" +
                                                    "Importe de descuento: " + descuento + "\n" +
                                                    "Importe a pagar: " + importePagar + "\n" +
                                                    "Obsequio: " + mensaje + "\n";
}
