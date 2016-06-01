var express = require("express");
var jsonfile = require('jsonfile')
var app = express();

var schema = {
  type_clients: ["alumno","profesor","apoderado","otro"],
  services: [
    { id: "FO", name: "Fotocopia", value: 15},
    { id: "SC", name: "Scanner", value: 10},
    { id: "CP", name: "Impresión a color", value: 200},
    { id: "BW", name: "Impresión blanco y negro", value: 100},
    { id: "PL", name: "Plotter", value: 4500},
    { id: "PA", name: "Hoja tamaño carta", value: 15},
    { id: "DE", name: "Goma de borrar", value: 100},
    { id: "TI", name: "Tijera", value: 250},
    { id: "PE", name: "Pegamento", value: 300},
    { id: "LA", name: "Lápiz", value: 150},
    { id: "CU", name: "Cuaderno", value: 800},
    { id: "BO",
      name: "Libro",
      type: [
        { label: "matemáticas", value: 4000},
        { label: "lenguaje", value: 3500},
        { label: "ciencias", value: 3000},
        { label: "historia", value: 5000}
      ]
    }
  ]
}

var first_data = [
  {
    name: "Alexader Espinoza",
    type: "profesor",
    purchase: [
      {
        id: "FO",
        name: "Fotocopia",
        value: 30,
        units: 40
      },
      {
        id: "CP",
        name: "Impresión a color",
        value: 200,
        units: 13
      },
      {
        id: "BW",
        name: "Impresión blanco y negro",
        value: 100,
        units: 10
      }
    ]
  },
  {
    name: "Bilbo Bolson",
    type: "otro",
    purchase: [
      {
        id: "BO",
        name: "Libro",
        type: [ {label: "historia"}, {value: 5000} ],
        units: 5
      },
      {
        id: "BO",
        name: "Libro",
        type: [{label: "matemáticas"}, {value: 4000} ],
        units: 3
      },
      {
        id: "LA",
        name: "Lápiz",
        value: 150,
        units: 80
      },
      {
        id: "BW",
        name: "Impresión blanco y negro",
        value: 100,
        units: 30
      }
    ]
  },
  {
    name: "Pedro Medina",
    type: "alumno",
    purchase: [
      {
        id: "BO",
        name: "Libro",
        type: [ {label: "ciencias"}, {value: 3000} ],
        units: 5
      },
      {
        id: "FO",
        name: "Fotocopia",
        value: 30,
        units: 400
      },
      {
        id: "CP",
        name: "Impresión a color",
        value: 200,
        units: 147
      },
      {
        id: "PL",
        name: "Plotter",
        value: 3,
        units: 4500
      }
    ]
  }
]
app.get("/", function(req, res){
  res.setHeader('Content-Type', 'application/json');
  res.jsonp({response: first_data});
});
app.get("/schema", function(req, res){
  res.jsonp({response: schema});
});



app.listen(3000);
console.log("API is Running on port 3000");
