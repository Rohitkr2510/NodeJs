const requestHandler = (req,res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/')
    {
        res.write('<html>');
        res.write('<head><title>Assignment_1</title></head');
        res.write('<body><form action = "/create-user" method = "POST"><input type = "text" name = "username"><button type = "submit">Send</button><form></body>');
        res.write('</html>');
        return res.end();
    }

    if(url === '/users') {
        res.write('<html>');
        res.write('<body>');
        res.write('<ul><li>User1</li></ul>');
        res.write('<ul><li>User1</li></ul>');
        res.write('<ul><li>User1</li></ul>');
        res.write('<ul><li>User1</li></ul>');
        res.write('</body>');
        res.write('</html>');
        return res.end();

    }

    if(url === '/create-user' && method === 'POST')
    {
        // console.log("Hello");
        const body = []
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        })
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            res.statusCode = 302;
            res.setHeader("Location", "/");
            return res.end();
        });
    
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Assignment</title></head>');
    res.write('<body><h1> Hello from My Node.js Server! and assignment_1</h1></body>');
    res.write('</html>');
    res.end();
}

exports.handler = requestHandler;