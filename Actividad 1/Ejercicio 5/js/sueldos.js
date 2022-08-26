function imprimirBoleta() {
    let importeTotal = parseFloat(document.getElementById("importeTotalMes").value);
    const sueldoBasico = 350.75;
    let comision = importeTotal * 0.05;
    let sueldoBruto = sueldoBasico + comision;
    let descuento = 0.15 * sueldoBruto;
    let sueldoNeto = sueldoBruto - descuento;
    let seccion = document.getElementById("boleta");

    let p1 = document.getElementById("p1");
    let p2 = document.getElementById("p2");
    let p3 = document.getElementById("p3");
    let p4 = document.getElementById("p4");
    let p5 = document.getElementById("p5");

    p1.textContent = "El sueldo básico es: " + sueldoBasico;
    p2.textContent = "La comisión es: " + comision;
    p3.textContent = "El sueldo bruto es: " + sueldoBruto;
    p4.textContent = "El descuento es: " + descuento;
    p5.textContent = "El sueldo neto es: " + sueldoNeto;



    seccion.style.display = "block";


}
