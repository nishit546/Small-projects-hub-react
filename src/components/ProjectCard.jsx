import { motion } from 'framer-motion';

const ProjectCard = ({ link, icon, title, description, delay, image }) => {
  return (
    <motion.a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: delay }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      {image && (
        <div className="card-image-wrapper">
          <img src={image} alt={title} />
        </div>
      )}
      <div className="card-body">
        <div className="card-icon">{icon}</div>
        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </motion.a>
  );
};

export default ProjectCard;
