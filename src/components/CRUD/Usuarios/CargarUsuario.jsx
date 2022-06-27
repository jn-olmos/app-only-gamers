import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function CargarUsuario() {
	const { register, handleSubmit } = useForm();

	const onSubmit = ({ apellido, nombre, nickname, password, email, telefono }) => {
		axios
			.post('https://api-onlygamers.herokuapp.com/api/usuarios', {
				apellido,
				nombre,
				nickname,
				password,
				email,
				telefono,
			})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			{/* CAMPO APELLIDO */}
			<div className='cont-apellido'>
				<label className='apellido-label' from='apellido-input'>
					apellido
				</label>
				<input
					className='apellido-input'
					type='text'
					required
					{...register('apellido')}
				></input>
			</div>

			{/* CAMPO NOMBRE */}
			<div className='cont-nombre'>
				<label className='nombre-label' from='nombre-input'>
					nombre
				</label>
				<input
					className='nombre-input'
					type='text'
					required
					{...register('nombre')}
				></input>
			</div>

			{/* CAMPO NICKNAME */}
			<div className='cont-nickname'>
				<label className='nickname-label' from='nickname-input'>
					nickname
				</label>
				<input
					className='nickname-input'
					type='text'
					required
					{...register('nickname')}
				></input>
			</div>

			{/* CAMPO PASSWORD */}
			<div className='cont-password'>
				<label className='password-label' from='password-input'>
					password
				</label>
				<input
					className='password-input'
					type='password'
					required
					{...register('password')}
				></input>
			</div>

			{/* CAMPO EMAIL */}
			<div className='cont-email'>
				<label className='email-label' from='email-input'>
					email
				</label>
				<input className='email-input' type='email' required {...register('email')}></input>
			</div>

			{/* CAMPO TELEFONO */}
			<div className='cont-telefono'>
				<label className='telefono-label' from='telefono-input'>
					telefono
				</label>
				<input
					className='telefono-input'
					type='number'
					required
					{...register('telefono')}
				></input>
			</div>

			<input className='boton-submit' type='submit' value='Cargar' />
		</form>
	);
}
