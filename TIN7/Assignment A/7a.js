// a)	Write a simple HTTP server that will
// accept requests for different mathematical operations
// (add, sub, mul, div) under different URLs,
// extract parameter values from the request parameters
// and returns result in form of HTML response
// containing the request parameters and result (formatting is up to you).
// Make sure to handle situations
// in which the parameters are incorrect (missing or wrong type).

const http = require('http');
const url = require('url');

http.createServer(function (incomingMessage, serverResponse) {
    const query = url.parse(incomingMessage.url, true).query;

    if (typeof (query.operation) !== "undefined" && query.operation) {
        if (typeof (query.fnumber) !== "undefined" && query.fnumber) {
            if (typeof (query.snumber) !== "undefined" && query.snumber) {
                let res;
                switch (query.operation) {
                    case "addition":
                        res = parseInt(query.fnumber) + parseInt(query.snumber);
                        let messageAdd = query.fnumber + " + " + query.snumber + " = " + res;
                        serverResponse.writeHead(200, {'Content-Type': 'text/html'});
                        serverResponse.end(messageAdd);
                        break;
                    case "substraction":
                        res = parseInt(query.fnumber) - parseInt(query.snumber);
                        let messageSub = query.fnumber + " - " + query.snumber + " = " + res;
                        serverResponse.writeHead(200, {'Content-Type': 'text/html'});
                        serverResponse.end(messageSub);
                        break;
                    case "multiplication":
                        res = parseInt(query.fnumber) * parseInt(query.snumber);
                        let messageMul = query.fnumber + " * " + query.snumber + " = " + res;
                        serverResponse.writeHead(200, {'Content-Type': 'text/html'});
                        serverResponse.end(messageMul);
                        break;
                    case "division":
                        res = parseInt(query.fnumber) / parseInt(query.snumber);
                        let messageDiv = query.fnumber + " / " + query.snumber + " = " + res;
                        serverResponse.writeHead(200, {'Content-Type': 'text/html'});
                        serverResponse.end(messageDiv);
                        break;
                    default :
                        serverResponse.writeHead(404, {'Content-Type': 'text/html'});
                        serverResponse.end("Error 404: Wrong operation input");
                }
            } else {
                serverResponse.writeHead(404, {'Content-Type': 'text/html'});
                serverResponse.end("Error 404: second number not found");
            }
        } else {
            serverResponse.writeHead(404, {'Content-Type': 'text/html'});
            serverResponse.end("Error 404: first number not found");
        }
    } else {
        serverResponse.writeHead(404, {'Content-Type': 'text/html'});
        serverResponse.end("Error 404: operation not  found");
    }
}).listen(8080);

//!!!Sample inputs:

//Correct inputs:
//http://localhost:8080/?operation=addition&fnumber=10&snumber=2
//http://localhost:8080/?operation=substraction&fnumber=10&snumber=2
//http://localhost:8080/?operation=multiplication&fnumber=10&snumber=2
//http://localhost:8080/?operation=division&fnumber=10&snumber=2

//404 inputs:
//http://localhost:8080/?operation=s17115&fnumber=10&snumber=2
//http://localhost:8080/?operation=division&fnumber=&snumber=2
//http://localhost:8080/?operation=division&fnumber=10&snumber=