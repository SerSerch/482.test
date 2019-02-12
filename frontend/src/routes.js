import Hello from 'components/Hello';
//import Project from 'components/Project';

export default [
    {
        path: '/',
        component: Hello,
        exact: true
    },
    {
        path: '/user',
        exact: true
    },
    // {
    //     path: '/project/:id',
    //     component: Project,
    //     exact: true
    // },
    {
        path: '*',
        component: Hello,
        exact: true
    },
]