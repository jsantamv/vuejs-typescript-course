
export interface RouterLink {
    name: string,
    path: string,
    title: string
}

export const routerLinks: RouterLink[] = [
    { name: 'Home', path: '/', title: 'Home' },
    { name: 'About', path: '/about', title: 'About' },
    { name: 'Counter', path: '/counter', title: 'Counter' },
    { name: 'Pokemons', path: '/pokemons', title: 'Pokemons' },
];