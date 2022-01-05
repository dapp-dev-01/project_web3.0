import { Navbar, Welcome, Footer, Services, Transactions, RedeemBlock } from "../";

const Home = () => (
    <div className="min-h-screen">
        <div className="gradient-bg-welcome">
            <Navbar />
            <RedeemBlock />
        </div>
        <Footer />
    </div>
);

export default Home;
