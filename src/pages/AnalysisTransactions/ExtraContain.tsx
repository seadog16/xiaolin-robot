import style from './index.module.styl';

interface Data {
    date: string;
    payment: string;
    profit: string;
}
const ExtraContain = ({data}: {data: Data}) => {
    return (
        <div className={style.extra}>
            <div>{data.date}</div>
            <div>
                <span className={style.extraPayment}>实付¥{data.payment}</span>
                <span className={style.extraProfit}>赚¥{data.profit}</span>
            </div>
        </div>
    )
}

export default ExtraContain;
