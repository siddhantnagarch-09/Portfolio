import RevealOnScroll from "../Ui/RevealOnScroll";
function About() {
  const skills = ["Html", "c++", "Css", "MySQL", "React"];
  return (
    <section
      id="about"
      className="min-h-screen font-mono flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="max-w-3xl text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center ">
            About Me
          </h2>
          <div className="p-8 mb-6 rounded-xl border-white/10 border-2 hover:-translate-y-1 transition-all ">
            <p className="text-gray-300 mb-5 text-xl">
              I am an aspiring developer eager to learn, create, and grow in the
              tech world. I enjoy experimenting with different technologies,
              building small projects, and improving my skills every day. My
              portfolio reflects my journey of learning, curiosity, and passion
              for building things that work and inspire.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-2xl text-center font-bold mb-8">💼 Skills</h3>
              <div className="flex flex-col justify-center flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-center hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)] transition "
                    key={index}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-2xl text-center font-bold mb-8">
                📚 Education
              </h3>
              <ul className="pl-5 list-disc list-inside text-lg text-gray-300">
                {/* 10th ke liye */}
                <li>
                  <strong>
                    {" "}
                    <em>
                      {" "}
                      10th (MP Board) — Govt Boys High School Completed - &nbsp;
                      [2019-2020]
                    </em>{" "}
                  </strong>
                  <br />
                  <strong className="text-red-800">Score: 78.9%</strong>
                </li>
                {/* 12th ke liye */}
                <li>
                  <strong>
                    {" "}
                    <em>
                      {" "}
                      12th (MP Board) — Govt Boys H.S. School Completed - &nbsp;
                      [2020-2021]
                    </em>{" "}
                  </strong>
                  <br />
                  <strong className="text-red-800">Score: 81.8%</strong>
                </li>
                {/* Graduation ke liye */}
                <li>
                  <strong>
                    {" "}
                    <em>
                      {" "}
                       Graduation — BSC (CS) From Govt Model Science college Gwalior Completed - &nbsp;
                      [2020-2023]
                    </em>{" "}
                  </strong>
                  <br />
                  <strong className="text-red-800">Score: 70.5%</strong>
                </li>
                      <li>
                  <strong>
                    {" "}
                    <em>
                      {" "}
                      Post Graduation — [Currently Pursuing]  Master of Computer Applications (MCA) From Lovely Professional University
                    </em>{" "}
                  </strong>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="p-6 hover:-translate-y-1 transition-all">
            <h3 className="text-2xl text-center font-bold mb-8">
              💻 Work Experience
            </h3>
            <ul className="pl-5 list-disc list-inside text-lg text-gray-300">
              <li>
                <strong className="text-blue-400">
                  <em>Frontend Developer (Freelance / Contract)</em>
                </strong>
                📍
                <br />* Remote | Jan 2024 - Present <br />
                - Built responsive and accessible websites using React.js,
                Next.js, and Tailwind CSS <br />- Developed dynamic user
                interfaces with JavaScript (ES6+), HTML, and CSS. <br />-
                Integrated RESTful APIs and optimized performance for faster
                load times.
              </li>
              <li>
                CS50 , Data Structures, Web Development, Cloud Computing...
              </li>
            </ul>
          </div> */}
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default About;
