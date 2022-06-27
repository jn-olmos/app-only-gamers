import axios from 'axios';

export default function getUsuarios() {
	axios.get('https://api-onlygamers.herokuapp.com/api/usuarios').then(({ data }) => {
		return data;
	});
}
