import type IPage from '../interfaces/page.interface';

export const pages: IPage[] = [
  {
    id: 1,
    title: 'Spotify',
    url: 'https://open.spotify.com/',
    icon: './public/icons/spotify.svg',
  },
  {
    id: 2,
    title: 'Github',
    url: 'https://github.com/',
    icon: './public/icons/github.svg',
  },
  {
    id: 3,
    title: 'Youtube',
    url: 'https://www.youtube.com/',
    icon: './public/icons/youtube.svg',
  },
  {
    id: 4,
    title: 'Wikipedia',
    url: 'https://es.wikipedia.org/wiki/Wikipedia:Portada',
    icon: './public/icons/wikipedia.svg',
  },
  {
    id: 5,
    title: 'React Docs',
    url: 'https://react.dev/learn',
    icon: './public/icons/react.svg',
  },
];
