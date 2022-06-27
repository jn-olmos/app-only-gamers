import React, { useEffect } from 'react';
import getUsuarios from '../../../services/getUsuarios';

const TablaUsuarios = () => {
	useEffect(() => {
		getUsuarios();
	});

	return <div>TablaUsuarios</div>;
};

export default TablaUsuarios;
