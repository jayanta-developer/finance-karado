import img1 from "../Images/ChooseIcon/img1.png";
import img2 from "../Images/ChooseIcon/img2.png";
import img3 from "../Images/ChooseIcon/img3.png";
import img4 from "../Images/ChooseIcon/img4.png";
import img5 from "../Images/ChooseIcon/img5.png";
import img6 from "../Images/ChooseIcon/img6.png";
import img7 from "../Images/ChooseIcon/img7.png";
import { useTranslation } from "react-i18next";

export const ChooseData = () => {
  const [t, i18n] = useTranslation("global");

  return [
    {
      img: img1,
      text: t("Choose.ChCardHeader1"),
      subText: t("Choose.ChCardSubHeader2"),
    },
    {
      img: img2,
      text: t("Choose.ChCardHeader2"),
      subText: t("Choose.ChCardSubHeader2"),
    },
    {
      img: img3,
      text: t("Choose.ChCardHeader3"),
      subText: t("Choose.ChCardSubHeader2"),
    },
    {
      img: img4,
      text: t("Choose.ChCardHeader4"),
      subText: t("Choose.ChCardSubHeader2"),
    },
    {
      img: img5,
      text: t("Choose.ChCardHeader5"),
      subText: t("Choose.ChCardSubHeader2"),
    },
    {
      img: img6,
      text: t("Choose.ChCardHeader6"),
      subText: t("Choose.ChCardSubHeader2"),
    },
    {
      img: img7,
      text: t("Choose.ChCardHeader7"),
      subText: t("Choose.ChCardSubHeader2"),
    },
    {
      img: img1,
      text: t("Choose.ChCardHeader8"),
      subText: t("Choose.ChCardSubHeader2"),
    },
  ];
};
