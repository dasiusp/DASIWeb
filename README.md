# DASIWeb
Website do Diretório Acadêmico de Sistemas de Informação (DASI)

## Código fonte
O código fonte está hospedado no GitHub e pode ser clonado através do link https://github.com/dasiusp/DASIWeb.git. A administração do repositório fica sempre a cargo do atual diretor de TI tal como sua gestão geral, manutenção, permissões e aprovação de PRs.

## Pré-requisitos
### Node
É necessário ter o Node instalado em sua máquina. Para obtê-lo, basta visitar o site oficial do Node https://nodejs.org/en/download/ e instalá-lo em sua máquina.

### Angular
A command line do Angular é necessária para emular localmente o servidor nativo de teste, fazendo com que as alterações feitas localmente e com o servidor rodando possam ser identificadas e exibidas em runtime. O pacote Angular CLI também dispõe de diversas outras funcionalidades que serão comentadas ao longo deste documento. Para se aprofundar no pacote, acesse https://angular.io/cli.

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
Após rodar o comando, o bundle gerado pode ser encontrado na pasta `dist/DASIWeb` com todos os arquivos necessários para hospedagem da aplicação.

## Comandos de deploy

### Deploy via GH Pages
Para realizar o deploy da aplicação em produção, basta rodar o comando abaixo do diretório raíz da aplicação:
```
ngh --dir=dist/DASIWeb
```
### Observações importantes
As vezes a configuração do GitHub Pages dentro da organização do DASI retorna à configuração default. Portanto alguams vezes após realizar o deploy é necessário ir a página https://github.com/dasiusp/DASIWeb/settings e na seção `GitHub Pages` definir o `custom domain` como 'https://dasiusp.com/' para manter o certificado SSL e o uso correto do domínio.
