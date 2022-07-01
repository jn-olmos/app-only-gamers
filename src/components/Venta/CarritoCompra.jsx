import { useEffect, useState } from 'react';
import { BiTrashAlt, BiPlus, BiMinus } from 'react-icons/bi';
import '../../scss/components/Venta/_carritoCompra.scss';

export default function CarritoProductos({ producto }) {
	const [carritoCompras, setCarritoCompras] = useState([]);
	const [carrito, setCarrito] = useState([]);

	useEffect(() => {
		handlecarrito(producto);
	}, [producto]);

	useEffect(() => {}, [carrito]);

	const handlecarrito = (productox) => {
		if (!productox.id) {
			return null;
		}

		const buscarPorducto = carrito.find((item) => {
			return item.id === producto.id;
		});

		if (buscarPorducto) {
			return null;
		}

		producto.cantidad = 1;

		setCarrito([...carrito, productox]);

		console.log(carrito);
	};

	function agregarProducto(productox) {
		if (productox.cantidad < productox.stock) {
			producto.cantidad += 1;
			setCarrito([...carrito]);
		}
	}

	function restarProducto(productox) {
		if (productox.cantidad > 0) {
			producto.cantidad -= 1;
		} else if (productox.cantidad === 0) {
			sacarProducto(productox);
		}
		setCarrito([...carrito]);
	}

	function sacarProducto(productox) {
		var indice = carrito.indexOf(productox);
		carrito.splice(indice, 1);
		setCarrito([...carrito]);
	}

	// console.log(carrito);

	return (
		<section className='carrito-compra'>
			<h2 className='carrito-compra-titulo'>Carrito compras</h2>

			<div className='carrito-compra-contenedor-productos'>
				{carrito.map((producto) => {
					return (
						<div key={producto.id} className='contenedor-producto-bajo-stock'>
							<h4 className='titulo-producto'>{producto.nombre}</h4>
							<p className='texto-producto producto-stock-minimo'>
								precio <b>{producto.venta}</b>
							</p>
							<p className='texto-producto producto-stock-actual'>
								Cantidad: <b>{producto.cantidad}</b>
							</p>

							<button
								className='boton-agregar'
								onClick={() => agregarProducto(producto)}
							>
								<BiPlus />
							</button>
							<button
								className='boton-restar'
								onClick={() => restarProducto(producto)}
							>
								<BiMinus />
							</button>
							<button
								className='boton-eliminar'
								onClick={() => sacarProducto(producto)}
							>
								<BiTrashAlt />
							</button>
						</div>
					);
				})}
			</div>
			{carrito ? <button>Comprar</button> : null}
		</section>
	);
}
