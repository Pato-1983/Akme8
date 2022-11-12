const express = require('express')
const path = require('path')
const app = express()
const methodOverride = require('method-override')
const session = require('express-session')
const cookies = require('cookie-parser')
const userLoggedMiddleware = require('./middleware/userLoggedMiddleware')
const productsRouter = require('./routes/productsRouter');
const usersRouter = require('./routes/usersRouter');
const mainRouter = require('./routes/mainRouter');
const productsApiRouter = require('./routes/API/productsApiRouter');
const usersApiRouter = require('./routes/API/usersApiRouter');


const port = 3030;

app.use(express.static(path.resolve(__dirname, '../public')))
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method"));

app.use(session({
    secret: 'secret',	
    resave: false,
    saveUninitialized: false    
}))

app.use(cookies())
app.use(userLoggedMiddleware)

app.use('/', mainRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);

app.use("/api/products", productsApiRouter)
app.use("/api/users", usersApiRouter)


app.listen(process.env.PORT || port, () => console.log(`servidor funcionando en el puerto ${port}! `))



// const express = require('express');
// const app = express();

// app.use(express.static('public'));

// app.listen(process.env.PORT || 3000, () => {console.log('listening on port 3000');});

// app.get('/', (req, res) => {
//     res.send('mi server funcionando');
// })





