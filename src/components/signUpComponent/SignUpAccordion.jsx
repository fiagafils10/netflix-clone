import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function SignUpAccordion() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <>
    <div className=" m-10 flex flex-col justify-center items-center gap-5">
      <h2 className=" text-2xl font-extrabold capitalize text-center break-words md:text-4xl md:font-bold lg:text-4xl 2xl:text-5xl text-white my-4">

        Frequently Asked Questions
      </h2>
      <div className=" max-w-[768px]">
      <Accordion open={open === 1} onClick={() => handleOpen(1)}>
        <AccordionHeader className="!text-white/100 text-xl hover:!text-red-500 focus:text-red-500 text-left">

          What is Netflix?
        </AccordionHeader>
        <AccordionBody className=" text-white/100 font-bold ">
          Netflix is a streaming service that offers a wide variety of
          award-winning TV shows, movies, anime, documentaries, and more on
          thousands of internet-connected devices. You can watch as much as you
          want, whenever you want without a single commercial – all for one low
          monthly price. There's always something new to discover and new TV
          shows and movies are added every week!
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} onClick={() => handleOpen(2)}>
        <AccordionHeader className="!text-white/100 text-xl hover:!text-red-500 focus:text-red-500 text-left">

          How much does Netflix cost?
        </AccordionHeader>
        <AccordionBody className=" text-white/100 font-bold">
          Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
          streaming device, all for one fixed monthly fee. Plans range from
          US$3.99 to US$11.99 a month. No extra costs, no contracts.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} onClick={() => handleOpen(3)}>
        <AccordionHeader className="!text-white/100 text-xl hover:!text-red-500 focus:text-red-500 text-left ">
          Is Netflix good for kids?
        </AccordionHeader>
        <AccordionBody className=" !text-white/100 font-bold">
          The Netflix Kids experience is included in your membership to give
          parents control while kids enjoy family-friendly TV shows and movies
          in their own space. Kids profiles come with PIN-protected parental
          controls that let you restrict the maturity rating of content kids can
          watch and block specific titles you don't want kids to see.
        </AccordionBody>
      </Accordion>
      </div>
      
    </div>
    </>
  );
}
