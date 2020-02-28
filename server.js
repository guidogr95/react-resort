const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare()
.then(() => {
    const server = express();

    server.get('/room/:name',(req,res) => {
        app.render(req,res,'/room',{name:req.params.name})
    })

    server.get('*', (req,res) => {
        return handle(req,res);
    })
    console.log(process.env.PORT)
    const port = process.env.PORT || 3000;

    server.listen(port, err => {
        if(err) throw err;
        console.log(port)
    })

})
.catch(err => {
    console.error(err.stack);
    process.exit(1);
})



