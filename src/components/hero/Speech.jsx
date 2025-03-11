import { TypeAnimation } from "react-type-animation";

const Speech = () => {
  return (
    <div
      className="bubbleContainer"
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 2 }}
    >
      <div className="bubble">
        <TypeAnimation
          sequence={[
            1000,
            "<Recent CS Graduate>",
            1000,
            "<Tech Enthusiast>",
            1000,
            "<IT Intern>",
            1000,
            "<Problem Solver>",
            1000,
          
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          // omitDeletionAnimation
          repeat={Infinity}
        />
      </div>

    </div>
  );
};

export default Speech;