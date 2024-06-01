import s from './Footer.module.css'

export default function Footer() {
    return (
        <div className={s.root}>
            <div className={s.row}>
                <div className={s.col}>
                    Наш инст: @KSinstOfficial
                </div>
                <div className={s.col}>
                    Телефон: 8901
                </div>
                <div className={s.col}>
                    TG: @sdjnfbsdkbjf
                </div>
            </div>

            <div className={s.bottom}>
                Made By AntDesign
            </div>
        </div>
    )
}