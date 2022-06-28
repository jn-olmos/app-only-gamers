import React from 'react';
import '../../scss/components/CRUD/_navCRUD.scss';
import { NavHashLink } from 'react-router-hash-link';

const NavCRUD = () => {
	return (
		<section className='navCRUD'>
			<NavHashLink className='enlace' to='/productos'>
				Productos
			</NavHashLink>

			<NavHashLink className='enlace' to='/usuarios'>
				Usuarios
			</NavHashLink>
		</section>
	);
};

export default NavCRUD;
