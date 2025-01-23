import Footer from "@/components/Footer";
import NavbarServer from "@/components/NavbarServer";


export default function HomeLayout({ children }) {
  return (
    <section className="min-h-screen">
      <NavbarServer />
      <section className="min-h-[70vh]">{children}</section>
      <Footer/>
    </section>
  );
}
