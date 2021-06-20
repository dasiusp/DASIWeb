# DASIWeb
Website do Diretório Acadêmico de Sistemas de Informação (DASI)

## Código fonte
O código fonte está hospedado no GitHub e pode ser clonado através do link https://github.com/dasiusp/DASIWeb.git. A administração do repositório fica sempre a cargo do atual diretor de TI tal como sua gestão geral, manutenção, permissões e aprovação de PRs.

## Pré-requisitos
### Node
É necessário ter o Node instalado em sua máquina. Para obtê-lo, basta visitar o site oficial do Node https://nodejs.org/en/download/ e instalá-lo em sua máquina.

### Angular
A command line do Angular é necessária para rodar localmente o servidor nativo de teste, fazendo com que as alterações feitas no código enquanto o servidor roda possam ser identificadas e exibidas em runtime. O pacote Angular CLI também dispõe de diversas outras funcionalidades que serão comentadas ao longo deste documento. Para se aprofundar no pacote, acesse https://angular.io/cli.

Com o Node devidamente instalado, certifique-se de instalar a command line (CLI) do Angular utilizando o `Node Package Manager (npm)`. Basta rodar o comando abaixo:
```
npm install -g @angular/cli
```

### Instalação dos pacotes
Com o código fonte devidamente clonado em sua máquina, acesse o diretório raíz da aplicação (por exemplo: `C:\Projetos\DASIWeb`) e rode o comando abaixo:
```
npm install
```

## Comandos pré-deploy
### Build do projeto
O comando de `build` do projeto realiza a transpilação do código fonte para um bundle de arquivos minificados (JS, CSS e HTML). É este bundle gerado pelo comando que é capaz de ser disponibilizado na pasta base de qualquer host escolhido, bastando definir na execução do comando o domínio personalizado como argumento (caso haja) para que o bundle tenha suas configurações corretas com relação ao domínio em que a aplicação está hospedada. De dentro do diretório raíz da aplicação, rode o comando abaixo para gerar o bundle do projeto:
```
ng build --prod --base-href https://dasiusp.com/
```
Após rodar o comando, o bundle gerado pode ser encontrado na pasta `dist/DASIWeb` com todos os arquivos necessários para hospedagem da aplicação. Caso o processo acuse algum tipo de erro que impeça que o build seja completo, corrija os erros indicados pelo terminal de saída da aplicação e rode o build novamente.

## Deploy
### Deploy via GH Pages
O deploy do projeto é feito automaticamente através de um processo de `Continuous Delivery` cujo gatilho para disparar o início do processo é a aprovação de um `pull requests (PRs)`. Para abrir um PR, é necessário ter noção dos conceitos básicos de versionamento de código e idealmente conhecer os conceitos de GitFlow para que a criação e manutenção das branchs envolvidas no processo sejam coerentes e coesas de acordo com o contexto da mudança em questão. Após realizar a mudança na branch em questão, ao efetuar o `push` das mudanças para o repositório oficialmente, basta entrar no próprio site do GitHub na página do repo https://github.com/dasiusp/DASIWeb que a opção de criar o PR a partir da branch recém publicada no repo estará disponível assim que entrar na página. Após criar o PR, basta um diretor que tenha permissão no diretório para tal ação aprovar o PR que a Action do GitHub será ativada e o processo de deploy será iniciado.

### Observações importantes
As vezes a configuração do GitHub Pages dentro da organização do DASI retorna à sua configuração default com relação ao domínio que o mesmo aponta. Portanto algumas vezes após realizar o deploy é necessário ir à página https://github.com/dasiusp/DASIWeb/settings e na seção `GitHub Pages` definir o `custom domain` como 'https://dasiusp.com/' para manter o certificado SSL e o uso correto do domínio.
