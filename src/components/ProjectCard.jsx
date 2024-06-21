import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';


const ProjectCard = ({ className, description, image, name, gitHub, live }) => {
  const x=useMotionValue(0)
  const y = useMotionValue(0)
  const mouseXspring=useSpring(x)
  const mouseYspring=useSpring(y)
  const rotateX= useTransform(mouseYspring,[-0.5,0.5],['10.5deg','-10.5deg'])
  const rotateY= useTransform(mouseXspring,[-0.5,0.5],['-10.5deg','10.5deg'])
  const handleMouseMove = e => {
    const rect=e.target.getBoundingClientRect();
    const width= rect.width;
    const height=rect.height;
    // console.log(e.clientX, e.clientY)
    const mouseX=e.clientX-rect.left
    const mouseY=e.clientY-rect.top
    // console.log(mouseX,mouseY)
    const xPct =mouseX/width-0.5
    const yPct =mouseY/height-0.5
    // console.log(xPct,yPct)

    x.set(xPct)
    y.set(yPct)


  };
  const handleMouseLeave=()=>{
    x.set(0)
    y.set(0)
  }
  return (
    <div
      className={`flex justify-between items-center mt-20 max-sm:flex-col ${
        className ? className : ''
      }`}
    >
      <div className="text-white">
        <h2 className="text-4xl font-semibold text-secondary">{name}</h2>
        <p className="max-w-md text-xl mt-3 text-slate-400 font-thin">
          {description.split('').map(item => (
            <span className="hover-text">{item}</span>
          ))}
        </p>
        <div className="flex gap-3 text-slate-400 mt-2">
          <a href={gitHub} target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              className="text-2xl  hover:text-white transition-colors"
            />
          </a>
          <a href={live} target="_blank">
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="text-2xl hover:text-white transition-colors"
            />
          </a>
        </div>
      </div>
      <motion.div
        className="w-[45%] max-sm:w-[90%] mt-3 bg-black"
        style={{rotateY,rotateX, transformStyle: 'preserve-3d'}}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img src={image} alt="project-thumbnail "  style={{transform:'translateZ(25px)',transformStyle:'preserve-3d'}} className='object-contain'/>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
