import '../css/style.css';
import { loadRoute } from './router.js'
import './navbar.js'; 

const app = document.getElementById('app')
loadRoute(app);