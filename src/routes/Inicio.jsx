import React from 'react';
import '../scss/Routes/_inicio.scss';
import CRUD from '../components/CRUD/CRUD';
import Estadisticas from '../components/Estadisticas/Estadisticas';
import Footer from '../components/Mains/Footer';
import Header from '../components/Mains/Header';
import NavCRUD from '../components/CRUD/NavCRUD';

const Inicio = () => {
	return (
		<div className='inicio' id='inicio'>
			<Header />

			<Estadisticas />

			<section className='sectionCRUD' id='sectionCRUD'>
				<NavCRUD />
				<CRUD />
			</section>

			<Footer />
		</div>
	);
};

export default Inicio;
