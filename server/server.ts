import express from 'express';

const port: string | number = process.env.port || 1337;

const app = express();

app.listen(port);

app.use(express.static('src'));

console.log('Listen to port ' + port);