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
    for (var x = 1; x <= n; x++)e += Math.pow(n, x) / factorizar(x);
    console.log(e);
}
funcion();
