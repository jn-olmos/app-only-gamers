import { useForm } from 'react-hook-form';
import axios from 'axios';
import '../../../scss/components/CRUD/_cargarProducto.scss';

export default function CargarProducto({ handleVista }) {
	const { register, handleSubmit } = useForm();

	const onSubmit = ({
		nombre,
		descripcion,
		stock,
		stockMinimo,
		compra,
		iva,
		utilidad,
		venta,
		categoria,
	}) => {
		axios
			.post('https://api-onlygamers.herokuapp.com/api/productos', {
				nombre: nombre.toLowerCase(),
				descripcion: descripcion.toLowerCase(),
				stock,
				stockMinimo,
				compra,
				iva,
				utilidad,
				venta,
				categoria: categoria.toLowerCase(),
			})
			.then(function (response) {
				console.log(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});

		handleVista('tabla');
	};

	return (
		<form className='form-producto' onSubmit={handleSubmit(onSubmit)}>
			<div className='form-inputs-contenedor'>
				{/* CAMPO NOMBRE */}
				<div className='contenedor-nombre'>
					<label className='nombre-label' from='nombre-input'>
						producto
					</label>
					<input
						className='nombre-input'
						type='text'
						required
						{...register('nombre')}
					></input>
				</div>

				{/* CAMPO DESCRIPCION */}
				<div className='contenedor-descripcion'>
					<label className='descripcion-label' from='descripcion-input'>
						descripcion
					</label>
					<input
						className='descripcion-input'
						type='text'
						required
						{...register('descripcion')}
					></input>
				</div>

				{/* CAMPO STOCK */}
				<div className='contenedor-stock'>
					<label className='stock-label' from='stock-input'>
						stock
					</label>
					<input
						className='stock-input'
						type='number'
						required
						{...register('stock')}
					></input>
				</div>

				{/* CAMPO STOCK MINIMO */}
				<div className='contenedor-stockMinimo'>
					<label className='stockMinimo-label' from='stockMinimo-input'>
						stock minimo
					</label>
					<input
						className='stockMinimo-input'
						type='number'
						required
						{...register('stockMinimo')}
					></input>
				</div>

				{/* CAMPO COMPRA */}
				<div className='contenedor-compra'>
					<label className='contenedor-compra-label' from='contenedor-compra-input'>
						compra
					</label>
					<input
						className='contenedor-compra-input'
						type='number'
						required
						{...register('compra')}
					></input>
				</div>

				{/* CAMPO IVA */}
				<div className='contenedor-iva'>
					<label className='iva-label' from='iva-input'>
						iva
					</label>
					<input
						className='iva-input'
						type='number'
						required
						{...register('iva')}
					></input>
				</div>

				{/* CAMPO UTILIDAD */}
				<div className='contenedor-utilidad'>
					<label className='utilidad-label' from='utilidad-input'>
						utilidad
					</label>
					<input
						className='utilidad-input'
						type='number'
						required
						{...register('utilidad')}
					></input>
				</div>

				{/* CAMPO VENTA */}
				<div className='contenedor-venta'>
					<label className='venta-label' from='venta-input'>
						venta
					</label>
					<input
						className='venta-input'
						type='number'
						required
						{...register('venta')}
					></input>
				</div>

				{/* CAMPO CATEGORIA */}
				<div className='contenedor-categoria'>
					<label className='categoria-label' from='categoria-input'>
						categoria
					</label>

					<select
						className='categoria-input'
						required
						{...register('categoria')}
						defaultValue={'DEFAULT'}
					>
						<option value='DEFAULT' disabled>
							Seleccionar una Categoría
						</option>
						<option>Consolas</option>
						<option>Hardware</option>
						<option>Notebooks</option>
						<option>Perifericos</option>
						<option>Videojuegos</option>
					</select>
				</div>
			</div>

			<input className='boton-submit' type='submit' value='Cargar Producto' />
		</form>
	);
}
