import React, { useEffect } from "react";
import classes from './HeaderMain.module.css';
import { Link } from "react-router-dom";
import { useState } from "react";

const HeaderMain = () => {
    const [acc, setAccount] = useState('')
    useEffect(() => {
        //@ts-ignore
        if (JSON.parse(localStorage.getItem('currentAccount')) === null) {
            setAccount('Log in')
        } else setAccount(
            //@ts-ignore
            JSON.parse(localStorage.getItem
                (
                    //@ts-ignore
                    JSON.parse(localStorage.getItem('currentAccount'))?.login
                )
            )?.login
        )
    }, []);
    return (
        <header className={classes.container}>
            <Link to='/'>
                <div className={classes.logo}>
                    К/С
                </div>
            </Link>
            <div className={classes.textes}>
                <Link to='/' className={classes.color}>
                    Каталог курсов
                </Link>
                <Link className={classes.color} to='/Auth'>
                    Мои курсы
                </Link>
            </div>
        </header>
    );
}

export default HeaderMain;