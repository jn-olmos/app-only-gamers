import React from 'react';
import '../../scss/components/Mains/_footer.scss';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='contenedor-utn'>
				<img
					className='logo-utn'
					src={require('../../assets/images/logo-utn.png')}
					alt='logo utn'
				/>
				{/* <p>Tecnictura Superior en Programación</p> */}
			</div>

			<span className='separador'></span>

			<div className='integrantes'>
				<p>Romero Olmos, Julio Nicolás</p>
				<p>Ruiz, Silvio</p>
				<p>Urbanc, Francis</p>
				<p>Yoris, Gonzalo</p>
			</div>
		</footer>
	);
};

export default Footer;
