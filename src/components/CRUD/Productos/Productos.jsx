import React, { useState } from 'react';
import '../../../scss/components/CRUD/_productos.scss';
import CargarProducto from './CargarProducto';
import StockMinimo from './StockMinimo';
import TablaProductos from './TablaProductos';

const Productos = () => {
	const [vista, setVista] = useState(false);

	const handleVista = () => {
		setVista(!vista);
	};

	return (
		<section id='productos' className='productos'>
			{/* VISTA PRODUCTO */}
			<div className='contenedor-vista-producto'>
				<StockMinimo />

				<button className='boton boton-cargar-producto' type='button' onClick={handleVista}>
					Cargar un nuevo producto
				</button>
				<TablaProductos />
			</div>

			{/* VISTA CARGAR PRODUCTO */}
			<div
				className={
					vista
						? 'contenedor-vista-cargar-producto active'
						: 'contenedor-vista-cargar-producto'
				}
			>
				<button className='boton boton-regresar' type='button' onClick={handleVista}>
					Volver
				</button>
				<CargarProducto />
			</div>
		</section>
	);
};

export default Productos;
