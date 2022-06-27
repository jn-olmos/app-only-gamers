import './scss/components/_app.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './routes/Inicio';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Inicio />}>
						<Route index element={<Inicio />} />
						<Route path='productos' />
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
