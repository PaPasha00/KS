import React, { useEffect, useState } from "react";
import s from './Office.module.css';
import { Link, useNavigate } from "react-router-dom";
import { data1, data2 } from "./constants";

const Office = () => {
    const [showCource, setShowCource] = useState(false);
    const [showCourceM1, setShowCourceM1] = useState(false);
    const [showCourceM2, setShowCourceM2] = useState(false);

    return (
        <div className={s.container}>
            <div className={s.My}>
                Мои курсы «gopmiy36@gmail.com»
            </div>

            <div className={s.krs} onClick={() => setShowCource(!showCource)}>
                курс "Backend Java разработчик"  «Индивидуальный»
                <div className={s.potok}>
                    23 поток
                </div>
            </div>

            {
                showCource && (
                    <div className={s.modules}>
                        <div className={s.mod} onClick={() => {
                            setShowCourceM1(!showCourceM1)
                            setShowCourceM2(false)
                        }}>
                            <div className={s.modLeft}>
                                <div className={s.gray}>
                                    1 модуль курса (12 уроков)
                                </div>
                                <div className={s.java}>
                                    Введение в Java
                                </div>
                            </div>
                            <div className={s.modR}>
                                Среднее время прохождения: 2-4 нед.
                            </div>
                        </div>
                        {
                            showCourceM1 && (
                                <div className={s.lessons}>
                                    {data1.map(({ link, text, description, time }) => {
                                        return (
                                            <div className={s.less} key={text}>
                                                <div className={s.left}>
                                                    <div className={s.name}>
                                                        {text}
                                                    </div>
                                                    <div className={s.descrip}>
                                                        {description}
                                                    </div>
                                                </div>
                                                <div className={s.rigth}>
                                                    <div className={s.descrp}>
                                                        {time}
                                                    </div>
                                                    <a target="_blank" href={link} className={s.link}>
                                                        Смотреть
                                                    </a>
                                                </div>

                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        }

                        <div className={s.modBl}
                        //  onClick={() => {
                        //     setShowCourceM2(!showCourceM2)
                        //     setShowCourceM1(false)
                        // }}
                        >
                            <div className={s.modLeft}>
                                <div className={s.gray}>
                                    2 модуль курса (21 урок)
                                </div>
                                <div className={s.java}>
                                    Backend Java
                                </div>
                            </div>
                            <div className={s.modR}>
                                Среднее время прохождения: 2 мес.
                            </div>
                        </div>
                        {
                            showCourceM2 && (
                                <div className={s.lessons}>
                                    {data2.map(({ link, text, description, time }) => {
                                        return (
                                            <div className={s.less} key={text}>
                                                <div className={s.left}>
                                                    <div className={s.name}>
                                                        {text}
                                                    </div>
                                                    <div className={s.descrip}>
                                                        {description}
                                                    </div>
                                                </div>
                                                <div className={s.rigth}>
                                                    <div className={s.descrp}>
                                                        {time}
                                                    </div>
                                                    <a target="_blank" href={link} className={s.link}>
                                                        Смотреть
                                                    </a>
                                                </div>

                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        }
                        <div className={s.modBl} >
                            <div className={s.modLeft}>
                                <div className={s.gray}>
                                    3 модуль курса (3 урока)
                                </div>
                                <div className={s.java}>
                                    Заключение, устройство на работу
                                </div>
                            </div>
                            <div className={s.modR}>
                                Среднее время прохождения: 1 мес.
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Office;