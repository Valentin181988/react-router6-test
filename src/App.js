import './App.css';
import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { PageA, PageB } from './pages';

const loader = componentName => {
  return lazy(() => 
    import(`./pages/${componentName}`).then(module => ({ 
    default: module[componentName],
    }))
  );
};

const ListPage = loader('ListPage');
const ItemPage = loader('ItemPage');
const AddItemPage = loader('AddItemPage');
const PreviewPage = loader('PreviewPage');

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="preview" element={<PreviewPage />}/>
          <Route path="list" element={<ListPage />}/>
          <Route path="list/:itemId" element={<ItemPage />}/>
          <Route path="create" element={<AddItemPage />}/>
          <Route path="page-a" element={<PageA />}/>
          <Route path="page-b" element={<PageB />}/>
          <Route path="*" element={<Navigate to="/" />}/>
        </Route>
      </Routes>
  );
}

export default App;
