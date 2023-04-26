import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpeg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpeg'
import IMG5 from '../../assets/portfolio5.jpeg'
import IMG6 from '../../assets/portfolio6.jpg'

const data =[
{
  id:1,
  image: IMG1,
  title: 'Facebook Clone',
  github: 'https://github.com/gupta-vedant',
  

},
{
  id:2,
  image: IMG2,
  title: 'React-Weatherapp',
  github: 'https://github.com/gupta-vedant',
  demo:"https://current-weather-app12.netlify.app/"

},
{
  id:3,
  image: IMG3,
  title: 'React-movie-app-omdbapi',
  github: 'https://github.com/gupta-vedant',
  demo:"https://gleeful-frangipane-5c5d4e.netlify.app/"
},
{
id:4,
  image: IMG4,
  title: 'TIC-TAC-TOE',
  github: 'https://github.com/gupta-vedant'
},
{
id:5,
  image: IMG5,
  title: 'React-Music-app',
  github: 'https://github.com/gupta-vedant',
  demo:"https://shiny-florentine-e7f0b4.netlify.app/"
}
]

const Portfolio = () => {
        return (
            <section id='portfolio'> 
            <h5>What i offer</h5>
            <h2>Portfolio</h2>
            
            <div className="conatiner portfolio__container">
               {
                data.map(({id,image,title,github,demo}) => {
                  return (
                    <article key={id} className='portfolio__item'>
                      <div className="portfolio__item-image">
                        <img src={image} alt={title}/>
                        </div>
                        <h3>{title}</h3>
                        <div className="portfolio__item-cta">
                          <a href={github} className='btn' target='_blank'>Github</a>
                          <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                      </div>
                    </article>
                  )
                
                  })
                }
         </div>
         
         </section>
    )
}

export default Portfolio