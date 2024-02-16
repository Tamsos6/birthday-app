import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home';
import Date from './date';
import Cuisine from './cuisine'
import Roulette from './roulette'

const App: React.FC = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
      <Route path="/date" element={<Date />} />
      <Route path="/cuisine" element={<Cuisine />} />
      <Route path="/roulette" element={<Roulette />} />
      <Route path="/japanese" element={<Roulette />} />
		</Routes>
	</BrowserRouter>
);

export default App;