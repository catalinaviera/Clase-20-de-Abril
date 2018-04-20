//aquí debes trabajar con datos de un arreglo o un objeto, incluido directamente en la variable data.
var AÑOS = [
    {name: '2014 (58)', population: 58},
    {name: '2015 (58)', population: 58},
    {name: '2016 (52)', population: 52},
    {name: '2017 (65)', population: 65}
  ];
  //seleccionar todos los "circle" en el documento  
  d3.selectAll('circle')
    .data(AÑOS)
    .attr('fill', '#9685CC')
    .attr('r', function (d) {
      return d.population / 1;
    })
  //seleccionar todos los "text" en el documento      
  d3.selectAll('text')
    .data(AÑOS)
    .attr('fill','#3B257F')
    .text(function(d) {
      return ". " + d.name;
    });