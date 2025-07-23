import React from "react";
import "./testimonials.css";
import student_1 from "../../img/student_1.png"; // ✅ Import local image
import unknown from "../../img/unknown.png"; // ✅ Import local image


const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "jay Patel",
      position: "Student",
      message:
        "This website is excellent, easy to use, and helped me a lot during my academic year.",
      image:
        unknown,
    },
    {
      id: 2,
      name: "Aarav Sharma",
      position: "Student",
      message:
        "I was able to revise all key concepts before exams with ease. Highly recommended!",
      image:
        unknown,
    },
    {
      id: 3,
      name: "Manish Thakur",
      position: "Student",
      message:
        "Clean UI, powerful content—this site is a lifesaver for exam prep!",
      image:
        unknown,
    },
    {
      id: 4,
      name: "Rajat Kapoor",
      position: "Student",
      message:
        "Thanks to Timeless Scholars, I scored better this semester than ever before!",
      image:
        unknown,
    },
  ];
  return (
    <section className="testimonials">
      <h2>What our students say</h2>
      <div className="testmonials-cards">
        {testimonialsData.map((e) => (
          <div className="testimonial-card" key={e.id}>
            <div className="student-image">
              <img src={e.image} alt="" />
            </div>
            <p className="message">{e.message}</p>
            <div className="info">
              <p className="name">{e.name}</p>
              <p className="position">{e.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
