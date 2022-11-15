import { Negociacao } from "./negociacao.js";

export class Negociacoes {
   private negociacoes: Array<Negociacao> = []; 

   //RECEBE A NEGOCIÇÃO E ADICIONA NO ARRAY NEGOCIÇÕES
   //RECEBE COMO PARAMETRO 'negociacao' DO TIPO 'Negociacao', POIS É O ÚNICO TIPO DE OBEJETO QUE A LISTA DE NEGOCIÇÕES ACEITA
   //'push' -> FUNÇÃO QUE LIGA O ARRAY AOS OBJETOS QUE DEVE RECEBER   
   adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
   }
   
   // RETONAR A LISTA DE NEGOCIAÇÕES E TUDO O QUE FOI ADICIONADO NELA
   // 'ReadonlyArray' -> SOMENTE LEITURA, OU SEJA, IMPOSSÍVEL USAR METODOS QUE ALTEREM O ARRAY
   lista(): ReadonlyArray<Negociacao> {
    return this.negociacoes;
   }

}