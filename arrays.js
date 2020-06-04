let lista = [
    {id:1, nome: "Cissa", cargo: "Programadora"},
    {id:2, nome: "Maurício", cargo: "Técnico"}
];

let pessoa = lista.findIndex(function(item){
    return (item.nome == "Cissa")? true : false;
});

let res = pessoa;
console.log(res);


//let lista = [2, 4, 6];
//let lista2 = [];
//lista2 = lista.some(function(item){
   // return (item > 20)? true : false;
//});
//let res = lista2;
//console.log(res);

//lista2 = lista.filter(function(item){
  //  if(item < 4){
   //     return true;
  //  }else {
  //      return false;
  //  }
//});

//let res = lista2;
//console.log(res);

//let lista = [2, 4, 8];
//let lista2 = [];
//lista2 = lista.map(function(item){
//    return item * 2;
//});
//let res = lista2;
//console.log(res);

//for(let i in lista){
   // lista2.push(lista[i] * 2);
//}

//let lista = ['ovo', 'leite', 'farinha', 'trigo'];
//let lista2 = ['açucar', 'oleo'];
//let res = lista.concat(lista2);

//console.log(res);
//console.log(lista);

//lista.push('ovos');
//let res = lista;
//console.log(res);

//lista.push('chocolate');

//let res = lista;

//console.log(res);

//toString();
//indexOf('Leite');
//shift(); //remove o primeiro item
//pop(); remove o último item;
//push('ovo'); adiciona item
//join('-'); //transforma em string
//lista[0] = 'ovos'; //altera o item
    //remover o item
//sort() //ordem alfabética
//reverse() //; ordem reversa
//splice(1, 1); // remove o item
//concat(); junta o array
//map();
//filter();
//every() //pega todos do array e compara
//some() //alguns
//find() //procura os campos
findIndex() //procura o indice