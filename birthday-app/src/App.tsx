import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home';
import Date from './date';

const App: React.FC = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
      <Route path="/date" element={<Date />} />
		</Routes>
	</BrowserRouter>
);

export default App;


  // const resetButton = () => {
  //   setButtonPosition(initialPosition);
  // };

  // useEffect(() => {
  //   resetButton();
  // }, []);