import './App.css';
import {Routes, Route} from 'react-router-dom';
import {Layout} from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
         <Route path="preview" element={<div>Preview page</div>}/>
         <Route path="list" element={<div>List page</div>}/>
         <Route path="create" element={<div>Create page</div>}/>
      </Route>
    </Routes>
  );
}

export default App;
