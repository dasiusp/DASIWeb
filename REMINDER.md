## Comandos pré-deploy
### Build do projeto
ng build --prod --base-href https://dasiusp.com/

### Deploy via GH Pages
ngh --dir=dist/DASIWeb

As vezes a configuração do GitHub Pages dentro da organização do DASI retorna à configuração default. Portanto alguams vezes após realizar o deploy é necessário ir a página https://github.com/dasiusp/DASIWeb/settings e na seção GitHub Pages definir o 'custom domain' como 'https://dasiusp.com/' para manter o certificado SSL e o uso correto do domínio.
