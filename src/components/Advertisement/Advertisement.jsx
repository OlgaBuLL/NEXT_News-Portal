import Link from "next/link";
import "./style.sass";

export default function Advertisement() {
  return (
    <div className="advertisement">
      <p className="advertisement__link">
        <Link href="#">Ссылка на сайт</Link>
        <span>РЕКЛАМА</span>
      </p>
      <div className="advertisement__picture">Реклама</div>
      <p className="advertisement__text">
        Текст длинного рекламного объявления
      </p>
    </div>
  );
}
