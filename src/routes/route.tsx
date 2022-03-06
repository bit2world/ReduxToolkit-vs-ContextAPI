import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import App from '../App';
import Layout from "../components/Layout";
import UseCallbackPage from "../pages/UseCallbackPage";
import UseStatePage from "../pages/UseStatePage";

const AppRoutes = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/useState" element={<UseStatePage />} />
        <Route path="/useCallback" element={<UseCallbackPage />} />
      </Routes>
    </Layout>
  </BrowserRouter>
)

export default AppRoutes;