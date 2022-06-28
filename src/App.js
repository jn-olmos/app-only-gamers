import './scss/components/_app.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './routes/Inicio';
import Productos from './components/CRUD/Productos/Productos';
import Usuarios from './components/CRUD/Usuarios/Usuarios';

function App() {
	return (
		<div className='App'>
			{
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Inicio />}>
							<Route index element={<Productos />} />

							<Route path='/productos' element={<Productos />} />
							<Route path='/usuarios' element={<Usuarios />} />
						</Route>

						<Route
							path='*'
							element={
								<main style={{ padding: '2rem' }}>
									<p>Página no encontrada.</p>
								</main>
							}
						/>
					</Routes>
				</BrowserRouter>
			}
		</div>
	);
}

export default App;
