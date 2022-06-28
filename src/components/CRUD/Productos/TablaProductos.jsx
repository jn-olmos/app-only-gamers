import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../../scss/components/CRUD/_tablaProductos.scss';

const TablaProductos = () => {
	const [productos, setProductos] = useState([]);

	const endpoint = 'https://api-onlygamers.herokuapp.com/api/productos';

	const getData = async () => {
		await axios.get(endpoint).then((response) => {
			const data = response.data;
			setProductos(data);
		});
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<table className='tabla-productos'>
			<thead>
				<tr>
					<th className='id-column'>ID</th>
					<th className='nombre-column'>nombre</th>
					<th className='descripcion-column'>descripcion</th>
					<th className='categoria-column'>categoria</th>
					<th className='stock-column'>stock</th>
					<th className='stock-minimo-column'>stock min.</th>
					<th className='compra-column'>compra</th>
					<th className='iva-column'>iva</th>
					<th className='utilidad-column'>utilidad</th>
					<th className='venta-column'>venta</th>
				</tr>
			</thead>

			<tbody>
				{productos.map((producto) => (
					<tr key={producto.id}>
						<td>{producto.id.slice(-5)}</td>
						<td>{producto.nombre}</td>
						<td>{producto.descripcion}</td>
						<td>{producto.categoria}</td>
						<td>{producto.stock}</td>
						<td>{producto.stockMinimo}</td>
						<td>{producto.compra}</td>
						<td>{producto.iva}</td>
						<td>{producto.utilidad}</td>
						<td>{producto.venta}</td>
						<td className='boton-column'>
							<button className='boton-editar'>editar</button>
						</td>
						<td className='boton-column'>
							<button className='boton-eliminar'>eliminar</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default TablaProductos;
