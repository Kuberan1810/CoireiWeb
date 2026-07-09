import { Link } from "react-router-dom";

import SEO from "../../component/SEO";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer/Footer";

function NotFound() {
  return (
    <div className="bg-white  flex flex-col">
      <SEO
        title="Page Not Found | Coirei"
        description="The page you are looking for could not be found."
      />

      <div className="fixed w-full top-0 z-50">
        <Navbar />
      </div>

      <main className="flex-1 flex items-center justify-center min-h-screen ">
        <section className="max-w-3xl text-center">
          <p className="text-[100px] font-semibold uppercase tracking-[0.24em] text-[#006fb2]">
            404
          </p>
          <h1 className="mt-5 text-4xl font-semibold text-[#101828] sm:text-5xl">
            This page is out of range.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#5A5A5C] sm:text-lg">
            The link may be broken, or the page may have moved. Head back home
            and continue exploring Coirei.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link className="button primary hover:opacity-90 duration-300" to="/">
              Go home
            </Link>
            <Link
              className="button border border-[#d0d5dd] bg-white text-[#1b1a1f] hover:bg-gray-50 duration-300"
              to="/contact"
            >
              Contact us
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default NotFound;
