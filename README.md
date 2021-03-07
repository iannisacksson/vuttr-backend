# VUTTR Backend

Back-end desenvolvido para um desafio para cadastrar ferramentas muito úteis para lembrar (Very useful tools to remember - VUTTR), foi desenvolvido com Node, Typescript, Express, Postgres e JWT.

## Começando

### Pré-requisitos

Para executar este projeto em desenvolvimento, você precisará ter um ambiente básico com o Node instalado (Estou desenvolvendo ele na versão v14.16.0). Para usar o banco de dados, você precisará ter o Postgres instalado e em execução na sua máquina.

Na raiz do projeto é possível encontrar **.env.example** com as variáveis ambientes utilizadas no projeto. É preciso também realizar um modificação no **ormormconfig.json**, basta cópia os dados da **ormconfig.example.json** para ter o funcionanamento correto.

### Instalando

#### Clonando o Repositório

```
$ git clone https://github.com/iannisacksson/vuttr-backend.git

$ cd vuttr-backend
```

#### Instalando dependências

```
$ yarn
```

_ou_

```
$ npm install
```

#### Rodando Migrações

Depois de adicionado as variáveis de ambiente para para conectar ao banco, postgres em execução é preciso rodar as migrations. Para isso basta utilizar um dos comandos abaixo:

```
$ yarn typeorm migration:run
```

_ou_

```
$ npx typeorm migration:run
```

#### Executando o projeto em localhost

Com todas as dependências instaladas, o banco de dados em execução, migrations rodadas e o ambiente configurado corretamente, agora você pode executar o back-end:

```
$ yarn dev:server
```

_ou_

```
$ npm run dev:server
```

Quando estiver em execução no console onde está rodando o projeto irá aparecer a seguinte mensagem "🚀️ Server started on port 3000!"
