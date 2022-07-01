import '../../scss/components/Venta/_checkout.scss';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Checkout({ datosProductos, datosCliente, handlerId }) {
	const [subTotales, setSubTotales] = useState([]);
	let total = [];

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
			<div className='contenedor-resumen-venta'>
				<h2>Resumen de venta</h2>

				<ul>
					<li>Nombre: {datosCliente.nombre}</li>
					<li>CUIT: {datosCliente.cuit}</li>
					<li>Domicilio: {datosCliente.domicilioComercial}</li>
					<li>Metodo de Pago: {datosCliente.metodoDePago}</li>
				</ul>

				<h3>Informacion del Producto</h3>
				{datosProductos.map((producto) => {
					return (
						<ul key={producto.id}>
							<li>Descripcion: {producto.nombre}</li>
							<li>Categoria: {producto.categoria}</li>
							<li>Cantidad: {producto.cantidad}</li>
							<li>Precio Unitario: {producto.venta} </li>
							<li>Subtotal: {producto.venta * producto.cantidad}</li>
						</ul>
					);
				})}

				<ul>
					<li>Total: {total}</li>
				</ul>
			</div>

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
