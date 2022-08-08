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