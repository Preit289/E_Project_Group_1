import React, { useEffect, useRef } from "react";
import "../styles/components/Marquee.scss";
const Marquee = () => {
  // Tham chiếu đến phần tử .marquee-ticker và span
  const marqueeTickerRef = useRef(null);
  const spanRef = useRef(null);

  // Tính toán giá trị x và cập nhật vào CSS
  useEffect(() => {
    const marqueeTicker = marqueeTickerRef.current;
    const span = spanRef.current;
    if (marqueeTicker && span) {
      const marqueeWidth = marqueeTicker.offsetWidth; // Chiều rộng của .marquee-ticker
      const x = marqueeWidth; // Thêm 100% width của .marquee-ticker
      // Cập nhật giá trị x vào inline styles
      span.style.setProperty("--x", `${x}px`);
    }
  }, []); // Chỉ chạy một lần sau khi component được render
  return (
    <>
      <div className="MarqueeArea">
        <div className="MarqueeText" ref={marqueeTickerRef}>
          <span ref={spanRef}>Here is scrolling continous ticker sample</span>
        </div>
      </div>
    </>
  );
};

export default Marquee;
