const express = require('express')

const handlebars = require('express-handlebars')

const app = express()

app.engine('hbs', 
            handlebars({defaultLayout: 'default.hbs'})
)

const PORT = parseInt(process.argv[2]) || parseInt(process.env.PORT) || 3000

app.get('/roll', 
    (req, res) => {
        res.status(200)
        res.type(image/png)
        res.sendFile(__dirname + 'dice_images/dado-1.png')
    }
)
app.listen(PORT, () => {
    console.info(`Application started on port ${PORT} at ${new Date()}`)
    }
)