var express = require('express');
var app = express();
const port = process.env.PORT || 3000

app.use('/', require('./routes'));

app.listen(port, () =>{
  console.log(`Server is running on port ${port}`);
});
async function main() {
	const uri = "mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority";
}