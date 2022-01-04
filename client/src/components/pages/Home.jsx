import { Navbar, Welcome, Footer, Services, Transactions } from "../";

const Home = () => (
    <div className="min-h-screen">
        <div className="gradient-bg-welcome">
            <Navbar />
            <Welcome />
        </div>
        <Services />
        <Transactions />
        <Footer />
    </div>
);

export default Home;
