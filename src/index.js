const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(`${__dirname}/data/db.json`);
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 3000;

server.use(router);
server.use(middlewares)

server.listen(port, () => {
    console.log('JSON Server is running')
})