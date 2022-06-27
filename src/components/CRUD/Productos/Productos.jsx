import React from 'react';
import CargarProducto from './CargarProducto';
import StockMinimo from './StockMinimo';
import TablaProductos from './TablaProductos';

const Productos = () => {
	return (
		<div id='productos'>
			<TablaProductos />

			<StockMinimo />
			<CargarProducto />
		</div>
	);
};

export default Productos;
