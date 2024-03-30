import styles from './Calendar2.module.css'
import { Badge, Calendar } from 'antd';
const getListData = (value) => {
    let listData;
    switch (value.date()) {
        case 8:
            listData = [
                {
                    type: 'warning',
                    content: 'Практика',
                },
                {
                    type: 'success',
                    content: 'Теория',
                },
            ];
            break;
        case 10:
            listData = [
                {
                    type: 'warning',
                    content: 'Практика',
                },
                {
                    type: 'success',
                    content: 'Теория',
                },
                {
                    type: 'error',
                    content: 'Тест',
                },
            ];
            break;
        case 15:
            listData = [
                {
                    type: 'warning',
                    content: 'Практика',
                },
                {
                    type: 'success',
                    content: 'Теория',
                },
                {
                    type: 'error',
                    content: 'Тест',
                },
            ];
            break;
        default:
    }
    return listData || [];
};
const getMonthData = (value) => {
    if (value.month() === 8) {
        return 1394;
    }
};

const Calendar2 = () => {
    const monthCellRender = (value) => {
        const num = getMonthData(value);
        return num ? (
            <div className="notes-month">
                <section>{num}</section>
                <span>Backlog number</span>
            </div>
        ) : null;
    };
    const dateCellRender = (value) => {
        const listData = getListData(value);
        return (
            <ul className="events">
                {listData.map((item) => (
                    <li key={item.content}>
                        <Badge status={item.type} text={item.content} />
                    </li>
                ))}
            </ul>
        );
    };
    const cellRender = (current, info) => {
        if (info.type === 'date') return dateCellRender(current);
        if (info.type === 'month') return monthCellRender(current);
        return info.originNode;
    };
    return (
        <div className={styles.calendar}>
            <Calendar cellRender={cellRender} />;
        </div>
    );
};

export default Calendar2;