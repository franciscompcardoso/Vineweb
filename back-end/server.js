const express = require('express');
const app = express();
const path = require('path');
var mysql = require('mysql');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const router = require('express').Router();





app.use(morgan('dev'))
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use("/css",  express.static(__dirname +'/../front-end/css'));
app.use("/images",  express.static(__dirname +'/../front-end/images'));
app.use("/js",  express.static(__dirname +'/../front-end/js'));




app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname +'/../front-end/views/index.html'));
});

app.get('/menu', function (req, res) {
  res.sendFile(path.join(__dirname +'/../front-end/views/menu.html'));
});

app.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname +'/../front-end/views/about.html'));
});


/*
router.get('/', function(req, res) {  //rota express....
  res.send(path.resolve(__dirname + '/../front-end/views/', 'html'))
});
*/


app.post("/", async (req, res) => {
      const body = req.body;
      mysqlConnection.query(
        'INSERT INTO contacto SET ?;'
        
        ,{
          nome: body.nome,
          telemovel: body.telemovel,
          email: body.email,
          mensagem: body.mensagem

        })

        res.end('Contacto adicionado')
      
})





const port = process.env.PORT || 3000;
app.listen(port, function () {
  //console.log('myapp is using Node.js version: ' + process.version); //new line
  console.log('VineWeb a correr na porta: ' + port);
});

//Concetar base de dados

var mysqlConnection = mysql.createConnection({
  host: "remotemysql.com",
  user: "CnSDVBDzPZ",
  password: "GY82EBExga",
  database: "CnSDVBDzPZ"
  
});

mysqlConnection.connect((err) =>{
  if(err){
    throw err;
  }
  console.log('Base de Dados Conectada...')
});


//No carrinho de compras adicionar a variavél stock (Página Web)
//Códdigo do moloni update, utilizar só o stock
// conectar com as duas variáveis iguais
//Rezar


//login necessário?
//trocar entre páginas html
//método update moloni


//GETONE DO ESTEVA


var index = require('./routes/index');
app.use('/', index);



//UPDATE DO ESTEVA
/*
var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://api.moloni.pt/v1/products/update/?access_token=bd27bcb833d079e39c5a37698ce9fe48f3128839',
  'headers': {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Cookie': 'PHPSESSID=sq8mhecd87gauqkqq8n7obmqn0'
  },
  form: {
    'company_id': '',
    'product_id': '',
    'category_id': '',
    'type': '',
    'name': '',
    'reference': '',
    'price': '',
    'summary': '',
    'ean string': '',
    'unit_id': '',
    'has_stock': '',
    'stock': '',
    'minimum_stock': '',
    'pos_favorite': '',
    'at_product_category': '',
    'exemption_reason': '',
    'taxes': '',
    'suppliers': '',
    'properties': ''
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
*/

// api url
/*const api_url =
	"https://employeedetails.free.beeceptor.com/my/api/path";

// Defining async function
async function getapi(url) {
	
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	if (response) {
		hideloader();
	}
	show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
	document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
	let tab =
		`<tr>
		<th>Name</th>
		<th>Office</th>
		<th>Position</th>
		<th>Salary</th>
		</tr>`;
	
	// Loop to access all rows
	for (let r of data.list) {
		tab += `<tr>
	<td>${r.name} </td>
	<td>${r.office}</td>
	<td>${r.position}</td>
	<td>${r.salary}</td>		
</tr>`;
	}
	// Setting innerHTML as tab variable
	document.getElementById("name").innerHTML = tab;
}
*/