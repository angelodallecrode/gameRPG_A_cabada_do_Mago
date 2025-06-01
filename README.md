# Jogo Cabana do Mago

Este é um jogo de aventura baseado em texto onde o jogador explora a cabana de um mago para encontrar um diamante escondido. Explore os cômodos, encontre pistas e ferramentas para desvendar o mistério!

## Como Jogar

Para iniciar o jogo, certifique-se de ter o Node.js instalado.

1. Clone este repositório.
2. Navegue até o diretório do projeto pelo terminal.
3. Execute o comando: `node index.js`

### Comandos Básicos

O jogo é controlado através de comandos de texto. Aqui estão os comandos básicos:

*   `pega <nome_da_ferramenta>`: Pega uma ferramenta da sala atual e a guarda na sua mochila.
    *   Exemplo: `pega Varinha_de_Cristal`
*   `inventario`: Mostra as ferramentas que você está carregando na mochila.
*   `usa <nome_da_ferramenta> <nome_do_objeto>`: Usa uma ferramenta em um objeto na sala atual.
    *   Exemplo: `usa Varinha_de_Cristal Livro_de_Feiticos`
*   `sai <nome_da_sala>`: Move o jogador para uma sala conectada.
    *   Exemplo: `sai Jardim_de_Ervas`
*   `fim`: Encerra o jogo.

## Arquivos do Projeto

*   `index.js`: Ponto de entrada do jogo. Cria uma instância do jogo e o inicia.
*   `Jogo.js`: Define a classe principal `JogoCabanaMago` que herda de `Engine`. Configura o cenário do jogo, as salas e a condição de vitória.
*   `Basicas.js`: Contém as classes base para o funcionamento do jogo, como `Ferramenta` (Tool), `Mochila` (Backpack), `Objeto` (Object), `Sala` (Room) e `Engine` (Game Engine).
*   `FerramentasDemo.js`: Define as ferramentas específicas que podem ser encontradas e usadas no jogo (ex: `VarinhaDeCristal`, `TesouraDePrata`).
*   `Objetos.js`: Define os objetos interativos encontrados nas salas do jogo (ex: `ChaleiraCantante`, `LivroDeFeiticos`).
*   `SalasDemo.js`: Define as salas específicas do jogo (ex: `SalaDeEstar`, `JardimDeErvas`), seus objetos, ferramentas e a lógica de interação entre eles.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests com melhorias, novas salas, objetos ou mecânicas de jogo.
