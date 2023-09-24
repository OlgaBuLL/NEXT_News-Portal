import Image from "next/image";

import picture_1 from "@/public/pic-1.png";
import picture_2 from "@/public/pic-2.png";
import picture_3 from "@/public/pic-3.png";
import picture_4 from "@/public/pic-4.png";

import like from "@/public/Smiling-Face-With-Heart-Eyes.svg";
import dislike from "@/public/Pile-Of-Poo.svg";
import angry from "@/public/Pouting-Face.svg";

import "./style.sass";
export default function IncidentsBrief() {
  return (
    <div className="incidents">
      <h3 className="incidents__title">
        <span>Происшествия</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M10 17.5L15 12.5L10 7.5"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </h3>
      <div className="incidents__container">
        {/* новость 1 */}
        <div className="incident">
          <Image src={picture_1} className="incident__picture" alt="Incident" />
          <div className="incident__info">
            <span className="incident__date">1.01.2023, 13:53</span>
            <h4 className="incident__title">
              Фура въехала в группу юных велосипедистов под Выборгом: двое детей
              погибли
            </h4>

            <div className="rating">
              <div className="rating__item">
                <Image src={like} className="emoji" alt="Like" />
                <span>23</span>
              </div>
              <div className="rating__item">
                <Image src={dislike} className="emoji" alt="Dislike" />
                <span>23</span>
              </div>
              <div className="rating__item">
                <Image src={angry} className="emoji" alt="Angry" />
                <span>23</span>
              </div>
              <div className="rating__item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="11"
                  viewBox="0 0 12 11"
                  fill="none"
                >
                  <path
                    d="M6.00016 10.4004C9.31449 10.4004 12 8.16175 12 5.40039C12 2.63903 9.31449 0.400391 6.00016 0.400391C2.68582 0.400391 0.000315701 2.63903 0.000315701 5.40039C0.000315701 6.49698 0.424343 7.51119 1.14259 8.33789C1.04163 8.60494 0.891638 8.84073 0.732989 9.0396C0.594531 9.21573 0.453188 9.35209 0.349345 9.44585C0.297423 9.4913 0.254155 9.52823 0.22531 9.55096C0.210887 9.56232 0.199349 9.57085 0.19358 9.57369L0.187811 9.57937C0.0291611 9.69585 -0.0400679 9.90039 0.023392 10.085C0.0868519 10.2697 0.262809 10.4004 0.461842 10.4004C1.09067 10.4004 1.72527 10.2413 2.25314 10.0453C2.51852 9.94585 2.76659 9.83505 2.98293 9.72141C3.86848 10.1532 4.89826 10.4004 6.00016 10.4004Z"
                    fill="#848484"
                  />
                </svg>
                <span>7</span>
              </div>
              <div className="rating__item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M3.33398 14V3.33333C3.33398 2.96667 3.46465 2.65267 3.72598 2.39133C3.98732 2.13 4.3011 1.99956 4.66732 2H11.334C11.7007 2 12.0147 2.13067 12.276 2.392C12.5373 2.65333 12.6678 2.96711 12.6673 3.33333V14L8.00065 12L3.33398 14Z"
                    fill="#848484"
                  />
                </svg>
                <span>14</span>
              </div>
            </div>
          </div>
        </div>
        {/* новость 2 */}
        <div className="incident">
          <Image src={picture_2} className="incident__picture" alt="Incident" />
          <div className="incident__info">
            <span className="incident__date">1.01.2023, 13:53</span>
            <h4 className="incident__title">
              Семилетняя девочка из Екатеринбурга умерла после купания в Черном
              море
            </h4>

            <div className="rating">
              <div className="rating__item">
                <Image src={like} className="emoji" alt="Like" />
                <span>23</span>
              </div>
              <div className="rating__item">
                <Image src={dislike} className="emoji" alt="Dislike" />
                <span>23</span>
              </div>
              <div className="rating__item">
                <Image src={angry} className="emoji" alt="Angry" />
                <span>23</span>
              </div>
              <div className="rating__item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="11"
                  viewBox="0 0 12 11"
                  fill="none"
                >
                  <path
                    d="M6.00016 10.4004C9.31449 10.4004 12 8.16175 12 5.40039C12 2.63903 9.31449 0.400391 6.00016 0.400391C2.68582 0.400391 0.000315701 2.63903 0.000315701 5.40039C0.000315701 6.49698 0.424343 7.51119 1.14259 8.33789C1.04163 8.60494 0.891638 8.84073 0.732989 9.0396C0.594531 9.21573 0.453188 9.35209 0.349345 9.44585C0.297423 9.4913 0.254155 9.52823 0.22531 9.55096C0.210887 9.56232 0.199349 9.57085 0.19358 9.57369L0.187811 9.57937C0.0291611 9.69585 -0.0400679 9.90039 0.023392 10.085C0.0868519 10.2697 0.262809 10.4004 0.461842 10.4004C1.09067 10.4004 1.72527 10.2413 2.25314 10.0453C2.51852 9.94585 2.76659 9.83505 2.98293 9.72141C3.86848 10.1532 4.89826 10.4004 6.00016 10.4004Z"
                    fill="#848484"
                  />
                </svg>
                <span>7</span>
              </div>
              <div className="rating__item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M3.33398 14V3.33333C3.33398 2.96667 3.46465 2.65267 3.72598 2.39133C3.98732 2.13 4.3011 1.99956 4.66732 2H11.334C11.7007 2 12.0147 2.13067 12.276 2.392C12.5373 2.65333 12.6678 2.96711 12.6673 3.33333V14L8.00065 12L3.33398 14Z"
                    fill="#848484"
                  />
                </svg>
                <span>14</span>
              </div>
            </div>
          </div>
        </div>
        {/* новость 3 */}
        <div className="incident">
          <Image src={picture_3} className="incident__picture" alt="Incident" />
          <div className="incident__info">
            <span className="incident__date">1.01.2023, 13:53</span>
            <h4 className="incident__title">
              Теннис — спорт леди и джентльменов. Как разобраться в нем?
            </h4>

            <div className="rating">
              <div className="rating__item">
                <Image src={like} className="emoji" alt="Like" />
                <span>23</span>
              </div>
              <div className="rating__item">
                <Image src={dislike} className="emoji" alt="Dislike" />
                <span>23</span>
              </div>
              <div className="rating__item">
                <Image src={angry} className="emoji" alt="Angry" />
                <span>23</span>
              </div>
              <div className="rating__item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="11"
                  viewBox="0 0 12 11"
                  fill="none"
                >
                  <path
                    d="M6.00016 10.4004C9.31449 10.4004 12 8.16175 12 5.40039C12 2.63903 9.31449 0.400391 6.00016 0.400391C2.68582 0.400391 0.000315701 2.63903 0.000315701 5.40039C0.000315701 6.49698 0.424343 7.51119 1.14259 8.33789C1.04163 8.60494 0.891638 8.84073 0.732989 9.0396C0.594531 9.21573 0.453188 9.35209 0.349345 9.44585C0.297423 9.4913 0.254155 9.52823 0.22531 9.55096C0.210887 9.56232 0.199349 9.57085 0.19358 9.57369L0.187811 9.57937C0.0291611 9.69585 -0.0400679 9.90039 0.023392 10.085C0.0868519 10.2697 0.262809 10.4004 0.461842 10.4004C1.09067 10.4004 1.72527 10.2413 2.25314 10.0453C2.51852 9.94585 2.76659 9.83505 2.98293 9.72141C3.86848 10.1532 4.89826 10.4004 6.00016 10.4004Z"
                    fill="#848484"
                  />
                </svg>
                <span>7</span>
              </div>
              <div className="rating__item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M3.33398 14V3.33333C3.33398 2.96667 3.46465 2.65267 3.72598 2.39133C3.98732 2.13 4.3011 1.99956 4.66732 2H11.334C11.7007 2 12.0147 2.13067 12.276 2.392C12.5373 2.65333 12.6678 2.96711 12.6673 3.33333V14L8.00065 12L3.33398 14Z"
                    fill="#848484"
                  />
                </svg>
                <span>14</span>
              </div>
            </div>
          </div>
        </div>
        {/* новость 4 */}
        <div className="incident">
          <Image src={picture_4} className="incident__picture" alt="Incident" />
          <div className="incident__info">
            <span className="incident__date">1.01.2023, 13:53</span>
            <h4 className="incident__title">
              Как скейтбординг стал популярным видом спорта и модной
              субкультурой?
            </h4>

            <div className="rating">
              <div className="rating__item">
                <Image src={like} className="emoji" alt="Like" />
                <span>23</span>
              </div>
              <div className="rating__item">
                <Image src={dislike} className="emoji" alt="Dislike" />
                <span>23</span>
              </div>
              <div className="rating__item">
                <Image src={angry} className="emoji" alt="Angry" />
                <span>23</span>
              </div>
              <div className="rating__item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="11"
                  viewBox="0 0 12 11"
                  fill="none"
                >
                  <path
                    d="M6.00016 10.4004C9.31449 10.4004 12 8.16175 12 5.40039C12 2.63903 9.31449 0.400391 6.00016 0.400391C2.68582 0.400391 0.000315701 2.63903 0.000315701 5.40039C0.000315701 6.49698 0.424343 7.51119 1.14259 8.33789C1.04163 8.60494 0.891638 8.84073 0.732989 9.0396C0.594531 9.21573 0.453188 9.35209 0.349345 9.44585C0.297423 9.4913 0.254155 9.52823 0.22531 9.55096C0.210887 9.56232 0.199349 9.57085 0.19358 9.57369L0.187811 9.57937C0.0291611 9.69585 -0.0400679 9.90039 0.023392 10.085C0.0868519 10.2697 0.262809 10.4004 0.461842 10.4004C1.09067 10.4004 1.72527 10.2413 2.25314 10.0453C2.51852 9.94585 2.76659 9.83505 2.98293 9.72141C3.86848 10.1532 4.89826 10.4004 6.00016 10.4004Z"
                    fill="#848484"
                  />
                </svg>
                <span>7</span>
              </div>
              <div className="rating__item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M3.33398 14V3.33333C3.33398 2.96667 3.46465 2.65267 3.72598 2.39133C3.98732 2.13 4.3011 1.99956 4.66732 2H11.334C11.7007 2 12.0147 2.13067 12.276 2.392C12.5373 2.65333 12.6678 2.96711 12.6673 3.33333V14L8.00065 12L3.33398 14Z"
                    fill="#848484"
                  />
                </svg>
                <span>14</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
