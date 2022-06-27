import './scss/components/_app.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './routes/Inicio';
import Productos from './components/CRUD/Productos/Productos';
import Usuarios from './components/CRUD/Usuarios/Usuarios';
import Movimientos from './components/CRUD/Movimientos/Movimientos';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Inicio />}>
						<Route index element={<Productos />} />

						<Route path='/productos' element={<Productos />} />
						<Route path='/usuarios' element={<Usuarios />} />
						<Route path='/movimientos' element={<Movimientos />} />
					</Route>

					<Route
						path='*'
						element={
							<main style={{ padding: '1rem' }}>
								<p>Página no encontrada.</p>
							</main>
						}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
