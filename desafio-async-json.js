/*
const fs = require ('fs/promises');

const ruta = './archivos/desafio-data.json';


async function listarAll(){

try{
		const objs = await fs.readFile(ruta, 'utf-8');

		return JSON.parse(objs);

	}catch (error) {
		return []
	}

}

async function guardar(obj) {
	const objs = await listarAll()

	let newId
	if(objs.length == 0){
		newId = 1
	} else {
		newId = objs[objs.length -1].id +1
	}

	const newObjs = {...obj,id: newId}
	objs.push(newObjs)

	try {
		await fs.writeFile(ruta,JSON.stringify(objs, null,2))
		return newObjs;
	} catch (error) {
		throw new Error (`Error al guardar: ${error}`)
	}

}

async function main () {
	console.log(await listarAll());
	await guardar({
		"producto":"monitor",
		"precio": 7000
	})
	console.log(await listarAll());
}








function deleteById()
{
	let id = Number(prompt("Ingrese el ID del producto a eliminar:"));

	let encontrado = objs.find((obj)=>obj.id===id);

	console.log("PRODUCTO A BORRAR", encontrado);

	if(!encontrado)
	{
		alert("Producto no Encontrado.");
	}
	else{
		let index = objs.indexOf(encontrado);
		console.log("Indice Encontrado");

		objs.splice(index,1);

		console.log("Producto Eliminado.");

		console.log(objs);

		alert("Producto Eliminado.");
	}

}




main();
*/


const fs = require ('fs/promises');

class Objs {
	constructor(ruta){
		this.ruta = ruta
	}

	async listarAll(){
		try {
			const objs = await fs.readFile(this.ruta,'utf-8');			
			return JSON.parse();
		}catch (error) {
			return []
		}
	}

	async guardar(obj){
		const objs = await this.listarAll();

		let newId;
		if (objs.length == 0) {
			newId = 1
		}else {
			newId = objs[objs.legth -1].id +1	
		}
		
		const newObj = {id:newId,...obj}
		objs.push(newObj);

		await fs.writeFile(this.ruta, JSON.stringify(objs, null, 2));
		return newId;
	} catch(error){
		console.log("Error al guardar");
	}

	async actualizar(){

		try {
			const objs = await this.listarAll();
			const indexObj = objs.findIndex((o) => o.id == id)

			if(indexObj == -1) {
				return 'Objeto no encontrado'
			} else {
				objs[indexObj] = {id, ...newObj};
				await fs.writeFile(this.ruta, JSON.stringify(objs, null, 2));
			}

			return {id, ...newObj};
		} catch (error){
			console.log("Error al actualizar");
		}
	}

	async eliminar(){
		const objs = await this.listarAll();
		const indexObj = objs.findIndex((o) => o.id == id);

		if(indexObj == -1){
			return 'Objeto no encontrado'
		} else {
			objs.splice(indexObj,1);
			await fs.writeFile(this.ruta, JSON.stringify(objs, null, 2));
		} 
		
	} catch (error){
			return 'No se pudo eliminar'
		}

}


async function main () {
	const objs = new Objs('./archivos/desafio-data.json');
	console.log('Consulta inicial');
	console.log(await objs.listarAll());
	console.log('Guarda objetos');
	console.log(await objs.guardar({producto: "Auriculares", precio: "6000"}));
	console.log(await objs.guardar({producto: "Monitor", precio: "50000"}));
	console.log('Actualiza objeto');
	console.log(await objs.actualizar(2, {producto: "Teclado Gamer", precio: "4500"}));
	console.log('Consulta objetos');
	console.log(await objs.listarAll()); 
	console.log('Elimina objetos');
	console.log(await objs.eliminar(1));
	console.log('Consulta objetos');
	console.log(await objs.listarAll());
	console.log('Guarda objetos');
	console.log(await objs.guardar({producto: "Placa de video", precio: "35000"}));
	console.log('Consulta objetos');
	console.log(await objs.listarAll()); 
}

main();