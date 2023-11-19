import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'
import MyCard from './MyCard';
import Tags from './Tags';
import Footer from './Footer';


function App() {
  const [count, setCount] = useState(0)
  const cardsData = [
    {
      link: 'https://hips.hearstapps.com/hmg-prod/images/raza-perro-pequen-o-yorkipoo-646c6df595f5c.jpeg',
      name: 'Nutella',
      details: 'Nutella es un perrito muy dulce! como la nutella, sus padres deben irse del pais por lo que buscan un hogar amoroso para nutella',
      tagText: 'Yorki poo',
      tagColor: 'success',
    },
    {
      link: 'https://blog.gudog.com/wp-content/uploads/2019/07/Cosmos-jack-russell-gudog.jpg',
      name: 'Milo',
      details: 'Te vas a divertir con las ocurrencias de Milo, le encanta jugar mucho! y desea siempre ser el centro de atención estas listo/a??',
      tagText: 'Jack Terrier',
      tagColor: 'primary',
    },
    {
      link: 'https://www.mascotaexpress.com/wp-content/uploads/2022/03/como-son-los-perros-mestizos.png',
      name: 'Ricotta',
      details: 'Ella es Ricotta! una perrita que quiere mucho amor! sufrio algunas cosas mas cachorrita por lo que solo necesita mucho amor!!',
      tagText: 'mixto',
      tagColor: 'danger',
    },
    {
      link: 'https://t1.uc.ltmcdn.com/es/posts/5/1/6/como_saber_si_mi_perro_sera_grande_43615_600_square.jpg',
      name: 'Muslito',
      details: 'Muslito! morirás de la risa con este cachorro que si te descuidas y dejas el pollo a la vista magicamente desaparece, él no es....',
      tagText: 'mixto',
      tagColor: 'warning',
    },
  ];
  return (
    <div>
      <Header title="Adopta un perrito!" />
      <div className="card-container">
        {cardsData.map((card, index) => (
          <MyCard 
            key={index}
            link={card.link} 
            name={card.name} 
            details={card.details} 
            tagText={card.tagText}
            tagColor={card.tagColor}
          />
        ))}
      </div>
      <Footer pie="Todos estos hermosos cahorritos buscan un hogar, no compres ADOPTA! y cambiales la vida."/>
    </div>
  );
}

export default App
