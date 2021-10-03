import http from 'http';
const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, x-test, Accept'
};
const s = http.createServer(async(req, res) => {
	if (req.url === '/result4/') {
		res.writeHead(200, {'Content-Type':'application/json', ...CORS });

		let data = '';
  		await req.on('data', chunk => {
    		data += chunk;
  		});
  		req.on('end', () => {
  		})

  		let headers = req.headers['x-test'];
		res.write(JSON.stringify({
			"message": "Tatiana",
			"x-result": headers,
			"x-body": data
		}));
	}
	res.end();
});
s.listen(4321);