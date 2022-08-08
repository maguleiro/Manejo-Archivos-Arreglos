/*
const fs = require('fs');

let fechaHora = new Date();

try{
	// lectura de atchivos
	const data1 = fs.readFileSync('./archivos/sync_data.txt','utf-8');
	console.log(data1);

	// escritura de archivos
	fs.writeFileSync('./archivos/sync_data.txt', 'Hola como te va ${fechaHora}');

	const data2 = fs.readFileSync('./archivos/sync_data.txt', 'utf-8');
	console.log('Lectura 2:', data2);

} catch (error) {
	console.log ('Error: ', error);
} */

const fs = require('fs')

console.log('Inicia la ejecucion')

let fechaHora = new Date ();

try {

	//=========== Lectura de archivos

	fs.readFile('/archivos/sync_data.txt', 'utf-8', (error, contenido) =>{
		if (error) {
			console.log('Error: ',error);
		} else {
			console.log('Contenido: ', contenido);

			//===========Escitura de archivos

		fs.readFile('/archivos/sync_data.txt', 'utf-8', (error, contenido) =>{
			if (error) {
				throw new Error(error);
			} else {
				console.log('Finalizado');
		}
	});
		}
	});

	console.log ('Otra Instruccion')
} catch (error) {

}
console.log('Fin de la ejecucion')