import { Navbar, Welcome, Footer, Services, Transactions } from "./components";
import { Home, About, TransactionList, Redeem } from "./components/pages";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Outlet
} from "react-router-dom";

const GuestLayout = () => {
  return (
    <div>
      <h1>This is the Guest Layout Page</h1>
      <Outlet />
    </div>
  );
};


export default function App() {
  return (
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="redeem" element={<Redeem />} />
            <Route path="transactions" element={<TransactionList />} />
            {/* <Route path="ipfs" element={<FileIpfs />} /> */}
          </Routes>
      </Router>
  );
}

// export default App;
