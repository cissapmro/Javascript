
let pessoa = {
    nome: "Maurício",
    //sobrenome: "Anjos",
    idade: 45,
    social: {
        facebook: "cissa",
        instagram: {
            url: "rsr",
            seguidores: "dfs"
        }
    }
};
function pegarSobrenome({nome, sobrenome = "Barbosa", social:{instagram:{url:instagram}}}) {
    return `${nome} ${sobrenome} (Siga em ${instagram})`;
}
console.log(pegarSobrenome(pessoa));

//function pegarSobrenome(obj) {
  //  let nome = obj.nome;
 //   let sobrenome = obj.sobrenome;

 //   return `${nome} ${sobrenome}`;
//}
//console.log(pegarSobrenome(pessoa));

//DESCONSTRUINDO OBJETOS EM FUNÇÕES//

//let pessoa = {
 //   nome: "cissa",
  //  sobrenome: "Barbosa",
 //   idade: 45,
 //   social: {
  //      facebook: 'ccc',
  //      instagram: {
  //          url: '@bonieky',
  //          seguidores: 1000
  //      }
 //   },
//};

//let {nome, sobrenome, social:{facebook, instagram:{url, seguidores}} } = pessoa;
//console.log(nome, sobrenome, facebook, url, seguidores);
//let { nome, sobrenome, social:{instagram:{url, seguidores}} } = pessoa;
//let pessoa = {
  //  nome: "Cissa",
  //  sobrenome: "Barbosa",
  //  idade: 45,
  //  social: {
   ///     instagram: "mau",
    //    facebook: "nic"
   // }
//};
//let { nome, sobrenome, social:{instagram} } = pessoa;
//let {nome, sobrenome, idade} = pessoa;
//console.log(nome, sobrenome, idade);
//let pessoa = {
   // nome: "Cissa",
  //  sobrenome: "Barbosa dos Anjos",
        //social: {
       // instagram: "mau",
       // facebook: "nic"
  //  },
 //   nomeCompleto: function () {
     //   return `{$this.nome} ${this.sobrenome}`;
   // }
//};
 //  let { nome, sobrenome, idade = 30 } = pessoa;

 //  console.log(nome, sobrenome, idade);


