import './App.scss';
import moment from 'moment/min/moment-with-locales';
import React, { useState } from 'react';
import VideoList from './Components/VideoList/VideoList';

export default function App() {
    const [list, setList] = useState([
        {
            url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
            date: moment().subtract(13, 'seconds').format('YYYY-MM-DD HH:mm:ss')
        },
        {
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            date: moment().subtract(15, 'minutes').format('YYYY-MM-DD HH:mm:ss')
        },
        {
            url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
            date: moment().subtract(5, 'hours').format('YYYY-MM-DD HH:mm:ss')
        },
        {
            url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
            date: moment().subtract(10, 'days').format('YYYY-MM-DD HH:mm:ss')
        },
        {
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            date: moment().subtract(10, 'months').format('YYYY-MM-DD HH:mm:ss')
        },
        {
            url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
            date: moment().subtract(2, 'years').format('YYYY-MM-DD HH:mm:ss')
        },
    ]);

    return (
        <VideoList list={list} />
    );
}
