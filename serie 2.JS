var n = 3;
function factorizar(numero_para_factorizar) {
    var numero_factorizado = 1;
    for (var x = 1; x <= numero_para_factorizar; x++) {
        numero_factorizado = numero_factorizado * x;
    }
    return numero_factorizado;
}
function funcion() {
    var e = 1;
    for (var i = 1; i <= n2; i++)e += 1 / factorizar(i);
    console.log(e);
}
funcion();