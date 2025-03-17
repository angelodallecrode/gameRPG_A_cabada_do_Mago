import { validate } from "bycontract";
import { Sala, Engine, Ferramenta, Objeto } from "./Basicas.js";
import { VarinhaDeCristal, TesoiraDePrata, ChaveMestra } from "./FerramentasDemo.js";
import { ChaleiraCantante, RegadorMagico, LivroDeFeiticos, TravesseiroDePenas, CaldeiraFumegante, BauDeMadeira } from "./Objetos.js";


export class SalaDeEstar extends Sala {
    constructor(engine) {
        validate(engine, Engine);
        super("Sala_de_Estar", engine);
        let chaleira = new ChaleiraCantante();
        this.objetos.set(chaleira.nome, chaleira);
    }

    usa(ferramenta, objeto) {
        validate(arguments, ["String", "String"]);
        if (!this.engine.mochila.tem(ferramenta)) {
            return false;
        }
        if (!this.objetos.has(objeto)) {
            return false;
        }
        let chaleira = this.objetos.get(objeto);
        let usou = chaleira.usar(this.engine.mochila.pega(ferramenta));
        
        if (usou) {
            this.engine.adicionarMensagem("A chaleira canta e você encontra um bilhete que diz: 'Para encontrar meu tesouro, primeiro procure o conhecimento onde as plantas crescem.'");
        }
        
        return usou;
    }
}
// ---------------------------------------------
export class JardimDeErvas extends Sala {
    constructor(engine) {
        validate(engine, Engine);
        super("Jardim_de_Ervas", engine);
        let regador = new RegadorMagico();
        this.objetos.set(regador.nome, regador);
    }

    usa(ferramenta, objeto) {
        validate(arguments, ["String", "String"]);
        if (!this.engine.mochila.tem(ferramenta)) {
            return false;
        }
        if (!this.objetos.has(objeto)) {
            return false;
        }
        let regador = this.objetos.get(objeto);
        let usou = regador.usar(this.engine.mochila.pega(ferramenta));
        
        if (usou) {
            this.engine.adicionarMensagem("Ao regar as plantas, uma delas cresce e revela um pergaminho que diz: 'As páginas do conhecimento guardam o próximo passo.'");
        }
        
        return usou;
    }
}
// ---------------------------------------------
export class SalaDeEstudos extends Sala {
    constructor(engine) {
        validate(engine, Engine);
        super("Sala_de_Estudos", engine);
        let livro = new LivroDeFeiticos();
        this.objetos.set(livro.nome, livro);
        let varinha = new VarinhaDeCristal();
        this.ferramentas.set(varinha.nome, varinha);
    }

    usa(ferramenta, objeto) {
        validate(arguments, ["String", "String"]);
        if (!this.engine.mochila.tem(ferramenta)) {
            return false;
        }
        if (!this.objetos.has(objeto)) {
            return false;
        }
        let livro = this.objetos.get(objeto);
        let usou = livro.usar(this.engine.mochila.pega(ferramenta));
        
        if (usou && ferramenta === "Varinha_de_Cristal") {
            this.engine.adicionarMensagem("Ao iluminar o livro com a varinha, uma página brilha revelando a mensagem: 'No lugar onde se dorme, os sonhos revelam segredos.'");
        }
        
        return usou;
    }
}
// ---------------------------------------------
export class QuartoDoMago extends Sala {
    constructor(engine) {
        validate(engine, Engine);
        super("Quarto_do_Mago", engine);
        let travesseiro = new TravesseiroDePenas();
        this.objetos.set(travesseiro.nome, travesseiro);
        let tesoura = new TesoiraDePrata();
        this.ferramentas.set(tesoura.nome, tesoura);
    }

    usa(ferramenta, objeto) {
        validate(arguments, ["String", "String"]);
        if (!this.engine.mochila.tem(ferramenta)) {
            return false;
        }
        if (!this.objetos.has(objeto)) {
            return false;
        }
        let travesseiro = this.objetos.get(objeto);
        let usou = travesseiro.usar(this.engine.mochila.pega(ferramenta));
        
        if (usou && ferramenta === "Tesoura_de_Prata") {
            this.engine.adicionarMensagem("Ao cortar o travesseiro, você encontra um pó de estrela e uma nota: 'Este ingrediente deve ser fervido três vezes.'");
            this.engine.mochila.adicionar("Po_de_Estrela");
        }
        
        return usou;
    }
}
// ---------------------------------------------
export class CozinhaEncantada extends Sala {
    constructor(engine) {
        validate(engine, Engine);
        super("Cozinha_Encantada", engine);
        let caldeira = new CaldeiraFumegante();
        this.objetos.set(caldeira.nome, caldeira);
    }

    usa(ferramenta, objeto) {
        validate(arguments, ["String", "String"]);
        if (!this.engine.mochila.tem(ferramenta)) {
            return false;
        }
        if (!this.objetos.has(objeto)) {
            return false;
        }
        let caldeira = this.objetos.get(objeto);
        let usou = caldeira.usar(this.engine.mochila.pega(ferramenta));
        
        if (this.engine.mochila.tem("Po_de_Estrela") && objeto === "Caldeira_Fumegante") {
            this.engine.adicionarMensagem("Após ferver o pó de estrela três vezes, o líquido forma bolhas que mostram a imagem de um baú no porão.");
            this.engine.mochila.remover("Po_de_Estrela");
            this.engine.mochila.adicionar("Localizacao_do_Bau");
        }
        
        return usou;
    }
}
// ---------------------------------------------
export class Porao extends Sala {
    constructor(engine) {
        validate(engine, Engine);
        super("Porao", engine);
        let bau = new BauDeMadeira();
        this.objetos.set(bau.nome, bau);
        let chaveMestra = new ChaveMestra();
        this.ferramentas.set(chaveMestra.nome, chaveMestra);
    }

    usa(ferramenta, objeto) {
        validate(arguments, ["String", "String"]);
        if (!this.engine.mochila.tem(ferramenta)) {
            return false;
        }
        if (!this.objetos.has(objeto)) {
            return false;
        }
        let bau = this.objetos.get(objeto);
        let usou = bau.usar(this.engine.mochila.pega(ferramenta));
        
        if (usou && ferramenta === "Chave_Mestra" && this.engine.mochila.tem("Localizacao_do_Bau")) {
            this.engine.adicionarMensagem("Você abre o baú com a chave mestra e, contando três compartimentos para baixo, encontra um diamante escondido em um compartimento falso!");
            this.engine.indicaFimDeJogo();
        }
        
        return usou;
    }
}
// ---------------------------------------------