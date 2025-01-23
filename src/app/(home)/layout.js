import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function HomeLayout({ children }) {
  return (
    <section className="min-h-screen">
      <Navbar />
      <section className="min-h-[70vh]">{children}</section>
      <Footer/>
    </section>
  );
}
