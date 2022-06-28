import React, { useState } from 'react';
import '../../../scss/components/CRUD/_productos.scss';
import CargarProducto from './CargarProducto';
import TablaProductos from './TablaProductos';
import EditarProducto from './EditarProducto';

const Productos = () => {
	const [vista, setVista] = useState('tabla'); // valores = 'tabla', 'cargar', 'editar'
	const [editarProducto, setEditarProducto] = useState({});

	const handleVista = (nombrevista) => {
		setVista(nombrevista);
	};

	const handleProducto = (productoAEditar) => {
		setEditarProducto(productoAEditar);
	};

	return (
		<section id='productos' className='productos'>
			{/* VISTA PRODUCTO */}
			<div className='contenedor-vista-producto'>
				<button
					className='boton boton-cargar-producto'
					type='button'
					onClick={() => handleVista('cargar')}
				>
					Cargar un nuevo producto
				</button>
				<TablaProductos handleProducto={handleProducto} handleVista={handleVista} />
			</div>

			{/* VISTA CARGAR PRODUCTO */}
			<div
				className={
					vista === 'cargar'
						? 'contenedor-vista-cargar-producto active'
						: 'contenedor-vista-cargar-producto'
				}
			>
				<div className='header-agregar-producto'>
					<button
						className='boton boton-regresar'
						type='button'
						onClick={() => handleVista('tabla')}
					>
						Volver
					</button>

					<h2 className='form-titulo'>Cargar Producto</h2>
				</div>
				<CargarProducto />
			</div>

			{/* VISTA EDITAR PRODUCTO */}
			<div
				className={
					vista === 'editar'
						? 'contenedor-vista-editar-producto active'
						: 'contenedor-vista-editar-producto'
				}
			>
				<div className='header-editar-producto'>
					<button
						className='boton boton-regresar'
						type='button'
						onClick={() => handleVista('tabla')}
					>
						Volver
					</button>

					<h2 className='form-titulo'>Editar Producto</h2>
				</div>

				<EditarProducto producto={editarProducto} />
			</div>
			{/* VISTA ELIMINAR */}
		</section>
	);
};

export default Productos;
