## **README.md**

### **Spotify**

**Sobre o projeto**

Este projeto é uma recriação do Spotify Web, desenvolvida ao longo da Imersão Dev Front-end da Alura. O projeto possui uma interface simples e filtragem de pesquisa vinculada a uma falsa API criada. O projeto foi desenvolvido com HTML, CSS e Javascript e React, juntamente com JSON-Server.

**Funcionalidades**

- Barra de pesquisa funcional: Filtra os artistas e playlists registrados vinculados a pesquisa.
  
**Estrutura do projeto**

1. Pasta public/: Pasta para armazenar os arquivos pré-definidos do React e a favicon do projeto.
2. Pasta src/: Pasta para armazenar as subpastas "assets" e "components" e demais arquivos.
3. Subpasta components/: Subpasta que armazena as subpastas "Footer", "Main" e "Sidebar" para componentização. (Cada subpasta possui seus devidos arquivos JS, contendo a estrutura da aplicação, e arquivos CSS, contendo a estilização da aplicação).
4. script.js: Arquivo que contém a parte lógica feita para a filtragem de pesquisa.
5. App.js: Arquivo principal juntando todos os componentes.
6. App.css: Arquivo de estilização dedicado para reset, variáveis de CSS, estilização do body e media-queries.
7. App.test.js, index.css, index.js, reportWebVitals.js, setupTests.js, package-lock.json, package.json: Arquivos que acompanham a aplicação React automaticamente.
8. Subpasta assets/: Subpasta que armazena outras subpastas "icons" e "playlists".
9. Subpasta icons/: Subpasta que armazena os ícones utilizados no projeto.
10. Subpasta playlists/: Subpasta que armazena as imagens das playlists mostradas na parte principal do site.
11. artists.json: Arquivo dedicado a API falsa.

**Pré-requisitos**

- Um navegador moderno como Google Chrome, Mozilla Firefox ou Microsoft Edge.
- Uma IDE como o VSCode.
- Acesso a todos arquivos corretamente vinculados ao projeto.
- Ter instalado o NodeJS e NPM.
- Versão JSON-Server requisitada: 0.17.0 ou 0.17.4.
  
**Como usar**
1. Clone o repositório ou copie os arquivos para o seu computador.
2. Certifique-se de que todos os arquivos estejam na mesma pasta.
3. Baixe o NodeJS e o NPM pelo terminal do seu computador.
4. Instale o JSON-Server na versão aquisitada.
5. No terminal da IDE, inicie o JSON-Server na porta 5000 com o comando "json-server --watch artists.json --port 5000".
6. Abra outro terminal para iniciar a aplicação React com o comando "npm start".
7. Explore o projeto.

#Front-end #WebDev #Imersão-Front-end-Alura #Alura
