import ContactBox from "../components/ContactBox";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
    <div className="min-h-screen">
      <Header colorTheme="contact"/>
      <div className="px-3 sm:px-0 sm:w-4/5 mx-auto gap-16 max-w-[1280px] justify-center mt-10 mb-14 md:px-10">
        <ContactBox theme='contact'/>
      </div>

    </div> 

    
    </>
    
  ); 
}
