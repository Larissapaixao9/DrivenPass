// istalação do PRSMA:
//npm install prisma --save-dev

//depois:
//npx prisma

//npx prisma init 

//Após fazermos a criação/alteração do bd no schema, temos que rodar no terminal:
//npx prisma migrate dev



//Typescript:
//instalar typescript:
//npm i --save-dev typescript

//para usar typescript, precisamos de um config file. Para tal, usamos o comando:
//npx tsc --init

//para q atualize automaticamente toda vez que fizermos alteração, basta colocarmos no start:
// "start":"tsc --watch"

//toda vez q alteramos o arquivo .TS, apare um output em javascript. Para que esse
//output esteja na pasta "dest", precismos entrar no "tsconfig.json" e pesquisar:
//outDir, descomentar a linha e deixar como "outDir":"./dest", assim todos os scripts
//vão para ela