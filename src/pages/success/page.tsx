import { motion } from "framer-motion"; // framer-motion import
import { MiddleComponent } from "../../components/ui/middleComponent";
import clap from "../../assets/clap.webp";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Success() {
  const [visible, setVisible] = useState(false);

  const variants = {
    hidden: { opacity: 0, y: 50 }, // 화면 아래에서 시작
    visible: { opacity: 1, y: 0 }, // 최종 위치
  };

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/finish");
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="main"
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 1 }}
      style={{
        position: "absolute",
        left: "50%",
      }}
    >
      <div className="main_content">
        <MiddleComponent
          img={clap}
          content1="사전예약이 "
          content2="완료되었어요"
        />
      </div>
    </motion.div>
  );
}
