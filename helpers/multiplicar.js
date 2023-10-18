const fs = require('fs');


const crearArchivo = async( base = 5, listar = false, hasta = 10) => {


    let salida = '';
    
    for (let i = 1; i <=hasta; i++ ) {
    salida += `${ base } x ${ i } = ${ base * i }\n`;
    
    }
    try{
        if ( listar ){
            console.log('===================='. red);
            console.log('  Tabla de :'.brightGreen, base);
            console.log('===================='. red);
   
    console.log((salida). brightGreen);
}
    fs.writeFileSync (`./salida/tabla-${ base }.txt`, salida,);
    
return `tabla-${ base }.txt`;
    }catch (err) {
        throw err;
    }

}
module.exports = {

    crearArchivo
}
