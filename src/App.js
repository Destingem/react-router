import {Route} from "react-router-dom"
import HomePage from "./pages/homepage"
import Secret from "./pages/secret"
import Header from "./components/header";
function App() {
  return (
    <>
    <Header />
    <main>
      <Route exact path="/">
      <HomePage />
    </Route>
    <Route exact path="/secret">
    <Secret />
    </Route>
    </main>
    </>
  );
}

export default App;
