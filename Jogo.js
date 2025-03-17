import {Engine} from "./Basicas.js"
import { CozinhaEncantada, JardimDeErvas, Porao, QuartoDoMago, SalaDeEstar, SalaDeEstudos } from "./SalasDemo.js";

export class JogoCabanaMago extends Engine {
    constructor() {
        super();
    }

    criaCenario() {
        // Define as salas que compõem o mapa
        let salaEstar = new SalaDeEstar(this);
        let jardim = new JardimDeErvas(this);
        let salaEstudos = new SalaDeEstudos(this);
        let quarto = new QuartoDoMago(this);
        let cozinha = new CozinhaEncantada(this);
        let porao = new Porao(this);

        // Encadeia as salas através das portas
        // A sala de estar é o ponto central que conecta à maioria das salas
        salaEstar.portas.set(jardim.nome, jardim);
        salaEstar.portas.set(salaEstudos.nome, salaEstudos);
        salaEstar.portas.set(quarto.nome, quarto);
        salaEstar.portas.set(cozinha.nome, cozinha);
        
        // Conexões de volta para a sala de estar
        jardim.portas.set(salaEstar.nome, salaEstar);
        salaEstudos.portas.set(salaEstar.nome, salaEstar);
        quarto.portas.set(salaEstar.nome, salaEstar);
        cozinha.portas.set(salaEstar.nome, salaEstar);
        
        // O porão é acessível apenas pela cozinha
        cozinha.portas.set(porao.nome, porao);
        porao.portas.set(cozinha.nome, cozinha);
        
        // Conexões adicionais para tornar a navegação mais interessante
        quarto.portas.set(salaEstudos.nome, salaEstudos);
        salaEstudos.portas.set(quarto.nome, quarto);
        jardim.portas.set(cozinha.nome, cozinha);
        cozinha.portas.set(jardim.nome, jardim);

        // Define a sala inicial
        this.salaCorrente = salaEstar;
        
        // Adiciona uma mensagem de boas-vindas
        this.adicionarMensagem("Bem-vindo à Cabana do Mago Distraído! O mago Rodolfo escondeu seu diamante precioso em algum lugar antes de sair em viagem. Explore a cabana, encontre pistas e ferramentas para descobrir onde está o diamante.");
    }
    
    // Método opcional para adicionar mensagens ao jogo
    adicionarMensagem(mensagem) {
        console.log(mensagem);
    }
    
    // Método para indicar o fim do jogo com uma mensagem de vitória
    indicaFimDeJogo() {
        console.log("PARABÉNS! Você encontrou o diamante escondido do mago Rodolfo!");
        console.log("O mago ficará muito feliz quando voltar de viagem.");
        super.indicaFimDeJogo();
    }
}