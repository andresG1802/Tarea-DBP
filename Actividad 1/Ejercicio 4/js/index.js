function getProcesar()
{
    let tarifa_horaria=parseFloat(document.getElementById("TarifaHoraria").value),
        Horas_trabajadas=parseFloat(document.getElementById("HorasTrabajadas").value),
        Sueldo_bruto=tarifa_horaria*Horas_trabajadas,
        DescuentoLey=Sueldo_bruto*0.15,
        SueldoNeto=Sueldo_bruto-DescuentoLey;
    document.getElementById("resultado").value="Sueldo bruto: " + Sueldo_bruto + '\n'
                                                + "Descuento por ley: " + DescuentoLey + '\n'
                                                + "Sueldo neto: " + SueldoNeto;
}