import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import {Layout} from './components/Layout';
import {ListPage, ItemPage} from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
         <Route path="preview" element={<div>Preview page</div>}/>
         <Route path="list" element={<ListPage />}/>
         <Route path="list/:itemId" element={<ItemPage />}/>
         <Route path="create" element={<div>Create page</div>}/>
         <Route path="*" element={<Navigate to="/" />}/>
      </Route>
    </Routes>
  );
}

export default App;
