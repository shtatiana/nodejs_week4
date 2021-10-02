const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, x-test, Accept'
};
const s = require('http').Server((req, res) => {
	if (req.url === '/result4/') {
		res.writeHead (200, {'Content-Type':'application/json', ...CORS});

		let data = '';
  		req.on('data', chunk => {
    		data += chunk;
  		});
  		req.on('end', () => {
  		})

		res.json({
			"message": "Tatiana"
			//"x-result": req.headers['x-test'],
			//"x-body": data
		});
	}
	res.end();
});
s.listen(4321);