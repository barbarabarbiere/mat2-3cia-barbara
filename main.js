const botoes= document.querySelectorAll(".botao");
const textos=document.querySelectorAll("aba-conteudo");

for(let i=0i <botoes.length;i++){  
  botoes[i].onclick = function(){

    for(let j=0;j<botoes.length;j++){
         botoes[j].classList.remove("ativo");
 textos[j].classList.remove("ativo");
    }

  botoes[i].classList.add("ativo");
  textos[i].classList.add("ativo");
   }
  }

  const contadores = document.querySelectorAll(".contador");
  const tempoObjetivo =new Date("2024-10-05t00:00:00");

  contadores[0].textContent = tempoObjetivo1;