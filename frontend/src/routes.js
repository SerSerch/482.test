import Hello from 'components/Hello';
import Home from 'layouts/Home';
import MyProjects from 'layouts/MyProjects';

export default [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/myprojects',
        component: MyProjects,
        exact: true
    },
    {
        path: '*',
        component: Hello,
        exact: true
    },
]