import * as React from "react";
import { useNavigate } from "react-router-dom";

export interface BtnProps extends React.HTMLAttributes<HTMLDivElement> {
  content: string;
}

const Btn = React.forwardRef<HTMLDivElement, BtnProps>(({ content }, ref) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const currentPath = window.location.pathname; // 현재 경로를 가져옴

    if (currentPath === "/finish") {
      // 외부 URL로 이동
      window.location.href = "https://google.com";
    } else {
      // 내부 경로로 이동
      navigate(`/success`);
    }
  };

  return (
    <button className="btn" onClick={handleClick}>
      <div ref={ref} className="btn_content">
        {content}
      </div>
    </button>
  );
});

Btn.displayName = "Btn";

export { Btn };
