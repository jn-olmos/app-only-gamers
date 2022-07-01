import React from 'react';
import Facturacion from './Facturacion';
import axios from 'axios';

function Checkout(datosProductos, datosCliente) {
	// console.log('datos producto:', typeof datosProductos, 'datos cliente:', typeof datosCliente);

	const newFormatProductos = [];

	for (let producto in datosProductos) {
		console.log('\n');
		console.log(producto);
	}

	function postear(datosProductos, datosCliente) {
		axios
			.post('https://api-onlygamers.herokuapp.com/api/facturas', {
				datosProductos,
				datosCliente,
			})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	return (
		<div>
			<button onClick={() => postear(datosProductos, datosCliente)}>confirmar</button>
			<Facturacion />
		</div>
	);
}

export default Checkout;
