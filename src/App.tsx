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
			<Route path="/birthday-app/" element={<Home />} />
			<Route path="/birthday-app/date" element={<Date />} />
			<Route path="/birthday-app/cuisine" element={<Cuisine />} />
			<Route path="/birthday-app/roulette" element={<Roulette />} />
	  		<Route path="/birthday-app/Asian"element={<Asian />} />
			<Route path="/birthday-app/Australian"element={<Australian />} />
			<Route path="/birthday-app/European"element={<European />} />
			<Route path="/birthday-app/Other"element={<Other />} />
			<Route path="/birthday-app/final"element={<Final />} />
		</Routes>
	</BrowserRouter>
);

export default App;