import { GraduationCap, Cpu, Code2 } from "lucide-react";

const Resume = () => {
  const techLanguages = [
    {
      name: "Python",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
    },
    {
      name: "C++",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/330px-ISO_C%2B%2B_Logo.svg.png",
    },
    {
      name: "Javascript",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/JavaScript_shield_logo_%28no_text%29.svg/1280px-JavaScript_shield_logo_%28no_text%29.svg.png?20250422125247",
    },
  ];
  const frontendStack = [
    {
      name: "HTML",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Devicon-html5-plain.svg/1280px-Devicon-html5-plain.svg.png?20190106214352",
    },
    {
      name: "CSS",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Official_CSS_Logo.svg/250px-Official_CSS_Logo.svg.png",
    },
    {
      name: "Javascript",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/JavaScript_shield_logo_%28no_text%29.svg/1280px-JavaScript_shield_logo_%28no_text%29.svg.png?20250422125247",
    },
    {
      name: "Tailwind",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    },
    {
      name: "React",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/960px-React-icon.svg.png",
    },
    {
      name: "Vite",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/960px-Vitejs-logo.svg.png?20220412224743",
    },
    {
      name: "Bootstrap",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png?20210507000024",
    },
  ];
  const backendStack = [
    {
      name: "Django",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Django_logo.svg/960px-Django_logo.svg.png?20101010121142",
    },
    {
      name: "Flask",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flask_logo.svg/640px-Flask_logo.svg.png",
    },
  ];
  const aimlStack = [
    {
      name: "Open Cv",
      img: "https://raw.githubusercontent.com/wiki/opencv/opencv/logo/OpenCV_logo_no_text.png",
    },
    {
      name: "Pandas",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Pandas_mark.svg/960px-Pandas_mark.svg.png?20200210000431",
    },
    {
      name: "Numpy",
      img: "https://images.seeklogo.com/logo-png/39/2/numpy-logo-png_seeklogo-398690.png",
    },
    {
      name: "Matplotlib",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Created_with_Matplotlib-logo.svg/250px-Created_with_Matplotlib-logo.svg.png",
    },
    {
      name: "TensorFlow",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/1200px-Tensorflow_logo.svg.png",
    },
  ];
  const toolsStack = [
    {
      name: "Git",
      img: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
    },
    {
      name: "Github",
      img: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
    },
    {
      name: "Linux",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1920px-Tux.svg.png",
    },
    {
      name: "Vercel",
      img: "https://static.wikia.nocookie.net/logopedia/images/a/a7/Vercel_favicon.svg/",
    },
  ];
  return (
    <section
      id="resume"
      className="bg-[#f2f1eb] w-full min-h-screen py-24 px-6 md:px-12 lg:px-24 flex items-start justify-center"
    >
      <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row gap-10 items-start mt-10">
        <div className="bg-[#e9e8d8] w-full lg:w-2/3 border-4 border-[#818e82] rounded-3xl p-8 md:p-12 flex flex-col hover:border-[#4d574d] transition-all duration-500 shadow-md">
          <div className="space-y-16">
            <div>
              <h3 className="text-2xl font-bold text-[#3f4f3f] mb-8 flex items-center gap-2">
                <Cpu size={24} className="text-[#818e82]" /> Technical Arsenal
              </h3>
              <h4 className="text-[#2d2d2b] leading-relaxed text-[21px] mb-6">
                Languages
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {techLanguages.map((tech) => (
                  <div
                    key={tech.name}
                    className="group relative bg-[#f2f1eb]/50 border-2 border-[#818e82]/20 rounded-[2rem] p-6 flex flex-col items-center justify-center hover:bg-[#3f4f3f] transition-all duration-500 shadow-sm"
                  >
                    <div className="w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <img
                        src={tech.img}
                        alt={tech.name}
                        className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all"
                      />
                    </div>
                    <span className="font-bold text-xs uppercase tracking-[0.2em] mt-4 text-[#6b776b] group-hover:text-[#e9e8d8]">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
              <h4 className="text-[#2d2d2b] leading-relaxed text-[21px] mb-6 mt-6">
                Frontend Development
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {frontendStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="group relative bg-[#f2f1eb]/50 border-2 border-[#818e82]/20 rounded-[2rem] p-6 flex flex-col items-center justify-center hover:bg-[#3f4f3f] transition-all duration-500 shadow-sm"
                  >
                    <div className="w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <img
                        src={tech.img}
                        alt={tech.name}
                        className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all"
                      />
                    </div>
                    <span className="font-bold text-xs uppercase tracking-[0.2em] mt-4 text-[#6b776b] group-hover:text-[#e9e8d8]">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
              <h4 className="text-[#2d2d2b] leading-relaxed text-[21px] mb-6 mt-6">
                Backend Development
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {backendStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="group relative bg-[#f2f1eb]/50 border-2 border-[#818e82]/20 rounded-[2rem] p-6 flex flex-col items-center justify-center hover:bg-[#3f4f3f] transition-all duration-500 shadow-sm"
                  >
                    <div className="w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <img
                        src={tech.img}
                        alt={tech.name}
                        className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all"
                      />
                    </div>
                    <span className="font-bold text-xs uppercase tracking-[0.2em] mt-4 text-[#6b776b] group-hover:text-[#e9e8d8]">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
              <h4 className="text-[#2d2d2b] leading-relaxed text-[21px] mb-6 mt-6">
                AI/ML & Data Science
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {aimlStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="group relative bg-[#f2f1eb]/50 border-2 border-[#818e82]/20 rounded-[2rem] p-6 flex flex-col items-center justify-center hover:bg-[#3f4f3f] transition-all duration-500 shadow-sm"
                  >
                    <div className="w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <img
                        src={tech.img}
                        alt={tech.name}
                        className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all"
                      />
                    </div>
                    <span className="font-bold text-xs uppercase tracking-[0.2em] mt-4 text-[#6b776b] group-hover:text-[#e9e8d8]">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
              <h4 className="text-[#2d2d2b] leading-relaxed text-[21px] mb-6 mt-6">
                Tools & Technologies
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {toolsStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="group relative bg-[#f2f1eb]/50 border-2 border-[#818e82]/20 rounded-[2rem] p-6 flex flex-col items-center justify-center hover:bg-[#3f4f3f] transition-all duration-500 shadow-sm"
                  >
                    <div className="w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <img
                        src={tech.img}
                        alt={tech.name}
                        className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all"
                      />
                    </div>
                    <span className="font-bold text-xs uppercase tracking-[0.2em] mt-4 text-[#6b776b] group-hover:text-[#e9e8d8]">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-[#3f4f3f] flex items-center gap-2">
                <Code2 size={24} className="text-[#818e82]" /> Work History
              </h3>
              <div className="border-l-4 border-[#818e82] pl-8 space-y-12">
                <div className="relative">
                  <div className="absolute -left-[38px] top-1.5 w-4 h-4 bg-[#818e82] rounded-full ring-4 ring-[#e9e8d8]" />
                  <h4 className="text-xl font-bold text-[#2d2d2b]">
                    Independent Developer
                  </h4>
                  <p className="text-[#818e82] font-black text-xs uppercase tracking-widest mt-1">
                    2018 — PRESENT
                  </p>
                  <p className="mt-4 text-[#4a4a48] leading-relaxed italic border-l-2 border-[#818e82]/20 pl-4">
                    Architecting end-to-end Python solutions, including custom
                    AI voice engines and real-time computer vision systems using
                    OpenCV.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8 pb-4">
              <h3 className="text-2xl font-bold text-[#3f4f3f] flex items-center gap-2">
                <GraduationCap size={24} className="text-[#818e82]" /> Academic
                Journey
              </h3>
              <div className="border-l-4 border-[#818e82] pl-8 space-y-12">
                <div className="relative">
                  <div className="absolute -left-[38px] top-1.5 w-4 h-4 bg-[#818e82] rounded-full ring-4 ring-[#e9e8d8]" />
                  <h4 className="text-xl font-bold text-[#2d2d2b]">
                    B.Tech - Computer Science and Artificial Intelligence
                  </h4>
                  <p className="text-[#818e82] font-black text-xs uppercase tracking-widest mt-1">
                    2025 - 2029 (Pursuing)
                  </p>
                  <p className="mt-4 text-[#4a4a48] leading-relaxed italic border-l-2 border-[#818e82]/20 pl-4">
                    Newton School of Technology (Rishihood University), Sonipat,
                    Haryana
                  </p>
                </div>
              </div>
              <div className="border-l-4 border-[#818e82] pl-8 space-y-12">
                <div className="relative">
                  <div className="absolute -left-[38px] top-1.5 w-4 h-4 bg-[#818e82] rounded-full ring-4 ring-[#e9e8d8]" />
                  <h4 className="text-xl font-bold text-[#2d2d2b]">
                    Class 12th CBSE
                  </h4>
                  <p className="text-[#818e82] font-black text-xs uppercase tracking-widest mt-1">
                    2024 - 2025
                  </p>
                  <p className="mt-4 text-[#4a4a48] leading-relaxed italic border-l-2 border-[#818e82]/20 pl-4">
                    D.C. Model Sr. Sec. School, Firozpur Cantt, Punjab <br />
                    Result : 86.8%
                  </p>
                </div>
              </div>
              <div className="border-l-4 border-[#818e82] pl-8 space-y-12">
                <div className="relative">
                  <div className="absolute -left-[38px] top-1.5 w-4 h-4 bg-[#818e82] rounded-full ring-4 ring-[#e9e8d8]" />
                  <h4 className="text-xl font-bold text-[#2d2d2b]">
                    Class 10th CBSE
                  </h4>
                  <p className="text-[#818e82] font-black text-xs uppercase tracking-widest mt-1">
                    2022 - 2023
                  </p>
                  <p className="mt-4 text-[#4a4a48] leading-relaxed italic border-l-2 border-[#818e82]/20 pl-4">
                    Dass and Brown World School, Firozpur, Punjab <br />
                    Result : 94.8%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:sticky lg:top-32 bg-[#e9e8d8] w-full lg:w-1/3 border-4 border-[#818e82] rounded-3xl p-8 flex flex-col hover:border-[#4d574d] transition-all duration-500 shadow-md">
          <h2 className="text-[#3f4f3f] text-4xl font-bold flex items-center gap-2 mb-8 border-b-4 border-[#818e82] w-fit">
            Resume
          </h2>
          <p className="text-[#4a4a48] leading-relaxed text-lg mb-12">
            A developer's journey through AI, automation, and full-stack
            engineering. I specialize in turning complex data problems into
            clean, interactive digital solutions.
          </p>

          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-[14px] font-black text-[#818e82] uppercase tracking-widest ml-1">
                Current Focus
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Data Structures and Algorithms",
                  "Full-Stack",
                  "Optimization",
                  "Web Scraping",
                  "Design",
                ].map((pith) => (
                  <span
                    key={pith}
                    className="px-3 py-1 bg-[#3f4f3f] text-[#e9e8d8] rounded-lg text-[14px] font-bold"
                  >
                    {pith}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
