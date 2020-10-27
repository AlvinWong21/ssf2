const express = require('express')

const handlebars = require('express-handlebars')
// handlebars: engine, app.set(view engine)
const app = express()

app.engine('hbs', 
            handlebars({defaultLayout: 'default.hbs'})
)

app.set('view engine', 'hbs')

const PORT = parseInt(process.argv[2]) || parseInt(process.env.PORT) || 3000

app.get('/', 
    (req, res) => {
        res.status(200)
        res.type('text/html')
        res.render('landingPage') //render means to show the handlebar page
    }
)
app.get('/roll', 
    (req, res) => {
        const D1 = Math.floor(Math.random() * 6)
        const D2 = Math.floor(Math.random() * 6)
        let dice = ['dado-1', 'roll2','three_dots','four','Five-Image', 'dice-showing-6']
        const Dice1 = dice[D1]
        const Dice2 = dice[D2]
        res.status(200)
        res.type('text/html')
        res.render('roll', {Dice1, Dice2, D1, D2})
    }
)

app.use(
    express.static(__dirname + '/dice_images')
)

app.use(
    express.static(__dirname + '/static')
)

app.use((req, res) => {
    res.status(404)
    res.type('text/html')
    res.sendFile(__dirname + '/static/404.html')
    }
)

app.listen(PORT, () => {
    console.info(`Application started on port ${PORT} at ${new Date()}`)
    }
)