import { validate } from "bycontract";
import { Objeto, Ferramenta } from "./Basicas.js";
import { VarinhaDeCristal, TesoiraDePrata, ChaveMestra } from "./FerramentasDemo.js";

export class ChaleiraCantante extends Objeto {
    constructor() {
        super("Chaleira_Cantante", 
              "Uma chaleira mágica que parece querer cantar algo importante.", 
              "A chaleira cantou uma melodia e revelou um bilhete escondido.");
    }

    usar(ferramenta) {
        validate(ferramenta, Ferramenta);
        // A chaleira pode ser ativada com qualquer ferramenta
        this.acaoOk = true;
        return true;
    }
}
// ---------------------------------------------
export class RegadorMagico extends Objeto {
    constructor() {
        super("Regador_Magico", 
              "Um regador decorado com runas que nunca fica vazio.", 
              "Você regou as plantas mágicas e uma delas cresceu revelando um pergaminho.");
    }

    usar(ferramenta) {
        validate(ferramenta, Ferramenta);
        // O regador pode ser usado sem ferramenta específica
        this.acaoOk = true;
        return true;
    }
}
// ---------------------------------------------
export class LivroDeFeiticos extends Objeto {
    constructor() {
        super("Livro_de_Feiticos", 
              "Um grande livro antigo com símbolos brilhantes na capa.", 
              "As páginas do livro brilham revelando uma mensagem secreta.");
    }

    usar(ferramenta) {
        validate(ferramenta, Ferramenta);
        if (ferramenta instanceof VarinhaDeCristal) {
            this.acaoOk = true;
            return true;
        }
        return false;
    }
}
// ---------------------------------------------
export class TravesseiroDePenas extends Objeto {
    constructor() {
        super("Travesseiro_de_Penas", 
              "Um travesseiro macio que parece conter algo além de penas comuns.", 
              "Você cortou o travesseiro e encontrou pó de estrela brilhante entre as penas.");
    }

    usar(ferramenta) {
        validate(ferramenta, Ferramenta);
        if (ferramenta instanceof TesoiraDePrata) {
            this.acaoOk = true;
            return true;
        }
        return false;
    }
}
// ---------------------------------------------
export class CaldeiraFumegante extends Objeto {
    constructor() {
        super("Caldeira_Fumegante", 
              "Um caldeirão de ferro preto que emite uma fumaça colorida.", 
              "A caldeira borbulha intensamente formando imagens na fumaça.");
    }

    usar(ferramenta) {
        validate(ferramenta, Ferramenta);
        // A caldeira pode ser usada com qualquer ferramenta uma vez que o jogador tenha o pó de estrela
        this.acaoOk = true;
        return true;
    }
}
// ---------------------------------------------
export class BauDeMadeira extends Objeto {
    constructor() {
        super("Bau_de_Madeira", 
              "Um baú antigo de madeira entalhada com símbolos mágicos.", 
              "O baú está aberto revelando vários compartimentos. O terceiro contém um diamante brilhante!");
    }

    usar(ferramenta) {
        validate(ferramenta, Ferramenta);
        if (ferramenta instanceof ChaveMestra) {
            this.acaoOk = true;
            return true;
        }
        return false;
    }
}
