import '../../scss/components/Venta/_facturacion.scss';
import React, { useState } from 'react';
import axios from 'axios';

const Facturacion = () => {
	let dataUsuario = {};
	let dataProducto = [];

	axios
		.get('https://api-onlygamers.herokuapp.com/api/facturas')
		.then((response) => {
			let index = response.data.lenght - 1;
			let { datosProductos, datosUsuarios, id } = response.data[index];
			dataUsuario = datosUsuarios;
			dataProducto = datosProductos;
		})
		// Capturamos los errores
		.catch((e) => {});

	return (
		<div>
			<h1>{dataUsuario.tipoFactura}</h1>
		</div>
	);
};

export default Facturacion;
