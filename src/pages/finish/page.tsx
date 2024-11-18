import { MiddleComponent } from "../../components/ui/middleComponent";
import finish from "../../assets/successImg.png";
import { motion } from "framer-motion"; // framer-motion import
import { Btn } from "../main/containers/Btn";
import { useEffect, useState } from "react";

export function Finish() {
  const [visible, setVisible] = useState(false);

  const variants = {
    hidden: { opacity: 0, y: 50 }, // 화면 아래에서 시작
    visible: { opacity: 1, y: 0 }, // 최종 위치
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="main"
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 1.5 }}
      style={{
        position: "absolute",
        left: "50%",
      }}
    >
      <div className="main_content ">
        <MiddleComponent
          img={finish}
          content1="제품이 출시되면"
          content2="바로 알려드릴게요"
        />
      </div>
      {visible && (
        <motion.div
          initial="hidden"
          className="second"
          animate="visible"
          variants={variants}
          transition={{ duration: 1.5 }}
          style={{
            position: "absolute",
            left: "50%",
            top: "99%",
          }}
        >
          <div>
            <div className="above_btn">더 멋진 제품을 위해 🙏</div>
            <Btn content="설문조사 참여하기" />
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
