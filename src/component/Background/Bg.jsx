import vi from "./bg_.mp4";
import "./bg.css";

const Background = () => {
  return (
    <>
      <div className="bg_">
        <video preload="auto" loop muted autoPlay className="background">
          <source src={vi} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default Background;
