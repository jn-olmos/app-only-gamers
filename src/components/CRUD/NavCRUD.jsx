import React from 'react';
import '../../scss/components/CRUD/_navCRUD.scss';

const NavCRUD = () => {
	return (
		<section className='navCRUD'>
			<div className='contenedor-enlaces'>
				<a href='#sectionCRUD'>Productos</a>
				<a href='#sectionCRUD'>Usuarios</a>
				<a href='#sectionCRUD'>Movimientos</a>
			</div>
		</section>
	);
};

export default NavCRUD;
