import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={style.heading}>Find a better card deal </h2>
      </div>
    </section>
  );
};

export default CardDeal;
