import React, { useEffect, useState } from 'react';
//import getProductos from '../../../services/ProductoService';
import axios from 'axios';

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
		<>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>nombre</th>
						<th>descripcion</th>
						<th>categoria</th>
						<th>stock</th>
						<th>stock minimo</th>
						<th>compra</th>
						<th>iva</th>
						<th>utilidad</th>
						<th>venta</th>
					</tr>
				</thead>
				<tbody>
					{productos.map((producto) => (
						<tr key={producto.id}>
							<td>{producto.id}</td>
							<td>{producto.nombre}</td>
							<td>{producto.descripcion}</td>
							<td>{producto.categoria}</td>
							<td>{producto.stock}</td>
							<td>{producto.stockMinimo}</td>
							<td>{producto.compra}</td>
							<td>{producto.iva}</td>
							<td>{producto.utilidad}</td>
							<td>{producto.venta}</td>
							<td>
								<button>editar</button>
							</td>
							<td>
								<button>eliminar</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default TablaProductos;
