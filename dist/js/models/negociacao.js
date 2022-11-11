export class Negociacao {
    // RECEBE OS PARAMETROS DOS VALORES ATRIBUIDOS PELO 'NEW NEGOCIAÇÃO'.
    // 'THIS' => ATRIUBUI O VALOR RECEBIDO DOS PARAMENTROS DO CONSTRUTOR AO VALORES PRIVADOS DEFINIDOS.
    constructor(data, quatidade, valor) {
        this._data = data;
        this._quantidade = quatidade;
        this._valor = valor;
    }
    // GETTER CRIADO PARA LEITURA INDIVUDUAL DOS VALORES PRIVADOS.
    // NÃO É POSSÍVEL ATRIBUIR NADA A UM 'GETTER', SERVE SOMENTE PARA LEITURA.
    // 'GET' => FUNÇÃO CRIADA PARA RETORNAR UM VALOR.
    // GETTER SÃO ACESSADOS COMO SE FOSSEM UMA PROPRIEDADE => 'CONSOLE.LOG(NEGOCIACAO.DATA)'.
    get data() {
        return this._data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
}
