import express  from "express"
import dotenv from 'dotenv'
import mustache from 'mustache-express'
import path from "path"

//Importando a rota
import mainRoutes from './routes/index'

dotenv.config()

//Configurando o servidor
const server = express()

//Configurando o mustache
server.set('view engine', 'mustache')
//diretorio que colocaremos nossos arquivos do mustache
server.set('views',path.join(__dirname,'views'))
//template engins do mustache
server.engine('mustache',mustache())

//acessando a pasta public
server.use(express.static(path.join(__dirname,'../public')))

//Importando as rotas do index.ts
server.use(mainRoutes)

//Criando a pasta não encontrada 
server.use((req,res) =>{
    res.render('pages/404')
})

//habilitando o servidor
server.listen(process.env.PORT)