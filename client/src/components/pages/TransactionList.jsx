import { Navbar, Welcome, Footer, Services, Transactions } from "..";

const TransactionList = () => (
    <div className="min-h-screen">
        <div className="gradient-bg-welcome">
            <Navbar />
        </div>
        <Transactions />
        <Footer />
    </div>
);

export default TransactionList;
