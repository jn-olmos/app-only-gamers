import { useState } from 'react';
import { useForm } from 'react-hook-form';
import TipoFactura from './TipoFactura.jsx';

export default function FormCliente({ handleDatosCliente }) {
	const [facturaTipo, setFacturaTipo] = useState();
	const [razonSocial, setRazonSocial] = useState();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		let datosCliente = {
			nombre: data.nombre,
			cuit: data.cuit,
			provincia: data.provincia,
			domicilioComercial: data.domicilioComercial,
			razonSocial: razonSocial,
			tipoFactura: facturaTipo,
			metodoDePago: data.metodoDePago,
		};
		handleDatosCliente(datosCliente)
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className='contenedor-nombre'>
				<label>nombre</label>
				<input
					className='nombre-input'
					{...register('nombre', { required: true, maxLength: 30 })}
				></input>
				{errors.nombre?.type === 'required' && <p>Es necesario cargar el campo "Nombre"</p>}
			</div>

			<div className='contenedor-cuit'>
				<label>cuit</label>
				<input
					className='cuit-input'
					{...register('cuit', { required: true, maxLength: 11, minLength: 11 })}
				></input>
				{errors.cuit?.type === 'required' && <p>Es necesario cargar el campo "Cuit"</p>}
				{errors.cuit?.type === 'maxLength' && <p>El "Cuit" debe ser de 11 digitos</p>}
				{errors.cuit?.type === 'minLength' && <p>El "Cuit" debe ser de 11 digitos</p>}
			</div>

			<div className='contenedor-provincia'>
				<label>provincia</label>
				<input
					className='provincia-input'
					{...register('provincia', { required: true })}
				></input>
				{errors.cuit?.type === 'required' && (
					<p>Es necesario cargar el campo "provincia"</p>
				)}
			</div>

			<div className='contenedor-domicilioComercial'>
				<label>domicilio comercial</label>
				<input
					className='domicilioComercial-input'
					{...register('domicilioComercial', { required: true })}
				></input>
				{errors.cuit?.type === 'required' && (
					<p>Es necesario cargar el campo "Domicilio Comercial"</p>
				)}
			</div>

			<TipoFactura
				facturaTipoPADRE={facturaTipo}
				setFacturaTipoPADRE={setFacturaTipo}
				razonSocialPADRE={razonSocial}
				setRazonSocialPADRE={setRazonSocial}
			/>

			<div className='contenedor-metodoDePago'>
				<label>metodo de pago</label>
				<div className='contenedor-metodoDePago-opciones'>
					<input
						className='metodoDePago-Contado-input'
						type='radio'
						value='contado'
						{...register('metodoDePago')}
						checked
					></input>
					<label className='metodoDePago-contado-label' from='metodoDePago-Contado-input'>
						contado
					</label>

					<input
						className='metodoDePago-tarjeta-input'
						type='radio'
						value='tarjeta'
						{...register('metodoDePago')}
					></input>
					<label className='metodoDePago-tarjeta-label' from='metodoDePago-tarjeta-input'>
						tarjeta
					</label>

					<input
						className='metodoDePago-transferencia-input'
						type='radio'
						value='transferencia'
						{...register('metodoDePago')}
					></input>
					<label
						className='metodoDePago-transferencia-label'
						from='metodoDePago-transferencia-input'
					>
						transferencia
					</label>
				</div>
			</div>

			<input type='submit' value='enviar'></input>
		</form>
	);
}
