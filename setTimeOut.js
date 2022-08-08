/*let timeout = 5000;

console.log(`1111 Inicio de ejecucion ${new Date()}`);

// Se ejecuta luego de 5 seg.

setTimeout(() =>{
	console.log(`2222 Se ejecuta luego de ${timeout} milisegundos.`);
	console.log(`2222 Fin de ejecucion ${new Date()}`)
}, timeout)

console.log(`3333 Siguiente bloque de instruciciones ${new Date()}`);

// -----------------------------------------------------

console.log(`1111 Inicio de ejecucion ${new Date()}`);

let contador = 0;

let procesoRecursivo = setInterval(() =>{
	contador++;
	console.log(`2222 Se ejecuta ${contador} veces`)

	if (contador == 8){
		clearInterval(procesoRecursivo);
		console.log(`2222 Fin de Interval con ${contador} ejecuciones`)
	}

}, 1000);

console.log(`3333 Fin de ejecucion ${new Date()}`);

// -----------------------------------------------------

let cont = 0;
const delay = ret =>{for(let i=0; i<ret*3e6; i++){cont++};}

function hacerTarea (num) {
	console.log(`Haciendo tarea ` + num)
	delay(100)
	console.log(cont)
}

console.log(`Inicio de tareas`);

hacerTarea(1)
hacerTarea(2)
hacerTarea(3)
hacerTarea(4)

console.log(`Fin de tareas`)
console.log(`Otras tareas...`)

// ----------------------------------------------------


function hacerTarea(num,cb) {
	console.log(`haciendo tarea ` + num)
	setTimeout(cb,100)
}

console.log(`inicio de tareas async`);
hacerTarea(1, () => {
	hacerTarea(2, () => {
		hacerTarea(3, () =>{
			hacerTarea(4, () =>{
				console.log(`Fin de tareas async`)
			})
		})
	})
})

console.log(`Otras tareas...`)

// ----------------------------------------------------
*/

const mostrarLetras = (palabra, tiempoDemora,callback) => {
	let contador = 0;
	let iteracion = setInterval(() => {
		console.log(palabra.charAt(contador));
		contador += 1;
		if (contador === palabra.length){
			clearInterval(iteracion);
			callback();
		}
	}, tiempoDemora);
}

mostrarLetras(`Hola`, 0, () => console.log(`finaliza Hola`));
mostrarLetras(`******`, 250, () => console.log(`finaliza ******`));
mostrarLetras(`@@@@@`, 500, () => console.log(`finaliza @@@@@`));

// ----------------------------------------------------


