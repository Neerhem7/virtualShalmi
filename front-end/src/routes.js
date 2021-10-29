import {Route, Component} from "react-router-dom";

import VendorLayout from "./layout/VendorLayout";
import AdminLayout from "./layout/AdminLayout";
const VendorLayoutRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={matchProps => (
          <VendorLayout>
            <Component {...matchProps} />
          </VendorLayout>
        )}
      />
    );
  };
const AdminLayoutRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={matchProps => (
          <AdminLayout>
            <Component {...matchProps} />
          </AdminLayout>
        )}
      />
    );
  };

export default VendorLayoutRoute;
export { AdminLayoutRoute};

