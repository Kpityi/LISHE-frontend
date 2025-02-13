import React, { useMemo } from 'react';
import './index.scss';
import { nameOfMonth, getExamDays } from '../../../common/helper';

const FEDates = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const daysOfExam = useMemo(() => getExamDays(currentYear), [currentYear]);

  return (
    <div>
      <h6 className="fe-dates__title">Az előző „Horgászvizsga rendje…” fülön leírtak szerinti jelentkezés esetén:</h6>
      <p className="fe-dates__text">
        A MOHOSZ állásfoglalása alapján a következő vizsganapon az alábbi időpontokra lehet jelentkezni!
      </p>
      <div className="fe-dates__exam-dates">
        {daysOfExam.length > 0 ? (
          nameOfMonth.map((month, index) =>
            index >= currentMonth && index > 1 && index < 10 ? (
              <div className="fe-dates__date-container" key={index}>
                <p className="fe-dates__text-title">
                  {currentYear} {month} hónapban:
                </p>
                {daysOfExam
                  .filter((day) => day.month === index)
                  .map((day, idx) => (
                    <React.Fragment key={idx}>
                      <p className="fe-dates__text-bold">
                        {month} {day.day}. (hétfő):
                      </p>
                      <p className="fe-dates__text">17:30 -kor – max. 5 fő a jelentkezés sorrendjében</p>
                    </React.Fragment>
                  ))}
              </div>
            ) : null
          )
        ) : (
          <p className="fe-dates__text-bold">Jelenleg nincs kiírva vizsgaidőpont</p>
        )}
      </div>

      <p className="fe-dates__text-bold">
        Helyszín: LISHE Horgászegyesület – Hódmezővásárhely, Szántó Kovács János utca 87.
      </p>
    </div>
  );
};

export default FEDates;
