//com arrays//
//let num = [1,2,3,4];
//let outros = [...num,5,6,7,8];
//console.log(outros);
//OBJETOS//
//let dados = {
 //   nome: "cissa",
 //   sobrenome: "anjos",
 //   email: "cissa.pmro@gmail.com"
//}
//let outros = {
  //  ...dados,
//    tel: "xxxx",
//    rg: "123"
//}
//console.log(outros);

//OPERADOR SPREAD EM FUNÇOES
function adicionar(info){
    let novasInfo = {
    ...info,
        status: 0,
        token: '123'
    };
    return novasInfo;
}
console.log(adicionar({nome: "Cissa", sobrenome: "Barbosa"}));






//let info = {
 //   nome: "cissa",
 //   sobrenome: "Anjos",
  //      idade: 45
//}
//let novaInfo = {
  //  ...info,
  //  cidade: "campina grande",
 //   estado: "rj"
//}
//console.log(novaInfo);