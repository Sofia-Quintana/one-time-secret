const express = require('express');
const app = express();
const server = require('http').createServer(app);
const crypto = require('crypto');
const cors = require('cors');
const { getSecret, markSecretAsReaded } = require('./services/SecretService');
const port = 3030;
const secrets = [];

//Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Endpoints

//to get a secret through secret hashed id 
app.get('/:id', (request, response) => {
    try {
        let secret = getSecret(secrets, request.params.id);
        if(secret !== undefined) {
            if(secret.status === true) {
                secrets = markSecretAsReaded(secrets, secret.id);
                response.status(200).json({ message: secret.message }); 
            } else {
                response.status(404).json({ message: 'This secret is no longer valid' });
            }
        }
    } catch(error) {
        response.status(400).json({ message: `Bad request: ${error.message}`});
    }
});

//to generate a secret url
app.post('/', (request, response) => {
    try {
        let id = crypto.randomBytes(3).toString('hex');
        secrets.push({ id: id, message: request.body.secret, status: true });
        response.status(200).json({ message: 'Link generated successfully', link: `http://localhost:${port}/${id}` });
    } catch(error) {
        response.status(400).json({ message: `Bad request: ${error.message}`});
    }
});

//Starting server
server.listen(port, () => {
    console.log(`Listening in port ${port}...`);
});