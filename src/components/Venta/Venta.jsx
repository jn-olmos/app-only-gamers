import React, { useState } from 'react';
import '../../scss/components/Venta/_venta.scss';
import TablaProductosVenta from '../Venta/TablaProductosVenta';
import CarritoCompra from '../Venta/CarritoCompra';
import FormCliente from './FormCliente';
import Checkout from './Checkout';

const Venta = () => {
	const [productosSeleccionados, setProductosSeleccionados] = useState([]);
	const [datosCliente, setDatosCliente] = useState();

	// DESDE LA TABLA PRODUCTO
	const handleProducto = (producto) => {
		producto.cantidad = 1;
		setProductosSeleccionados([...productosSeleccionados, producto]);
	};

	const handleDatosCliente = (dataCliente) => {
		setDatosCliente(dataCliente);
	};

	return (
		<div className='venta'>
			<div className='contenedor-venta'>
				<CarritoCompra productos={productosSeleccionados} />
				<TablaProductosVenta handleProducto={handleProducto} />

				<section className='vistaCliente'>
					<FormCliente handleDatosCliente={handleDatosCliente} />
				</section>

				<section className='vistaCheckout'>
					<Checkout />
				</section>
			</div>
		</div>
	);
};

export default Venta;
