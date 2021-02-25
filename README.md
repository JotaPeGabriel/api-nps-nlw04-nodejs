> 💡 Tecnologias utilizadas no projeto - :

<code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"></code>
<code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"></code>
<code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png"></code>
<code><img height="20" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1024px-Visual_Studio_Code_1.35_icon.svg.png"></code>
<code><img height="20" src="https://pbs.twimg.com/profile_images/1091817101738864640/eQpWLr2c_400x400.jpg"></code>
<code><img height="20" src="https://avatars3.githubusercontent.com/u/53234021?s=400&v=4"></code>

<div align="center">
    <img alt="NPS" title="NPS" height="20" src="https://blog.kmaleon.com.br/conteudo/wp-content/uploads/2019/12/nps.fw_.png" />
<h3>Api NPS - NextLevelWeek 4.0</h3>
<img height="300"  src="https://www.agenciasole.com.br/blog/wp-content/uploads/2018/01/65.png">
</div>
<h3 align="left">
    <img width="300px" src="https://i.imgur.com/JkVMEgs.png">
    <br><br>
    <p align="center">
      <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-comandos-para-começar">Comandos para começar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-testes">Testes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-links-do-projeto">Links</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-o-que-e-next-level-week-?">O que é Next Level Week?</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-license">Licença</a>
  </p>
</h3>


## 🔖 Sobre

O <strong>NPS-API</strong> é uma API Restful para Net Promoter Score.

Aplicação web construída na trilha <strong>NodeJS</strong> da <strong>Next Level Week</strong> distribuída pela [Rocketseat](https://rocketseat.com.br/).

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [YARN](https://yarnpkg.com/)
- [TypeORM](https://typeorm.io/)

## ⤵ Comandos para começar

Essas instruções vão te levar a uma cópia do projeto rodando em sua máquina local para propósitos de testes e desenvolvimento. Foram implementados testes de integração.

Obs: Banco de dados é o Sqlite3, caso queira alterar, configure o arquivo ormconfig.json para seu banco de dados específico (Campo "database" é o nome do banco de dados no SGBD, neste projeto é local).

```bash
- git clone https://github.com/Lucas-Angelo/nps-api.git
- cd nps-api
```

Instalando dependências (Recomendável utilizar NPM para compatibilidade com reflect-metadata)

```bash
- npm install
```

ou

```bash
- yarn install
```

Gerar o arquivo de database.sqlite do Sqlite3, onde ficaram armazenados as tabelas da API

```bash
- yarn devDB
```

Criando tabela das migrations do Sqlite3 por meio do cli do TypeOrm

```bash
- yarn typeorm migration:run
```

Inicializando uma instância local (Script configurado no package.json)

```bash
- yarn dev
```

## ⤵ Testes

Para testar se instalou a aplicação corretamente e se passa em todos os testes de integração, utilize o comando:

```bash
- yarn test
```

## 🔗 Links do projeto

### Notion
- [Ambiente](https://www.notion.so/Configura-es-do-ambiente-Node-js-ae9fea3f78894139af4268d198294e2a)
- [Aula 1](https://www.notion.so/Dia-1-Fundamentos-do-NodeJS-a0040fa51a764bdaaf5648fedbf6fb4d)
- [Aula 2](https://www.notion.so/danileao/Dia-2-Iniciando-com-o-Banco-de-Dados-ffa8a141872641b7b13338f339d7a69b)
- [Aula 3](https://www.notion.so/Dia-3-Testando-a-nossa-aplica-o-6b517e6d081241258009c640f7032cde)
- [Aula 4](https://www.notion.so/danileao/Dia-4-Envio-de-e-mail-1b85cb36f0a84e5e90a43e3acbce5674)
- 

### Resources
[Ícones e Wallpapers](https://drive.google.com/drive/folders/11fxy_LmTD6S1FGTQbeu47QPLzvyuEGSs)


## 🎓 Quem ministrou?

As aulas foram ministradas pela **[Daniele Leão](https://github.com/danileao)** na **Next Level Week 04**.

## 🤔 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## 📣 O que é Next Level Week?

<p> 
 O NLW (antiga onmistack) é uma semana onde a <strong>Rocketseat</strong> mostram como montar uma aplicação do zero com as melhores tecnologias do mercado.
<br>
A Rocketseat tem a consciência que a prática é a melhor aula, então sempre nos inspiram e lançam desafios para a gente se virar sozinho!
</p>
<strong>Pilhares do metódo de ensino Rocketseat</strong><br>
<li><strong>Foco: </strong> Dominar todas as linguagens e tecnologias é impossível, por isso é importante focar para ir direto ao ponto sem perder tempo.</li>
<li><strong>Grupo: </strong> A comunidade de devs é uma das melhores comunidades que existem! Trabalhar em grupo é essencial, já perdi a conta de quantas vezes ajudei e fui ajudado com erros de programação.</li>
<li><strong>Prática: </strong> E claro, não podia faltar! Quando vemos uma aula, nós podemos entender os conceitos, mas só na prática que aprendemos realmente como faze-los! </li>

<div align="center">
<img  src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F4b24bb94-c9ea-4984-a8cb-300ce4553abb%2Fnlw4-banner-github.png?table=block&id=d50c626b-7d28-4bfc-b9f0-ea2b42347e3e&spaceId=08f749ff-d06d-49a8-a488-9846e081b224&width=5120&userId=aaa75990-d584-4b7e-a045-99eb29503a22&cache=v2">
</div>

## 📝 License

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---
