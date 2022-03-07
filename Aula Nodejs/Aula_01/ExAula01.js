// - Usar conceitos que não foram vistos em aula
// - if, % etc
// - Números primos são aqueles divisíveis apenas por 1 e por eles mesmos


function numeroPrimo(){

  
    var n = 0;  //numero a ser verificado
    var count = 0; //auxiliar contador
    var i = 0; //utilizado no for
    
    n = 3;
      
      for(i=1;i <= n; i++){  //define que i começa em 1,enquanto i for menor ou igual a n ele entra dentro do laço de repeticão e incrementa o i
        if(n%i == 0){ // se o resto da divisão foi igual a zero
          count = count +1
        }
    
      }
    
      if(count == 2){ // se o numero de divisões for igual a 2 ele é primo
        Logger.log(`O número ${n} é primo`)  
      }
    
      else{ // caso contrário não é primo
      Logger.log(`O número ${n} não é primo`)   
      }
    
     // Logger.log(`O número ${numero} é primo`) 
      //Logger.log(`O número ${numero} não é primo`) 
    
    }