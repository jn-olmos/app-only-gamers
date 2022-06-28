import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../../scss/components/CRUD/_tablaUsuarios.scss';

const TablaUsuarios = () => {
	const [usuarios, setUsuarios] = useState([]);

	const endpoint = 'https://api-onlygamers.herokuapp.com/api/usuarios';

	const getData = async () => {
		await axios.get(endpoint).then((response) => {
			const data = response.data;
			setUsuarios(data);
		});
	};

	useEffect(() => {
		getData();
	}, []);

	function eliminarUsuario(id) {
		axios.delete(endpoint + '/' + id).then((deleted) => {
			axios.get(endpoint).then((response) => {
				getData();
			});
		});
	}

	function editarUsuario(usuario) {
		alert('aqui va un modal para editar un USUARIO');
	}

	return (
		<table className='tabla-usuario'>
			<thead>
				<tr>
					<th className='id-column'>compra</th>
					<th className='nombre-column'>nombre</th>
					<th className='apellido-column'>ID</th>
					<th className='nickname-column'>descripcion</th>
					<th className='password-column'>categoria</th>
					<th className='email-column'>stock</th>
					<th className='telefono-column'>stock min.</th>
				</tr>
			</thead>

			<tbody>
				{usuarios.map((usuario) => (
					<tr key={usuario.id}>
						<td>{usuario.id.slice(-5)}</td>
						<td>{usuario.nombre}</td>
						<td>{usuario.apellido}</td>
						<td>{usuario.nickname}</td>
						<td>{usuario.password}</td>
						<td>{usuario.email}</td>
						<td>{usuario.compra}</td>
						<td>{usuario.telefono}</td>
						<td className='boton-column'>
							<button className='boton-editar' onClick={() => editarUsuario(usuario)}>
								Editar
							</button>
						</td>
						<td className='boton-column'>
							<button
								className='boton-usuario'
								onClick={() => eliminarUsuario(usuario.id)}
							>
								Eliminar
							</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default TablaUsuarios;
