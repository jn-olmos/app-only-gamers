import './scss/components/_app.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './routes/Inicio';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Inicio />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
