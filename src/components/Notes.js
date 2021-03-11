import React, { useState } from 'react'
import { List } from 'antd';
import Stopwatch from './timer/timer'
import "../styles/index.scss"
import { MinusCircleOutlined } from '@ant-design/icons';

export const Notes = React.memo(({ notes, deleteNote }) => {

    const [value, setDanger] = useState('')

    if (value.trim()) {
        deleteNote(value).then(() => setDanger(''))
    }


    return (
        <List
            itemLayout="horizontal"
            dataSource={notes}
            renderItem={note => (
                <List.Item className='note note-enter-active'>
                    <div className="paragraph">
                        {!note.startStop[0].stopped ?
                            <List.Item.Meta
                                className="list-group-item"
                                title={<p style={{ color: '#000' }}>{note.title}</p>}
                            />
                            :
                            <List.Item.Meta
                                className="list-group-item"
                                title={<p style={{ color: '#59B87D' }}>{note.title}</p>}
                            />
                        }
                    </div>
                    <Stopwatch note={note} />
                    <MinusCircleOutlined style={{ fontSize: '18px', color: '#D46F7F' }} className="delete__btn" onClick={() => setDanger(note.id)} type="button" />
                </List.Item>
            )}
        />
    )
}
)

