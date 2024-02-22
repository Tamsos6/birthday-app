import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home';
import Date from './date';
import Cuisine from './cuisine'
import Roulette from './roulette'
import Asian from './Asian'
import Australian from './Australian'
import European from './European'
import Other from './Other'
import Final from './final'

const App: React.FC = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/date" element={<Date />} />
			<Route path="/cuisine" element={<Cuisine />} />
			<Route path="/roulette" element={<Roulette />} />
	  		<Route path="/Asian"element={<Asian />} />
			<Route path="/Australian"element={<Australian />} />
			<Route path="/European"element={<European />} />
			<Route path="/Other"element={<Other />} />
			<Route path="/final"element={<Final />} />
		</Routes>
	</BrowserRouter>
);

export default App;