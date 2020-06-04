let timer;

function rodar() {
  //  timer = setTimeout(comecar, 2000);
      timer = setTimeout(function() {
         document.querySelector('.demo').innerHTML = 'Rodou';
     }, 2000);
}
function parar() {
    clearTimeout(timer);
}
function comecar() {
    document.querySelector('.demo').innerHTML = 'Rodou';
}

//let timer;
//function iniciar(){
  //  timer = setInterval(showTime, 1000);
//};
//function parar(){
  //  clearInterval(timer);
///}
//function showTime(){
  //  let d = new Date();
    //let h = d.getHours();
    //let s = d.getSeconds();
    //let m = d.getMinutes();
    //let txt = h+':'+m+':'+s;

    //document.querySelector('.demo').innerHTML = txt;
//}

