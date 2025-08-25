let http = require('http');
const MobileDetect = require('mobile-detect');
let server = http.createServer(async (req, res) => {
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,User-Agent');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS,PUT,PATCH,DELETE');
    if(req.url === '/api/device' && req.method === 'GET')
    {   
        const md = new MobileDetect(req.userAgent);
        const isSystem = !md.mobile() && !md.tablet();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            "mobile":md.mobile(),
            "tablet":md.tablet(),
            "system":isSystem
        }))
    }
});

let PORT = process.env.PORT || 3000;
server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at ${PORT}`);
});