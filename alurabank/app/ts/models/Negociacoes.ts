class Negociacoes {
    
    private _negociacoes: Negociacao[] = [];

    adicona(negociacao: Negociacao) {
        this._negociacoes.push(negociacao);
    }

    paraArray(): Negociacao[] {
        return [].concat(this._negociacoes);
    }

}