import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion"
import 'react-vertical-timeline-component/style.min.css';
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({experience}) => (
  <VerticalTimelineElement 
  contentStyle={{ background: '#1d1836' , color:'#fff'}}
  contentArrowStyle={{borderRight:'10px solid #232631'}}
  date={experience.date}
  iconStyle={{background:experience.iconBg }}
  icon={
    <div className="flex justify-center items-center w-full h-full">
      <img style={{width: "40px", height: "40px"}}
      src={experience.icon}
      alt={experience.company_name}
      />
    </div>
  }
  >
    <div>
      <h3>{experience.title}</h3>
      <p className="text-secondary ">
        {experience.company_name}</p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
        key={`experience-pointt-${index}`}
        className="text-white-100 text-[14px] pl-1 tracking-wider">
         {point}
        </li>
      )) }

    </ul>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What i have done so far</p>
        <h2 className={styles.sectionHeadText}>Experience</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience,index) => (
            <ExperienceCard key={index} experience={experience}/>
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper (Experience , "work")