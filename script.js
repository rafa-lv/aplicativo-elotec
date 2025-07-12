
const lista  = [1,2,3,4,5];
let pares =[];
for(let i=0; i < lista.length; i++){
    if(lista[i]%2==0){
        pares.push(lista[i]);
    }
}

//funcoes de alta ordem

//map - oque o  mapa faz ? ele mapeia uma lista/vetor com base em uma condicao

const numeros = [1,2,3,4,5];

const pairs = numeros.map(item => item % 2==0);
console.log(pairs);

//funcoes de alta ordem em javascript
// as funcoes em  javascript elas sao consideradas cidadas de alta classe
//oque isso significa?
//uma funcao ela pode ser atribuida a uma variavel,chamar uma funcao dentro da outra,e retornar uma funcao dentro da outra
//ou ser passada como parametro para outra funcao

//const ola  = function () {
  //console.log("ola");
//}
//funcao de alta ordem
function dizerOla (func) {
    func();
    func();
}
function ola() {
    console.log("ola");
}

dizerOla(ola);

//map 

numeros = [1,2,3,4,5];
const pairs = numeros.map(item => item % 2==0);
console.log(pairs);

//como ele funciona
//ele vai verificar sua condicao para cada elemento dentro do vetor

const nomes = ["thiago","rafael"];

const verificar_rafael = nomes.map(item => item == "rafael");
console.log(verificar_rafael);

//filter () -- oque ele faz? ele filtra elementos com base em uma condicao
const numbers = [1,2,3,4,5,6,7];

const pair  = numbers.filter(item => item % 2==0);
console.log(pair);

const array  = [{nome : "rafael" , age : 30}, {nome : "thiago" , age : 50}];
for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < i ; j ++) {
        let diferenca = [];
        if(array[i].age && array[j].age){
            diferenca = array[i].age - array[j].age;
            console.log(diferenca);
        }  
    }
}
//const diferenca = array.filter(item,item2=> item / item2);
//console.log(diferenca);

//reduce () -- oque o reduce faz?ele reduz o nosso array de acordo com uma condicao
const n = [1,2,3,4,5,6,7,8,9,10];
const acumulador = 0;
 const soma = n.reduce((acumulador,valor)=> acumulador + valor,0);
console.log(soma);


