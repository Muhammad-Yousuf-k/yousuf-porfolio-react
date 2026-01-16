import React, { useState } from 'react'
import SectionTop from '../../MUC/sectionTopHeading001'
import ServiceCardRed from './serviceCardRed'
import ServiceCardBlack from './serviceCardBlack'
import serviceImages from "../../assets/scripts/renderImage";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const servicex = () => {

  const [serviceData, setServiceData] = useState([
    {
      name: "WordPress Customization",
      para: "Professional setup and theme customization for WordPress sites...",
      img: serviceImages.wordpress,
      top: "10vh",
      type: "red",
    },
    {
      name: "SEO & Digital Marketing",
      para: "Helping brands rank higher and reach audiences...",
      img: serviceImages.seo,
      top: "15vh",
      type: "black",
    },
    {
      name: "Graphic Design",
      para: "Creative visuals and brand elements...",
      img: serviceImages.graphicDesign,
      top: "20vh",
      type: "red",
    },
    {
      name: "Web Development",
      para: "Responsive and performance-driven websites...",
      img: serviceImages.webApp,
      top: "25vh",
      type: "black",
    },
    {
      name: "Website Development",
      para: "Responsive and performance-driven websites...",
      img: serviceImages.WebSite,
      top: "30vh",
      type: "red",
    },
    {
      name: "Troubleshooting",
      para: "Expert troubleshooting services...",
      img: serviceImages.troubleshoot,
      top: "35vh",
      type: "black",
    },
  ])


  return (
    <div id='service' className=' flex flex-col items-center gap-5 w-[100wh] '>
      <SectionTop name="Service" />

      {serviceData.map((service, i) =>
        service.type === "red" ? (
          <ServiceCardRed key={i} data={service} />
        ) : (
          <ServiceCardBlack key={i} data={service} />
        )
      )}


    </div>
  )
}

export default servicex