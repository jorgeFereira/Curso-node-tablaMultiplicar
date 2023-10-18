


const { crearArchivo } = require('./helpers/multiplicar');
const argv = require ( './confog/yargs');

require ('./node_modules/colors') ;

console.clear();

//console.log( argv );




crearArchivo( argv.b, argv.l, argv.h)
.then ( nombreArchivo => console.log(nombreArchivo. brightGreen, 'creado'.brightGreen)   )

.catch( err => console.log (err));