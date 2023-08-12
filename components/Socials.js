//Links 
import Link from "next/link";

//Icons
import {RiGithubLine, RiLinkedinLine, RiFacebookLine, RiWhatsappLine, RiInstagramLine,RiTwitterLine} from 'react-icons/ri'
const Socials = () => {
  return <div className="flex items-center gap-x-5 text-lg">
    <Link href={'https://github.com/NicholasMendez11'} className="hover:text-accent transition-all duration-300"><RiGithubLine/></Link>
    <Link href={'https://www.linkedin.com/in/nicholasgmendez/'} className="hover:text-accent transition-all duration-300"><RiLinkedinLine/></Link>
    <Link href={'https://www.facebook.com/nicholas.mendezbertrand'} className="hover:text-accent transition-all duration-300"><RiFacebookLine/></Link>
    <Link href={'https://wa.me/18098736034?text=Hey%20Nicholas,%20I%20was%20checking%20your%20website%20and%20want%20to%20get%20in%20contact%20with%20you,%20are%20you%20available%20now%3F'} target="_blank" className="hover:text-accent transition-all duration-300"><RiWhatsappLine/></Link>
    <Link href={'https://www.instagram.com/nicholas_meendez/'} className="hover:text-accent transition-all duration-300"><RiInstagramLine/></Link>
    <Link href={'https://twitter.com/Nichola65398750'} className="hover:text-accent transition-all duration-300"><RiTwitterLine/></Link>
  </div>;
};

export default Socials;
