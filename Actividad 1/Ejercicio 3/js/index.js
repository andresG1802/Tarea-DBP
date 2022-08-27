function getImporte_compra()
{
    var precio_produto=document.getElementById("precioProducto").value;
    var cantidad=document.getElementById("cantidad").value;
    var precio_p=parseInt(precio_produto);
    var cant=parseInt(cantidad);
    
    return precio_p*cant;
}
function Descuento_total()
{
    var precio_produto=document.getElementById("precioProducto").value;
    var cantidad=document.getElementById("cantidad").value;
    var precio_p=parseInt(precio_produto);
    var cant=parseInt(cantidad);
    var importe_compra=precio_p*cant,
    descuento_1=(importe_compra*0.10),
    descuento_2=(importe_compra-descuento_1)*0.10,
    descuento_total=descuento_1+descuento_2;
    
    return descuento_total;
}
function importe_pagar()
{
    var precio_produto=document.getElementById("precioProducto").value;
    var cantidad=document.getElementById("cantidad").value;
    var precio_p=parseInt(precio_produto);
    var cant=parseInt(cantidad);
    var importe_compra=precio_p*cant,
    descuento_1=(importe_compra*0.10),
    descuento_2=(importe_compra-descuento_1)*0.10,
    descuento_total=descuento_1+descuento_2,
    importe_pagar=importe_compra-descuento_total;
    return importe_pagar;
}
function getProcesar()
{
    document.getElementById("resultado").value="El importe de compra es: " + getImporte_compra() + '\n' +
                                                "El importe del descuento total es: " + Descuento_total()+'\n'+
                                                "El importe a pagar es: " + importe_pagar()+'\n';
                                                
}

