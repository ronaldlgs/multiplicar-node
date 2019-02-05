const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        console.log(`la tabla del ${base}: hasta el ${limite}`.red);
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} =  ${ base * i} \n`;
        }
        resolve(data);
    })
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`el valor ingresado '${base}' No es un número`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} =  ${ base * i} \n`;
        }

        fs.writeFile(`tablas/tabla-${ base }-limite${limite}.txt`, data, (err) => {
            if (err) throw err;
            else
                resolve(`tabla-${base}-limite${limite}.txt`);
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}