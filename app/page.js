import Connect from "@/component/Connect";
import Learn from "@/component/Learn";
import AboutFeedback from "@/component/Message";
import MessageSandbox from "@/component/Message";
import SearchSection from "@/component/SearchBar";
import DSAComponent from "@/component/TechStack";
import Testimonials from "@/component/Testimonial";
export default function Home() {
  return (
   <>
   <SearchSection/>
   {/* <DSAComponent/> */}
     <Learn/>
     <Testimonials/>
     <Connect/>
{/* <AboutFeedback/> */}
   </>
  );
}
