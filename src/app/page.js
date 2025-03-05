import Navbar from "../components/Navbar";
import Header from "../components/Header";
import About from "../components/About";
import Product from "../components/Product";
import Footer from "../components/Footer";
import Safety from "../components/Safety";
import LabResult from "../components/LabResult";
import Usage from "../components/Usage";

export default function Home() {
  return (
    <main className="bg-gray-50">
      <Navbar />
      <Header />
      <About />
      <Product />
      <LabResult />
      <Safety />
      <Usage />
      <Footer />
    </main>
  );
}
