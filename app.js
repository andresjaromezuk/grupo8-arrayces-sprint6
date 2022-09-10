const express = require ('express')
const app= express()

app.use(express.static('public'))
app.listen(process.env.PORT ||	 3000, () =>{ console.log ('Servidor Funcionando en puerto 3000')})

app.get('/', (req, res) => {
    app.send('El servidor funciona bien')
})


