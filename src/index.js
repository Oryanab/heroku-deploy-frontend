import './styles/index.scss'
import { selectComponent } from './js/selectComponent'

const app = document.querySelector('#root')
const options = [
  {
    value: '',
    text: 'Select',
  },
  {
    value: 'ip',
    text: 'Get IP',
  },
  {
    value: 'device',
    text: 'Get Device',
  },
  {
    value: 'os',
    text: 'Get Operating System',
  },
  {
    value: 'browser',
    text: 'Get Browser',
  },
]

const select = selectComponent(options)
app.append(select)

// npm install --save @babel/runtime
// npm install --save-dev @babel/plugin-transform-runtime
// {
//     "presets": ["@babel/preset-env"],
//     "plugins": [
//         ["@babel/plugin-transform-runtime"]
//     ]
// }
