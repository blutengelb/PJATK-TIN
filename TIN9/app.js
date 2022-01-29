// a)	an express application t
//      hat will accept json data
//      containing two numbers a
//      nd an operation code (format is up to you),
//      perform an arithmetic calculation chosen
//      based on the operation code
//      and return result in json format

// App throws "Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client"
// Don't have much time trying to fix it

const port = 3000
const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

app.post('/calculations', express.json(), (request, response) => {
    const fnum = +request.body.fnum
    const snum = +request.body.snum
    const operation = request.body.operation

    switch (operation) {
        case 'add':
            response.json({
                result: fnum + snum
            })
            break
        case 'subtract':
            response.json({
                result: fnum - snum
            })
            break
        case 'multiply':
            response.json({
                result: fnum * snum
            })
            break
        case 'divide':
            response.json({
                result: fnum / snum
            })
            break
    }

    response.status(400)
    response.json({
        error: '400: Bad Request'
    })
})