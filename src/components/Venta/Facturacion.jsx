import React, { useState } from 'react';
import axios from 'axios';

const Facturacion = () => {
	useState(() => {
		axios.get('https://api-onlygamers.herokuapp.com/api/facturas').then(({ data }) => {
			const ultimaFacturaCompleta = data[data.length - 1];
			const { id, datosProductos, datosCliente } = ultimaFacturaCompleta;
		});
	});

	return <div>Facturacion</div>;
};

export default Facturacion;
