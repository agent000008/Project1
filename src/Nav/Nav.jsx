import React from 'react'
import {Link} from 'react-router-dom';

export default function Nav() {
  return (
    <div>
        <ul>
            <li><Link to="/gl">Главная</Link></li>
            <li><Link to="/inf">Состав</Link></li>
            <li><Link to="/ht">История</Link></li>
        </ul>
    </div>
  )
}
