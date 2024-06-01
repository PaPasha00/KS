import React from "react";
import s from './../Office/Office.module.css';

const OfficeFake = () => {

    return (
        <div className={s.container}>
            <div className={s.My}>
                Мои курсы
            </div>

            <div className={s.krs}>
                Нет доступных курсов
                <div className={s.potok}>
                    Failed
                </div>
            </div>
        </div>
    );
}

export default OfficeFake;