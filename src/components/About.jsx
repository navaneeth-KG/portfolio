import { skills } from '../constants';
const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen border-none px-16 pt-10 max-sm:px-5 py-5"
    >
      <h1 className="text-5xl font-bold text-secondary mb-5">ABOUT ME</h1>
      <div className="flex max-sm:flex-col">
        <div className="flex-1">
          <h2 className="text-3xl text-white italic">get to know me!</h2>
          <p className="text-slate-gray text-xl max-w-md mt-6">
            Hello there! I'm Navaneeth, a passionate and creative frontend
            developer. My journey into the world of technology began with a
            curiosity to explore the limitless possibilities of code, design,
            and user experience.<br/>I specialize in crafting visually appealing
            and user-friendly interfaces, ensuring seamless and engaging user
            experiences. I am well-versed in HTML, CSS, JavaScript, and React,
            and always eager to stay updated with the latest industry trends.<br/>
            Let's connect and create something extraordinary together!
          </p>
        </div>

        <div className="flex-1">
          <h2 className="text-white text-3xl italic">my exprertise</h2>
          <div className="flex gap-3 mt-6 flex-wrap">
            {skills.map(skill => (
              <div className="bg-[#270082] text-white p-5 rounded-full">
                <h3 className="text-.5xl">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
