import React, { useEffect, useState } from 'react';
import MUIDataTable from 'mui-datatables';
import axios from 'axios';
import '../../../scss/components/CRUD/_tabla.scss';

const TablaProductos = () => {
	const [productos, setProductos] = useState([]);

	const endpoint = 'https://api-onlygamers.herokuapp.com/api/productos';

	const getData = async () => {
		await axios.get(endpoint).then((response) => {
			const data = response.data;
			console.log(data);
			setProductos(data);
		});
	};

	useEffect(() => {
		getData();
	}, []);

	const columns = [
		{
			name: '_id',
			label: 'ID',
		},
		{
			name: 'nombre',
			label: 'Nombre',
		},
		{
			name: 'descripcion',
			label: 'Descripción',
		},
		{
			name: 'categoria',
			label: 'Categoría',
		},
		{
			name: 'stock',
			label: 'Stock',
		},
		{
			name: 'stockMinimo',
			label: 'Stock minimo',
		},
		{
			name: 'compra',
			label: 'Compra',
		},
		{
			name: 'iva',
			label: 'IVA',
		},
		{
			name: 'utilidad',
			label: 'Utilidad',
		},
		{
			name: 'venta',
			label: 'Venta',
		},
	];

	return (
		<MUIDataTable
			title={'Productos'}
			data={productos}
			columns={columns}
			className='tablaCRUD'
			//options = {options}
		/>
	);
};

export default TablaProductos;
