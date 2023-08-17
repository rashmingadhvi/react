import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { appStore } from "./redux/store.ts";
import "bootstrap/dist/css/bootstrap.css";
import { ServiceProvider } from "./comp/common/ServiceProvider.tsx";
import EmployeeSvc from "./service/EmployeeSvc.ts";
import CartoonSvc from "./service/CartoonSvc.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={appStore}>
    <ServiceProvider empSvc={EmployeeSvc} cartoonSvc={CartoonSvc}>
      <App />
    </ServiceProvider>
  </Provider>
);
