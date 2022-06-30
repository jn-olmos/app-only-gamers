import React, { useState } from 'react';
import '../../scss/components/Venta/_venta.scss';
import TablaProductosVenta from '../Venta/TablaProductosVenta';
import CarritoCompra from '../Venta/CarritoCompra';
import FormCliente from './FormCliente';
import Checkout from './Checkout';

const Venta = () => {
	const [productosSeleccionados, setProductosSeleccionados] = useState({});

	const handlerProductos = (producto) => {
		setProductosSeleccionados(producto);
	};

	return (
		<div className='venta'>
			<CarritoCompra producto={productosSeleccionados} />
			<TablaProductosVenta handlerProducto={handlerProductos} />

			<section className='vistaCliente'>
				<FormCliente />
			</section>

			<section className='vistaCheckout'>
				<Checkout />
			</section>
		</div>
	);
};

export default Venta;
