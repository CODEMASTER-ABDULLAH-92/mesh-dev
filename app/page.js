import Connect from "@/component/Connect";
import SearchSection from "@/component/SearchBar";
import DSAComponent from "@/component/TechStack";
import Testimonials from "@/component/Testimonial";
export default function Home() {
  return (
   <>
   <SearchSection/>
   {/* <DSAComponent/> */}
     <Testimonials/>
     <Connect/>
   </>
  );
}
