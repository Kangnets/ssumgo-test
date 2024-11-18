import { MainLogo } from "../../components/icons/mainLogo";
import { Btn } from "./containers/Btn";

export function MainPage() {
  return (
    <div className="main">
      <div className="main_content ">
        <MainLogo />
        <Btn content="사전예약하기" />
      </div>
    </div>
  );
}
