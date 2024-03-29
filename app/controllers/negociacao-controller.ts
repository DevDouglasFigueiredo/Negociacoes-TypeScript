import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController {

    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputvalor: HTMLInputElement;
    private negociacoes = new Negociacoes ();

    constructor (){
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputvalor = document.querySelector('#valor');
    }

    adiciona (): void{
        const negociacao = this.criaNegociacao();
        negociacao.data.setDate(12);
        this.negociacoes.adiciona(negociacao);
        this.negociacoes.lista();
        this.limparFormulario();
    }
    
    criaNegociacao():Negociacao{
        
        const exp = /-/g; 
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputvalor.value);
        return new Negociacao(date, quantidade, valor);

    }

    limparFormulario (): void{
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputvalor.value = "";
        this.inputData.focus();

    }
}