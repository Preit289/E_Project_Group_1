import { useEffect } from "react";
import "../styles/pages/Activity.scss";
const Activity = () => {
  // Setup title for page
  useEffect(() => {
    document.title = "Activity | KEANSBURG PARK";
  }, []);
  return (
    <>
      <div className="Activity">
        
      </div>
    </>
  );
};

export default Activity;
