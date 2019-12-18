import express from 'express';
import { noCache } from 'helmet';
import http from 'http';
import ssr from './ssr';

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 4000;

app.use('/taiwanoverseas/dist', express.static('./dist/app'));
app.use('/taiwanoverseas/assets', express.static('./public/assets'));
app.use('/taiwanoverseas/uploads', express.static('./uploads'));
app.use(noCache());
app.use(ssr.router);
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.urlencoded({extended: true}));
app.use(express.json());

ssr.get('*', async () => ({}));

app.post('/taiwanoverseas/contact-us', (req, res) => {
        const test = req.body;
        const name = req.body.name;
        const email = req.body.email;
        const phone = req.body.phone;
        const message = req.body.message;
        console.log("running");
        console.log(test);
        res.redirect('/taiwanoverseas/contact/form');
    });


server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}!`);
});
