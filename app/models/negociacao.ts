export class Negociacao {
  // VALORES CRIADOS COM TIPO = 'private', SÃO VALORES PRIVADOS, OU SEJA, NÃO PODEM SER ALTERADOS DEPOIS DE CRIADOS.
  // QUANDO NENHUM MODIFICADOR DE ACESSO É ATRIBUIDO, O TYPESCRIPT ENTENDE AUTOMATICAMENTE COMO TIPO = 'PUBLIC'
  private _data: Date;
  private _quantidade: number;
  private _valor: number;

  // RECEBE OS PARAMETROS DOS VALORES ATRIBUIDOS PELO 'NEW NEGOCIAÇÃO'.
  // 'THIS' => ATRIUBUI O VALOR RECEBIDO DOS PARAMENTROS DO CONSTRUTOR AO VALORES PRIVADOS DEFINIDOS.
  constructor(data: Date, quatidade: number, valor: number) {
    this._data = data;
    this._quantidade = quatidade;
    this._valor = valor;
  }

  // GETTER CRIADO PARA LEITURA INDIVUDUAL DOS VALORES PRIVADOS.
  // NÃO É POSSÍVEL ATRIBUIR NADA A UM 'GETTER', SERVE SOMENTE PARA LEITURA.
  // 'GET' => FUNÇÃO CRIADA PARA RETORNAR UM VALOR.
  // GETTER SÃO ACESSADOS COMO SE FOSSEM UMA PROPRIEDADE => 'CONSOLE.LOG(NEGOCIACAO.DATA)'.
  get data(): Date {
    return this._data;
  }

  get quantidade(): number {
    return this._quantidade;
  }

  get valor(): number {
    return this._valor;
  }

  get volume(): number {
    return this._quantidade * this._valor;
  }
}

