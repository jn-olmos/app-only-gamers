import React from 'react';
import axios from 'axios';

function Checkout({ datosProductos, datosCliente }) {
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
			<div className='contenedor-resumen-venta'></div>

			<button
				onClick={() => {
					postear(datosProductos, datosCliente);
				}}
			>
				confirmar
			</button>
		</div>
	);
}

export default Checkout;
