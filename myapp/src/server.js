const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const configViewEngine = require('./config/viewEngine');
configViewEngine(app);

const routerWeb = require('./routers/web');
app.use('/web/v1', routerWeb);

const connection = require('./config/database')




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
