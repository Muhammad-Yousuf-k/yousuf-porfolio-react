import React from "react";
import SectionTop from "../../MUC/sectionTopHeading001";
import TestimonialCard from "./TestimonialCard";

const testimonialsData = [
    {
        name: "Syed Umer",
        email: "syedumer@gmail.com",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia non ipsam quo assumenda, velit expedita veniam animi qui doloremque aperiam est aspernatur facilis ea provident mollitia inventore asperiores accusamus voluptatibus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia non ipsam quo assumenda, velit expedita veniam animi qui doloremque aperiam est aspernatur facilis ea provident mollitia inventore asperiores accusamus voluptatibus.",
        img: "/assets/icon/burger.svg",
    },
    {
        name: "Jane Doe",
        email: "jane.doe@example.com",
        text: "This service is amazing! I highly recommend it to anyone looking for quality and professionalism.",
        img: "/assets/icon/burger.svg",
    },
    {
        name: "John Smith",
        email: "john.smith@example.com",
        text: "Absolutely wonderful experience! The team is skilled, responsive, and friendly.",
        img: "/assets/icon/burger.svg",
    },
    {
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        text: "Fantastic! I am so happy with the results, and the support was top-notch.",
        img: "/assets/icon/burger.svg",
    },
];

const Testimonial = () => {
    return (
        <section
            id="testimonial"
            className="flex flex-col justify-center items-center w-full py-20 bg-gray-50"
        >
            <SectionTop name="Testimonials" />

            {/* Carousel */}
            <div className="flex gap-5 w-[80%] overflow-auto scroll-none relative">
                {testimonialsData.map((testimonial, idx) => (
                    <div
                        key={idx}
                        className="caru_spin flex-shrink-0 snap-center  "
                    >
                        <TestimonialCard {...testimonial} />
                    </div>
                ))}
                {testimonialsData.map((testimonial, idx) => (
                    <div
                        aria-hidden
                        key={idx}
                        className="caru_spin flex-shrink-0 snap-center"
                    >
                        <TestimonialCard {...testimonial} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonial;
