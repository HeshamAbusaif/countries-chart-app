import Home from './pages/HomePage/index.vue';
import Charts from './pages/ChartsPage/index.vue';
import CountryDetail from './pages/CountryDetail/index.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/charts',
        name: 'charts',
        component: Charts,
    },
    {
        path: '/countries/:id',
        name: 'country',
        props: true,
        component: CountryDetail,
      },
]

export default routes