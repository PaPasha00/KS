import Footer from '../Footer';
import s from './Screen.module.css';

const Screen = () => {

    const data1 = [
        {
            text: 'Основы Python',
            forH: 'Для начинабщих',
            time: '2-3 месяца',
            cost: '17 000 руб.'
        },
        {
            text: 'Python PRO',
            forH: 'Для продвинутых',
            time: '4-5 месяцев',
            cost: '41 000 руб.'
        },
        {
            text: 'Frontend-разработчик JS',
            forH: 'Для начинающих',
            time: '2-3 месяца',
            cost: '29 000 руб.'
        },
        {
            text: 'Frontend-разработчик JS PRO',
            forH: 'Для начинабщих',
            time: '6-7 месяцев',
            cost: '67 000 руб.'
        },
        {
            text: 'Backend-разработчик Java',
            forH: 'Для начинабщих',
            time: '4-5 месяцев',
            cost: '51 000 руб.'
        },
        {
            text: 'Backend-разработчик Java PRO',
            forH: 'Для продвинутых',
            time: '4-5 месяцев',
            cost: '60 000 руб.'
        },
        {
            text: 'Основы сетевых технологий',
            forH: 'Для продвинутых',
            time: '5-6 месяцев',
            cost: '56 000 руб.'
        },
        {
            text: 'Введение в машинное обучение',
            forH: 'Для начинающих',
            time: '3-4 месяца',
            cost: '25 000 руб.'
        },
        {
            text: 'Основы мобильной разработки',
            forH: 'Для начинающих',
            time: '2-3 месяца',
            cost: '20 000 руб.'
        },
    ]

    return (<div
        className={s.container}
    >
        <div className={s.title}>
            <div className={s.mainT}>
                СПЕЦИАЛИЗАЦИИ
            </div>
            <div className={s.secT}>
                Комплексные программы обучения с упором на практику, которые помогут начать карьеру в IT или углубить уже имеющиеся знания.
            </div>
        </div>

        <div className={s.cards}>
            {
                data1.map(({text, forH, time, cost}) => {
                    return (
                        <div className={s.card} key={text}>
                            <img src={'./iconMY.png'} alt="img" className={s.img} />
                            <div className={s.title}>
                                {text}
                            </div>
                            <div className={s.forw}>
                                {forH}
                            </div>
                            <div className={s.time}>
                                {time}
                            </div>
                            <div className={s.cost}>
                                {cost}
                            </div>
                            <a className={s.href} target='_blank' href="https://signal.me/#eu/msapODWVAwLgHsG-XeuqN0wct9YKevEKIEUWKz86-LF7HPI85TdEep-os5_TjsIF">
                                ПОДРОБНЕЕ
                            </a>
                        </div>
                    )
                })
            }
        </div>
        <Footer />
    </div>
    );
}

export default Screen;