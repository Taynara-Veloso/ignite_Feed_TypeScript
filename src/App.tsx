import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post, PostInterface } from "./components/Post"

import styles from './App.module.css'
import './global.css';

//iteração significa (repetir algo) - criar estrutura de repetição  

const posts: PostInterface[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/81330596?v=4',
      name: 'Taynara Veloso',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Eai galera!!'},
      {type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quaerat laboriosam odit harum veniam maxime libero accusamus est doloribus! Repellendus perspiciatis deserunt, quas sunt at placeat autem unde voluptas tempore.'},
      {type: 'link', content: 'taynarasantos@hotmail.com'},
    ],
    publishedAt: new Date('2024-05-23 19:30:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/72281058?v=4',
      name: 'Augusto Cesar',
      role: 'Escrevente'
    },
    content: [
      {type: 'paragraph', content: 'Olá Pessoal'},
      {type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe inventore excepturi laboriosam quos illum non unde similique voluptatibus assumenda commodi, asperiores rerum ullam totam, voluptatem quibusdam, porro voluptate atque earum.'},
      {type: 'link', content: 'augustoCesarSilva19@hotmail.com'},
    ],
    publishedAt: new Date('2024-05-23 19:30:00')
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/6643122?v=4',
      name: 'Mayk Brito',
      role: 'Educador @Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Fala Dev!'},
      {type: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat delectus totam aut provident ullam quas commodi odio culpa? Fugit rerum velit officiis aperiam accusantium voluptas facilis, nisi deserunt aliquam magni!'},
      {type: 'link', content: 'maykBrito1@gmail.com'},
    ],
    publishedAt: new Date('2024-05-23 19:30:00')
  },
];

export function App() {
  return (
    <div>
      <Header/>    
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div> 
    </div>
  )
}
