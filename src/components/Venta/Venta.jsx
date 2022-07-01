import React, { useState } from 'react';
import '../../scss/components/Venta/_venta.scss';
import TablaProductosVenta from '../Venta/TablaProductosVenta';
import CarritoCompra from '../Venta/CarritoCompra';
import FormCliente from './FormCliente';
import Checkout from './Checkout';
import Facturacion from './Facturacion';
import { BiArrowBack, BiUser } from 'react-icons/bi';

const Venta = () => {
	// valores de vista: 'venta' 'formulario' 'checkout'
	const [vista, setVista] = useState('venta');
	const [productosSeleccionados, setProductosSeleccionados] = useState([]);
	const [productoFinal, setProductoFinal] = useState([]);
	const [datosCliente, setDatosCliente] = useState({});

	const handleVista = (vista) => {
		setVista(vista);
	};

	// DESDE LA TABLA PRODUCTO
	const handleProducto = (producto) => {
		producto.cantidad = 1;
		setProductosSeleccionados([...productosSeleccionados, producto]);
	};

	const handleDatosCliente = (dataCliente) => {
		console.log(dataCliente);
		setDatosCliente(dataCliente);
	};

	const handleCarritoCompra = (productosSeleccionadosCarrito) => {
		setProductosSeleccionados(productosSeleccionadosCarrito);
	};

	const handleProductoFinal = (producto) => {
		console.log(producto);
		setProductoFinal(producto);
	};

	return (
		<div className='venta'>
			<div className='contenedor-venta'>
				<CarritoCompra
					productos={productosSeleccionados}
					handleVista={handleVista}
					handleCarritoCompra={handleCarritoCompra}
					handleProductoFinal={handleProductoFinal}
				/>
				<TablaProductosVenta handleProducto={handleProducto} />

				<section
					className={
						vista === 'formulario'
							? 'vista-formulario-cliente active'
							: 'vista-formulario-cliente'
					}
				>
					<div className='header-formulario-cliente'>
						<button
							className='boton boton-regresar'
							type='button'
							onClick={() => handleVista('venta')}
						>
							<BiArrowBack color='white' type='solid' />
						</button>

						<h2 className='form-titulo'>{<BiUser color='gray' />} Datos del Cliente</h2>
					</div>
					<FormCliente
						handleDatosCliente={handleDatosCliente}
						handleVista={handleVista}
					/>
				</section>

				<section className='vistaCheckout'>
					<Checkout datosProductos={productoFinal} datosCliente={datosCliente} />
				</section>

				<section className='vistaFacturacion'>
					<Facturacion />
				</section>
			</div>
		</div>
	);
};

export default Venta;
