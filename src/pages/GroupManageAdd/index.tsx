import {NavBar, CheckList, Avatar, Button} from 'antd-mobile';
import {CheckCircleFill} from 'antd-mobile-icons';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import style from '../GroupManage/index.module.styl';
import groups from './mock.json';

const GroupManageAdd = () => {
    const navigate = useNavigate();
    const [selection, setSelections]: [string[]|never[], Function] = useState([]);
    return (
        <>
            <NavBar
                className="navbar"
                onBack={() => navigate('/groupmanage')}>选择多个聊天</NavBar>
            <CheckList
                className={style.list}
                multiple
                activeIcon={<CheckCircleFill />}
                value={selection}
                onChange={v => setSelections(v)}>
                {groups.map((v, i) => {
                    return (
                        <CheckList.Item
                            key={i}
                            value={i.toString()}
                            prefix={<Avatar src={`https://picsum.photos/200?addgroup${i}`}/>}>
                            {v.groupname}
                        </CheckList.Item>
                    )
                })}
            </CheckList>
            <div className={`${style.bottom} ${style.flex}`}>
                <div className={style.flexLeft}>
                    {`已选择(${selection.length}/${groups.length})`}
                </div>
                <Button
                    color="primary"
                    onClick={() => {}}>确定</Button>
            </div>
        </>
    )
}

export default GroupManageAdd;
