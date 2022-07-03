import './App.css';
import {Routes, Route} from 'react-router-dom';
import {Layout} from './components/Layout';
import {ListPage} from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
         <Route path="preview" element={<div>Preview page</div>}/>
         <Route path="list" element={<ListPage />}/>
         <Route path="list/:itemId" element={<div>Single page</div>}/>
         <Route path="create" element={<div>Create page</div>}/>
      </Route>
    </Routes>
  );
}

export default App;
