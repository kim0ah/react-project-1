import styles from './Sidebar.module.css'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [
    getItem('Вступление', 'sub1', <MailOutlined />, [
        getItem('Теория', 'g1', null, [getItem('Урок 1', '1'), getItem('Урок 2', '2')], 'group'),
        getItem('Практика', 'g2', null, [getItem('Тест 1', '3'), getItem('Тест 2', '4')], 'group'),
    ]),
    {
        type: 'divider',
    },
    getItem('Компоненты', 'sub2', <AppstoreOutlined />, [
        getItem('Кнопки', '5'),
        getItem('Слайдеры', '6'),
        getItem('Меню', 'sub3', null, [getItem('Бургер меню', '7'), getItem('Dropdown меню', '8')]),
    ]),
    {
        type: 'divider',
    },
    getItem('Инструкция', 'sub4', <SettingOutlined />, [
        getItem('Как скачать', '9'),
        getItem('Как пользоваться', '10'),
        getItem('Подключение библиотек', '11'),
        getItem('Основные понятия', '12'),
    ]),
    getItem('Дополнительное', 'grp', null, [getItem('О нас', '13'), getItem('Наши контакты', '14')], 'group'),
];
const Sidebar = () => {
    const onClick = (e) => {
        console.log('click ', e);
    };
    return (
        <div className={styles.hero}>
            <Menu
                onClick={onClick}
                style={{
                    width: 256,
                }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                items={items}
            />
        </div>
    );
};

export default Sidebar;