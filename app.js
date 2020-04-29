
class Rectangulo{
    constructor(base,altura){
        this.base=base;
        this.altura=altura;
    }
    area(){
        return this.base*this.altura;
    }
}
  
class Triangulo{
    constructor(base,altura){
        this.base=base;
        this.altura=altura;
    }
    area(){
        return this.base*this.altura/2;
    }
}
  
class Cuadrado{
    constructor(base){
        this.base=base;
       
    }
    area(){
        return this.base*this.base;
    }
}

 
const btn1=document.getElementById("btnRectangulo");
btn1.addEventListener('click',()=>{

    let base=document.getElementById("base").value;
    let altura=document.getElementById("altura").value;
 
    base=parseInt(base);
    altura=parseInt(altura);
    let divRes=document.getElementById("resultados");
const btn2=document.getElementById("btntrin");
btn2.addEventListener('click',()=>{

    let base=document.getElementById("base").value;
    let altura=document.getElementById("altura").value;
 
    base=parseInt(base);
    altura=parseInt(altura);
    let divRes=document.getElementById("resultados");
    
});
const btn3=document.getElementById("btncua");
btn3.addEventListener('click'),()=>{

    let base=document.getElementById("base").value;
   
    base=parseInt(base);
   
    let divRes=document.getElementById("resultados");
}