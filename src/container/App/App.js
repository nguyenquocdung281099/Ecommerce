import React, { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./app.scss";
import Header from "../../component/header/Header";
import routerAdmin from "../../routerAdmin";
import router from "../../router";
import Footer from "../../component/footer/Footer";
import SignupModal from "../../modal/signupModal/SignupModal";
import LoginNowModal from "../../modal/loginNowModal/LoginNowModal";
import { checkStorage } from "../../redux";
import Menu from "../../Admin/Container/menu/Menu";
import '../../i18next';

function App() {
  const dispatch = useDispatch();
  const [status, setStatus] = useState(true);
  const [type, setType] = useState("user");
  const user = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(checkStorage());
  }, [dispatch]);
  useEffect(() => {
    if (user.ready) {
      setStatus(user.status);
    }
    if (typeof user.data.Type !== undefined) {
      setType(user.data.Type);
    }
  }, [user]);
  const loadRouter = useMemo(() => {
    let result = (
      <Switch>
        {router(status).map((item, index) => (
          <Route
            key={index}
            path={item.path}
            exact={item.exact ? true : false}
            component={item.main}
          />
        ))}
      </Switch>
    );
    return result;
  }, [status]);
  const loadRouterAdmin = useMemo(() => {
    let result = (
      <Switch>
        {routerAdmin.map((item, index) => (
          <Route
            key={index}
            path={item.path}
            exact={item.exact ? true : false}
            component={item.main}
          />
        ))}
      </Switch>
    );
    return result;
  }, []);
  const loadPage = () => {
    return (
      <>
        {type === "admin" ? (
          <Router>
            <div className="admin">
              <Menu>{loadRouterAdmin}</Menu>
            </div>
          </Router>
        ) : (
          <Router>
            <div className="App">
              <LoginNowModal />
              <SignupModal />
              <Header />
              {loadRouter}
              <Footer />
            </div>
          </Router>
        )}
      </>
    );
  };
  return <>{user.ready ? loadPage() : <div></div>}</>;
}

export default App;