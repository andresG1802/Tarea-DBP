function getProcesar()
{
    let Precio_boleto=parseFloat(document.getElementById("precioboleto").value),
        Cantidad=parseFloat(document.getElementById("cantidad").value),
        importe_compra=Precio_boleto*Cantidad,descuento=importe_compra*0.07,Importe_pagar=importe_compra-descuento;
    
    document.getElementById("resultado").value=
    "Precio del boleto: "+ Precio_boleto +'\n'+
    "Cantidad comprada: " +Cantidad+ "\n" + 
    "Importe comprada: "+importe_compra +"\n"+
    "Descuento: "+descuento+"\n"+
    "Importe a pagar: "+Importe_pagar+"\n"+
    "Cantidad de chocolates recibidas: "+(Cantidad*3);
}