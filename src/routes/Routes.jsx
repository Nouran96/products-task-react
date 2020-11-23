import { Switch, Route, Redirect } from "react-router-dom";
import ProductsList from "../containers/ProductsList/ProductsList";
import ProductDetails from "../containers/ProductDetails/ProductDetails";

const Routes = () => {
  return (
    <Switch>
      <Route path="/products" exact component={ProductsList} />
      <Route path="/products/:id" component={ProductDetails} />
      <Redirect from="/" to="/products" />
      <Route path="*" component={ProductsList} />
    </Switch>
  );
};

export default Routes;
