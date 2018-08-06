import React from 'react';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export default function newsletterBox({date}) {
    return (
        <div className="newsletter-box">
            <div className="newsletter-box__day">{date.getDay()}</div>
            <div className="newsletter-box__month-year">{months[date.getMonth()]} {props.date.getFullYear()}</div>
            <div className="newsletter-box__point"></div>
        </div>
    )
}