let ListaAlunos = ['Maicon', 'Emanuella', 'Mariana', 'José', 'Maria', 'Hugo']

let contador = 0;

while (contador < ListaAlunos.length){ 

  if (contador == 0){ 
               console.log(contador + " - ZERO - "  + ListaAlunos[contador])
        }else if (contador % 2 != 0 ){
               console.log (`${contador} - IMPAR - ${ListaAlunos[contador]}`)
       }else  {
        console.log (`${contador} - PAR -  ${ListaAlunos[contador]}`)
      }
  contador++ 

}