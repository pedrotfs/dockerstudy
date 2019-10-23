const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();
const client = redis.createClient({
    host: 'redis-server',
    port: 6379
});
client.set('visits', 0);

const port = 8081

app.get('/', (req, res) => {
    
    client.get('visits', (err, visits) => {
        res.send('number of visits is ' + visits);
        client.set('visits', parseInt(visits) + 1); //visits is string
    })
})

app.get('/exit', (req, res) => {
    process.exit(0); //0 is no error
})

app.get('/crash', (req, res) => {
    process.exit(1); //0 is no error
})

app.listen(port, () => {
    console.log('Listening on port ' + port);
});