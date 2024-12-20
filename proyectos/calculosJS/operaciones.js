
function operacion() 
{
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let tipoope = document.getElementById("tipoope").value;
    let ope = 0; 
    let operacionTexto = ""; 

    if (isNaN(n1) || isNaN(n2)) {
        document.getElementById("resultado").innerHTML = "<h2>Por favor, ingresa números válidos.</h2>";
        return;
    }

    switch (tipoope) {
        case "suma":
            ope = n1 + n2;
            operacionTexto = `${n1} + ${n2} = ${ope}`;
            break;
        case "resta":
            ope = n1 - n2;
            operacionTexto = `${n1} - ${n2} = ${ope}`;
            break;
        case "multiplicacion":
            ope = n1 * n2;
            operacionTexto = `${n1} * ${n2} = ${ope}`;
            break;
        case "division":
            if (n2 === 0) {
                document.getElementById("resultado").innerHTML = "<h2>No se puede dividir por cero.</h2>";
                return;
            }
            ope = n1 / n2;
            operacionTexto = `${n1} / ${n2} = ${ope}`;
            break;
        default:
            document.getElementById("resultado").innerHTML = "<h2>Operación no válida.</h2>";
            return;
    }

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<h2>${operacionTexto}</h2>`;

    console.log("El valor de n1 es: " + n1); 
}

function isNumber(n)
{
    return !isNan(parseInt(n) && isFinite(n))
}