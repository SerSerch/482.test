import Landing from 'components/Landing';

export default [
    {
        path: '/',
        component: Landing,
        exact: true
    },
    {
        path: '*',
        component: Landing,
        exact: true
    },
]