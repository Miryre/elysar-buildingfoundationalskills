import React from "react";

const About = () => {
  return (
    <div className="container-fluid p-0">
      <div className="row g-0 vh-100">
        {/* LEFT SIDE - purple */}
        <div
          className="col-md-8 text-white d-flex flex-column justify-content-center p-5"
          style={{ backgroundColor: "blueviolet" }}
        >
          {/* Heading row */}
          <div className="row mb-4">
            <div className="col">
              <h1 className="">Why A Creative Technologist?</h1>
            </div>
          </div>

          {/* Paragraphs row - each paragraph in its own col */}
          <div className="row">
            <div className="col-md-3">
              <p>
                My path into tech didn't start with a computer, it started with
                people. For over a decade, I worked in transportation, print
                production, rehabilitation services, retail management, and
                warehouse operations. Every role was different, but the through
                line was always the same: figure out what people need, and build
                something that works for them.
              </p>
            </div>
            <div className="col-md-3">
              <p>
                That instinct led me to design and development. I earned my
                associate's degree in graphic design, then went further, getting
                certified in UX/UI and completing a full-stack development
                program. Coding felt like a natural extension of everything I'd
                already been doing. The tools were new, but the thinking wasn't.
              </p>
            </div>
            <div className="col-md-3">
              <p>
                Today I work at the intersection of design and development as a
                Creative Technologist. I freelance in design and social media
                management, build React applications, and create digital
                experiences that are intuitive, accessible, and grounded in
                empathy.
              </p>
            </div>
            <div className="col-md-3 ">
              <p>
                I'm used to wearing multiple hats, delivering under pressure,
                and keeping the end user at the center of every decision. I
                don't just build interfaces. git I build them for the people who
                will actually use them. That's not a pivot. That's the whole
                point.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - black */}
        <div className="col-md-4 bg-dark text-white d-flex align-items-center justify-content-center">
          <h1>Right Side</h1>
        </div>
      </div>
    </div>
  );
};

export default About;
