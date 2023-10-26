import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ProductDetailPage from "./pages/ProductDetail";

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/" element={<HomePage />} />
//   </Route>
// );

// const router = createBrowserRouter(routeDefinitions);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "products/:productId",
        element: <ProductDetailPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
