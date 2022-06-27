import { useEffect, useState } from 'react';
import axios from 'axios';

export default function StockMinimo() {
	const [alertaStock, setAlertaStock] = useState([]);

	useEffect(() => {
		axios.get('https://api-onlygamers.herokuapp.com/api/productos').then(function (response) {
			let cantidadProductos = response.data.length;
			let prevAlertaStock = [];

			for (let i = 0; i < cantidadProductos; i++) {
				if (response.data[i].stock <= response.data[i].stockMinimo) {
					prevAlertaStock.push(response.data[i]);
				}
			}

			setAlertaStock(prevAlertaStock);
		});
	}, []);

	return <div>Hola:</div>;
}
