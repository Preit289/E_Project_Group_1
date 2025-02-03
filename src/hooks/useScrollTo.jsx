import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollTo = (refs) => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash; // Lấy phần hash từ URL (ví dụ: "#section1")

    if (hash) {
      const elementId = hash.substring(1); // Loại bỏ dấu "#" (ví dụ: "section1")
      const element = refs[elementId]?.current; // Lấy phần tử DOM từ refs

      if (element) {
        element.scrollIntoView({ behavior: "smooth" }); // Cuộn đến phần tử
      }
    }
  }, [location, refs]); // dependencies là location và refs
};

export default useScrollTo;
