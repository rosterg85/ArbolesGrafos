/*class Nodo{
    constructor(valor){
            this.valor=valor;
            this.izquierda=null;
            this.derecha=null;
        }
    }
class Arbol{
    constructor(){
        this.raiz=null;
    }
    agregarElemento(valor){
        let nuevo=new Nodo(valor);
        console.log(nuevo);
        if(this.raiz==null){
            this.raiz=nuevo;
        }
        else{
            this.agregar(nuevo,this.raiz);
        }
    }
    agregar(nuevo,nodo){
        if(nuevo.valor<nodo.valor){
            if(nodo.izquierda==null){
                nodo.izquierda=nuevo;
            }
            else{
                this.agregar(nuevo,nodo.izquierda);
            }            
        }
        else{
            if(nodo.derecha==null){
                nodo.derecha=nuevo;
            }
            else{
                this.agregar(nuevo,nodo.derecha);
            }
        }
    }
    buscar(valor){
        return this.buscarElemento(valor,this.raiz);
        
    }

    buscarElemento(valor,nodo){
        if(nodo!=null){
            if(valor<nodo.valor){
                return this.buscarElemento(valor,nodo.izquierda);
            }
            else{
                if(valor>nodo.valor){
                    return this.buscarElemento(valor,nodo.derecha);
                }
                else{
                    return nodo;
                }
            }
        }
    }
    enOrden(){
        let resultado=[];
        this.enOrdenAux(this.raiz,resultado);
        return resultado;
    }

    enOrdenAux(nodo,resultado){
        if(nodo!=null){
            this.enOrdenAux(nodo.izquierda,resultado);
            resultado.push(nodo.valor);
            this.enOrdenAux(nodo.derecha,resultado);
        }
    }

    enPreOrden(){
        let resultado=[];
        this.enPreOrdenAux(this.raiz,resultado);
        return resultado;
    }

    enPreOrdenAux(nodo,resultado){
        if(nodo!=null){
            resultado.push(nodo.valor);
            this.enPreOrdenAux(nodo.izquierda,resultado);
            this.enPreOrdenAux(nodo.derecha,resultado);
        }
    }

    enPostOrden(){
        let resultado=[];
        this.enPostOrdenAux(this.raiz,resultado);
        return resultado;
    }
     
    enPostOrdenAux(nodo,resultado){
        if(nodo!=null){
            this.enPostOrdenAux(nodo.izquierda,resultado);
            this.enPostOrdenAux(nodo.derecha,resultado);
            resultado.push(nodo.valor);
        }
    }
}

let arbol=new Arbol();
arbol.agregarElemento(15);
arbol.agregarElemento(10);
arbol.agregarElemento(25);
arbol.agregarElemento(5);
arbol.agregarElemento(2);
arbol.agregarElemento(35);
console.log(arbol.raiz);

console.log(arbol.buscar(25))

console.log(arbol.enOrden());
console.log(arbol.enPreOrden());
console.log(arbol.enPostOrden());




//vamos a contruir un grafo para 5 ciudades

class Nodo{
    constructor(valor){
        this.valor=valor;
        this.adyacentes=[];
        this.valoresAristas=[];
    }
}

class Grafo{
    constructor(){
        this.nodos=[];
    }
    agregarNodo(valor){
        let nodo=new Nodo(valor);
        this.nodos.push(nodo);
    }
    agregarArista(valor1,valor2,valorArista){
        let nodo1=this.buscarNodo(valor1);
        let nodo2=this.buscarNodo(valor2);
        nodo1.adyacentes.push(nodo2);
        nodo2.adyacentes.push(nodo1);
        nodo1.valoresAristas.push(valorArista);
        nodo2.valoresAristas.push(valorArista);
    }
    buscarNodo(valor){
        for(let i=0;i<this.nodos.length;i++){
            if(this.nodos[i].valor==valor){
                return this.nodos[i];
            }
        }
        return null;
    }
    buscarArista(valor1,valor2){
        let nodo1=this.buscarNodo(valor1);
        let nodo2=this.buscarNodo(valor2);
        for(let i=0;i<nodo1.adyacentes.length;i++){
            if(nodo1.adyacentes[i].valor==valor2){
                return nodo1.valoresAristas[i];
            }           
        }
        return null;
    }
}   
let grafo=new Grafo();
grafo.agregarNodo("A");
grafo.agregarNodo("B");
grafo.agregarNodo("C");
grafo.agregarNodo("D");
grafo.agregarNodo("E");
grafo.agregarNodo("F");
grafo.agregarNodo("G");
grafo.agregarNodo("H");
grafo.agregarArista("A","B",200);
grafo.agregarArista("A","C",300);
grafo.agregarArista("A","D",400);
grafo.agregarArista("B","E",500);
grafo.agregarArista("B","F",500);
grafo.agregarArista("C","G",100);
grafo.agregarArista("D","H",10);

if(grafo.buscarArista("E","B")!=null){
    console.log("La arista existe");
    console.log("El valor de la arista es:"+grafo.buscarArista("B","E"));
}
else{
    console.log("La arista no existe");
}

//realizar una funcion que permita encontrar
//la distancia como suma de aristas entre dos nodos que no estan conectados directamente
*/
function insertion_sort(A) {
    var len = A.length;
    var i = 1;
    while (i < len) {                         //complejidad espacial (O)n  complejidad de tiempo (O)n
        var x = A[i];
        var j = i - 1;
        while (j >= 0 && A[j] > x) {          // complejidad de tiempo 0 si ya esta organizado y (O)n si esta al reves o se ordena aleatoriamente
            A[j + 1] = A[j];
            j = j - 1;
        }
        A[j+1] = x;
        i = i + 1;
    }
console.log("Ordenamiento de inserción \n complejidad espacial (O)n")
console.log("Complejidad tiempo (O)n si esta ordenado \n ó complejidad (O)n*(O)n si se debe ordenar todo")
   
console.log(A); 

}

function swap(A, x, y) {
    var temp = A[x];
    A[x] = A[y];
    A[y] = temp;
}

function selection_sort(A) {
    var len = A.length;
    for (var i = 0; i < len - 1; i = i + 1) {   //Complejidad espacial (O)n    complejidad de tiempo O(n)
        var j_min = i;
        for (var j = i + 1; j < len; j = j + 1) {  //complejidad de tiempop O(n)
            if (A[j] < A[j_min]) {
                j_min = j;
            } else {}
        }
        if (j_min !== i) {
            swap(A, i, j_min);
        } else {}

    }
    console.log("ordenamiento por Seleccion")
    console.log("Complejidad espacial (O)n \n complejidad de tiempo (O)n*(O)n")
    console.log(A)  
}
function bubbleShort (A){   //Complejidad espacial (O)1 
    let orden = false;
    while(!orden) {                      //complejidad de tiempop O(n)
        orden = true;
        for(var i=0; i < A.length; i++) { //complejidad de tiempop O(n)
          if(A[i] < A[i-1]) { 
            let temp = A[i];
            A[i] = A[i-1];
            A[i-1] = temp;
            orden = false;
          }
        }
      }
      console.log("ordenamiento Burbuja")
    console.log("Complejidad espacial (O)1 \n complejidad de tiempo (O)n*(O)n")
    console.log(A) 

}

let a=[];
let i=0;
for(let i=0;i<10;i++){
const random = Math.floor(Math.random()*(50 - 1 +1) ) + 1;
a.push(random);
}
console.log("lista a Ordenar")
console.log(a);

insertion_sort(a);
selection_sort(a);
bubbleShort(a);
