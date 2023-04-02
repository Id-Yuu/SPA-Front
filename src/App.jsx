import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

// Layout
import { Root } from "./Pages/_Layouts";

// Pages
import { Home } from "./Pages/Home";
import { Products } from "./Pages/Products";
import { Pricing } from "./Pages/Pricing";
import { Contact } from "./Pages/Contact";

// You can do this:
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="product" element={<Products />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
