# Deck of Random Cards

É utilizada a API [Rick and Morthy](https://rickandmortyapi.com) para listar as cartas na tela.

1. Na rota principal `/` é necessário digitar um nome de usuário para utilizar a aplicação

2. Na rota `/cards` são listadas as 5 cartas iniciais e o nome de usuário aparece no canto superior direito, além de 2 botões:

- O botão `Puxar` permite puxar uma nova carta aleatoriamente. Ele pode ser utilizado no máximo 3 vezes
- O botão `Embaralhar` permite embaralhar a ordem das cartas visualizadas

## Clonando o projeto

Para clonar o repositório e instalar as dependencias execute os seguintes comandos:

- `git clone git@github.com:fndcaique/deck-of-random-cards.git` no diretório de sua preferência
- `cd deck-of-random-cards`
- `npm install` ou instale com o gerenciador de pacotes node de sua preferência

## Scripts disponíveis

No diretório do projeto você pode executar:

### `npm start`

Executa o aplicativo no modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo no navegador.

A página será recarregada se você fizer edições.\

### `npm test`

Inicia o executor de teste no modo de exibição interativa.\
Consulte a seção sobre [execução de testes](https://facebook.github.io/create-react-app/docs/running-tests) para obter mais informações.

### `npm run build`

Compila o aplicativo para produção na pasta `build`.\
Ele agrupa corretamente o React no modo de produção e otimiza a compilação para o melhor desempenho.

A compilação é reduzida e os nomes dos arquivos incluem os hashes.\
Seu aplicativo está pronto para ser implantado!

Consulte a seção sobre [implantação](https://facebook.github.io/create-react-app/docs/deployment) para obter mais informações.

Após a pasta de compilação ficar pronta para ser implantada.
Você pode servi-lo com um servidor estático:

- `npm install -g serve`
- `serve -s build`

## Aprender mais

Você pode aprender mais na [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

Para aprender o React, confira a [React documentation](https://reactjs.org/).
