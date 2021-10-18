import express from 'express';
 
const app = express();
 
app.get('/', (_request: any, response: { send: (arg0: string) => void; }) => {
  response.send('Hello world!');
});
 
app.listen(5000);
