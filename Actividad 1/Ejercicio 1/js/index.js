function getProcesar()
{
    let precio=parseFloat(document.getElementById("precio").value),
    cantidad=parseFloat(document.getElementById("cantidad").value),
    importe_compra=precio*cantidad,descuento=importe_compra*0.15,
    importe_pagar=importe_compra-descuento;
    document.getElementById("resultado").value="Importe de la compra: "+ importe_compra +'\n'+
    "Descuento de 15 %: " + descuento + '\n' + "Importe a pagar: " + importe_pagar;
}