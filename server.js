const http = require("http");

http.createServer((req, res) => {
	console.log(req.url);
	console.log(req.query);
	console.log(req.type);
	res.write("Hello");
	// res.end();
}).listen(3000, () => {
	console.log("Server running");
});
