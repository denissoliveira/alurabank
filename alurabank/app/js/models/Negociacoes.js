class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }
    adicona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    paraArray() {
        return [].concat(this._negociacoes);
    }
}
