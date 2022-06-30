import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BiShoppingBag } from 'react-icons/bi';

const TablaProductosVenta = ({ handlerProducto }) => {
	const [productoSeleccionado, setProductoSeleccionado] = useState({});

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

	function seleccionarProducto(producto) {
		setProductoSeleccionado(producto);
		handlerProducto(productoSeleccionado);
	}

	return (
		<>
			<table className='tabla-productos'>
				<thead>
					<tr>
						<th className='id-column'>ID</th>
						<th className='nombre-column text'>nombre</th>
						<th className='descripcion-column text'>descripcion</th>
						<th className='categoria-column text'>categoria</th>
						<th className='stock-column num'>stock</th>
						{/* <th className='stock-minimo-column num'>stock min.</th> */}
						{/* <th className='compra-column num'>compra</th>
					<th className='iva-column num'>iva</th>
					<th className='utilidad-column num'>utilidad</th> */}
						<th className='venta-column num'>venta</th>
					</tr>
				</thead>

				<tbody>
					{productos.map((producto, index) => (
						<tr
							key={producto.id}
							style={
								producto.stock === 0
									? {
											backgroundColor: 'var(--rojo-suave)',
									  }
									: producto.stock < producto.stockMinimo
									? {
											backgroundColor: 'var(--yellow)',
									  }
									: null
							}
						>
							<td className='id-column'>{index + 1}</td>
							{/* // id obtenido de la iteracion del .map, el id original para metodos es a traves de mongo */}
							<td className='nombre-column'>{producto.nombre}</td>
							<td className='descripcion-column'>{producto.descripcion}</td>
							<td className='categoria-column'>{producto.categoria}</td>
							<td
								className='stock-column num'
								style={
									producto.stock === 0
										? {
												color: 'var(--blanco)',
												fontWeight: 'bold',
												fontSize: '17px',
										  }
										: producto.stock < producto.stockMinimo
										? {
												color: 'var(--rojo-suave)',
												fontWeight: 'bold',
												fontSize: '17px',
										  }
										: null
								}
							>
								{producto.stock}
							</td>
							{/* <td
								className='stock-minimo-column num'
								style={
									producto.stock === 0
										? {
												color: 'var(--blanco)',
												fontWeight: 'bold',
												fontSize: '17px',
										  }
										: producto.stock < producto.stockMinimo
										? {
												color: 'var(--rojo-suave)',
												fontWeight: 'bold',
												fontSize: '17px',
										  }
										: null
								}
							>
								{producto.stockMinimo}
							</td> */}
							{/* <td className='compra-column num'>
							$
							{new Intl.NumberFormat('es-ES', {
								style: 'currency',
								currency: 'ARS',
							}).format(producto.compra)}
						</td>
						<td className='iva-column num'>{producto.iva}%</td>
						<td className='utilidad-column num'>{producto.utilidad}%</td> */}
							<td className='venta-column num'>
								$
								{new Intl.NumberFormat('es-ES', {
									style: 'currency',
									currency: 'ARS',
								}).format(producto.venta)}
							</td>

							{/* BUTTONS */}

							<td className='input-column'>
								<button
									className='boton-eliminar'
									onClick={() => seleccionarProducto(producto)}
									disabled={producto.stock < 1}
								>
									<BiShoppingBag />
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default TablaProductosVenta;
