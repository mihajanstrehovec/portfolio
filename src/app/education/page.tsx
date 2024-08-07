import ContentBox from "../components/ContentBox";
import Footer from "../components/Footer";
import Header from "../components/Header";
import education from "../data/education";

export default function Home() {
  return (
    < >
    
    <div className="min-h-screen">
      <Header colorTheme="education"/>
      <div className="grid columns-1 grid-cols-1 px-3 sm:px-0 sm:w-4/5 mx-auto gap-16 max-w-[1140px] justify-center mt-10 mb-14 3l:px-10">
        {education.map((item) =>
        <div key={item.title} className="">
          <ContentBox 
            title={item.title}
            subTitle={item.subTitle}
            duration={item.duration}
            description={item.description}
            bulletPoints={item.bulletPoints}
            expand={false}/>
        </div>
        )}
      </div>
      {/* <div className="block sm:hidden">
        <Footer/>
      </div> */}

    </div> 
    {/* <div className="hidden sm:block">
      <Footer/>
    </div> */}
    </>
  ); 
}
