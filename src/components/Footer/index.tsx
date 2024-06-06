import s from './Footer.module.css'

export default function Footer() {
    return (
        <div className={s.root}>
            <div className={s.row}>
                <div className={s.col}>
                    Приходите еще!
                </div>
                <div className={s.col}>
                    Телефон: 89962439016
                </div>
                <a href='https://signal.me/#eu/msapODWVAwLgHsG-XeuqN0wct9YKevEKIEUWKz86-LF7HPI85TdEep-os5_TjsIF' className={s.col}>
                    Мы в SIGNAL
                </a>
            </div>

            <div className={s.bottom}>
                Made By AntDesign
            </div>
        </div>
    )
}