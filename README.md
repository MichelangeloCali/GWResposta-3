
# Layout do projeto
![resposta3](https://user-images.githubusercontent.com/90471567/164090328-31d026a3-9ba8-4dbb-9a48-43f4bc1b2eba.jpg)

# GWResposta-3
Resposta da 3º questão do teste da GW.

# Descrição
A questão 3º pedia para "criar uma página com um botão, que ao clicar neste botão, popule uma caixa de seleção através de uma requisição Ajax a um arquivo JSON.". Dessa forma, criei uma interface que mostra as linguagens, frameworks e demais tecnologias que pretendo aprender tentando resolver o que a questão pedia.
Utilizando JQuery, fiz uma requisição AJAX ao meu arquivo .JSON com as tecnologias mencionadas. No arquivo ``script.js`` selecionei o botão e instanciei o objeto criado no arquivo JSON. A ``função sucesso`` é ocorrida caso os parametros do objeto JSON seja bem sucedida. Nesse caso, a função ``.each`` percorre todo o Objeto, preenchendo o Array "items" com suas propriedades (chave-valor), imprimindo no Body do HTML, na ``div`` selecionada com ``ID="box"`` a tag ``select`` com as tags ``option``. Caso a ``função sucesso`` não ocorra, o código executará a função ``statusCOde``, acuesando erro com alert criado: ``Arquivo não encontrado. Tente novamente!``
![resposta33](https://user-images.githubusercontent.com/90471567/164092368-9918054c-eecc-4452-b7cb-2838ecc77448.jpg)


# Como rodar o programa
Basta abrir o arquivo ``index.html`` no navegador padrão e clicar no botão ``Clique Aqui``.

# Ferramentas utilizadas
Javascript, JQuery, Ajax, JSON e VSCode IDE.

# Desenvolvedor
LinkedIn:
https://www.linkedin.com/in/michelangelocali/

E-mail:
michelangelocali@hotmail.com
