import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import {Layout} from './components/Layout';
import {ListPage, ItemPage, AddItemPage, PreviewPage} from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
         <Route path="preview" element={<PreviewPage />}/>
         <Route path="list" element={<ListPage />}/>
         <Route path="list/:itemId" element={<ItemPage />}/>
         <Route path="create" element={<AddItemPage />}/>
         <Route path="*" element={<Navigate to="/" />}/>
      </Route>
    </Routes>
  );
}

export default App;
