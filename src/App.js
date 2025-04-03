import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ProductPage from './Component/Product-page/ProductPage';
import ReviewPage from './Component/Review-page/ReviewPage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProductPage />
    },
    {
      path: "/review",
      element: <ReviewPage />
    }
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
