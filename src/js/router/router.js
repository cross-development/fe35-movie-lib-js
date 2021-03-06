import Controller from '../controllers/controller';

function getRouteInfo() {
    const hash = location.hash ? location.hash.slice(1) : (location.hash = 'home');
    const [name, id] = hash.split('/');

    return { name, params: { id } };
}

function handleHash() {
    const { name, params } = getRouteInfo();

    if (name) {
        const routeName = name + 'Route';
        Controller[routeName](params);
    }
}

export default {
    init() {
        window.addEventListener('hashchange', handleHash);
        handleHash();
    },
};
