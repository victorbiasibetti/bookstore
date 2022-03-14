
# Começando

## Dependências
Este projeto possui um backend fake utilizando a lib [JSON-Server](https://www.npmjs.com/package/json-server) , para instalar essa lib rode o comando:

```bash
npm install -g json-server
```
Após a instalação, instale as depedências gerais usando o gerenciador de pacotes da sua escolha (eu utilizo Yarn).
```bash
yarn 
```

## Rodando o projeto

Para rodar o projeto execure em uma aba do terminal o Json-Server

```bash
json-server --watch mock/db.json -p 3004
```
E na outra aba do terminal, o projeto
```bash
yarn dev
```


