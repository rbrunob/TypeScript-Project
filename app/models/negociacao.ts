export class Negociacao {

  private _data: Date;
  private _quantidade: number;
  private _valor: number;

  constructor(data: Date, quatidade: number, valor: number) {
    this._data = data;
    this._quantidade = quatidade;
    this._valor = valor;
  }

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

  public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
    const exp = /-/g;
    const date = new Date(dataString.replace(exp, ','));
    const quantidade = parseInt(quantidadeString);
    const valor = parseFloat(valorString);
    return new Negociacao(date, quantidade, valor);
  }
}

