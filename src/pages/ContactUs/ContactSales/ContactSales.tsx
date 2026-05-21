import SEO from "../../../component/SEO";
import Footer from "../../../component/Footer/Footer";
import Navbar from "../../../component/Navbar";
import useScrollAnimations from "../../../hooks/useScrollAnimations";
import CTABanner from "../section/CTABanner";
import ContactContent from "./section/ContactContent";
import ContactList from "./section/ContactList";



function ContactSales() {
  useScrollAnimations();

  return (
    <>

      <SEO

        title="Contact Sales | Get a Quote for AI & Software Development"
        description="Contact our sales team to discuss your project requirements. Get a custom quote for AI development, web applications, SaaS platforms and business automation solutions"
        keywords="contact software development company, AI development quote, custom software consultation, web development quote, SaaS development services"
        breadcrumbs={[

          { name: "Home", url: "https://coirei.com" },
          { name: "Contact Sales", url: "https://coirei.com/contact-sales" }
        ]}
      />


      <div className="fixed w-full top-0 z-10">
        <Navbar />
      </div>

      <ContactList />
      <ContactContent />
      <CTABanner />
      <Footer />
    </>
  );
}

export default ContactSales;
