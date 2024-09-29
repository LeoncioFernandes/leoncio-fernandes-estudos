# SEMANA 07

## Conteúdos Estudados:

Nesta semana continuamos com os estudos de React, aprofundando com aplicações em projetos que envolvem:

- Consumo em APIs com Fetch e Axios
- Uso do Redux
- Bootstrap
- React Router DOM

## Configurações da Atividade:

- Nesta atividade foi utilizado o **React + Vite e TypeScript**.
- Foi usado o **Axios** para realização dos consumos da API.
- Também foi utilizado o pacote **json-server** para criar uma API fake de suporte às funcionalidades da aplicação. Ela está na versão **0.17.4**.
- As dependências do json-server e do axios já estão configuradas no **package.json**.
- É necessário ter o **Node.JS** instalado na sua máquina.

#### Após clonar este projeto, utilize o seginte comando para instalar todas as dependências da aplicação:

```
npm run install
```

Para o projeto é necessário abrir dois terminais: um para o json-server e outro para a aplicação.

#### Em um terminal, rode o seguinte comando para rodar o json-server:
```
npm run start:api
```

#### No outro terminal, rode o seguinte comando para rodar a aplicação:
```
npm run dev
```

## Configuração do json-server.json

O arquivo **json-server.json** contém um objeto com as configurações de Porta e Delay do json-server.

- O json-server está rodando na porta **3100** ***(Se for alterar essa porta, lembre-se de fazer a alteração nas chamadas dos métodos da API)***.
- Tem uma configuração de **10000ms de delay** para testes das configurações de Loading do projeto. Esse valor pode ser alterado sem problema algum.

Sempre que fizer qualquer alteração no json-server.json, é necessário parar o servidor e reinicià-lo.

Os dados dos objetos para teste ficam salvos no arquivo **db.json**. Todas as alterações (POST, PUT ou DELETE) irão refletir nesse arquivo, alterando definitivamente os valores dos objetos.

Se ocorrer uma perda total de dados, existe um arquivo chamado **db(recover).json** que contém o backup das informações de todos os objetos.