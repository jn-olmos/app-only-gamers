import React from 'react';
import Facturacion from './Facturacion';
import axios from 'axios';

function Checkout(datosProductos, datosCliente) {
	console.log(datosProductos, datosCliente);

	function postear(datosProductos, datosCliente) {
		axios
			.post('https://api-onlygamers.herokuapp.com/api/facturas', {})
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
