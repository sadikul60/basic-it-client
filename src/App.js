
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './routes/Routes/Routes';
import ReactTooltip from 'react-tooltip';

function App() {
  return (
    <div className="App">
      <ReactTooltip className='bg-primary fw-bold'></ReactTooltip>
      <RouterProvider router={routes} ></RouterProvider>
    </div>
  );
}

export default App;
