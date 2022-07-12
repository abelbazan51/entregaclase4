import "./App.css";

import Navbar from "./components/navbar";
import { ItemlistContainer } from "./containers/ItemListContainer";

const App = () => {
  return (
    <>
      <Navbar />
      <ItemlistContainer />
    </>
  );
};

export default App;
