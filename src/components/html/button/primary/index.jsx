import React from 'react'
import './index.scss'

export default function index({title, type, color}) {

    const style = {
        color: `${color} !important`
    }

    return (
        <button className="btn btn-primary log__button button__font" style={style} type={type}>{title}</button>
    )
}
