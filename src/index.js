import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

//название компонента пишем с большой буквы. Компонентa должна возвращать JSX
 // Aтрибуты называются верблюдом
  // Атрибут class = className
  // Атрибут for = htmlFor
  // key for proizvoditel'nocti, а т.е. React узнает какие элементы измениились(чтобы изменить ТОЛЬКО это)

ReactDOM.render(<App />, document.getElementById('root'));