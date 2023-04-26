import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
    return (
        <section id='services'> 
        <h5>What i offer</h5>
        <h2>Services</h2>
        
        <div className="conatiner services__container">
            <article className="service">
                <div className="service_head">

                    <h3>Web Development</h3>
                    </div> 

                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p> Web Design: The process of designing the visual layout, user interface (UI), and user experience (UX) of a website or web application. This includes creating wireframes, mockups, and prototypes, as well as selecting typography, color palettes, and graphic elements.</p>
                        </li>  
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Full-Stack Development: The process of building both the frontend and backend of a website or web application, which includes integrating the two sides and creating a seamless user experience. This includes selecting and using a web development framework, such as React or Angular, and deploying the web application to a server or cloud platform.</p>
                        </li>   
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Website Maintenance and Support: The ongoing process of maintaining and updating a website or web application, which includes fixing bugs, optimizing performance, and adding new features or content.</p>
                        </li>   
                       
                        </ul>
                        </article>
                      

                         <article className="service">
                         <div className="service_head">
                             <h3>Ui/Ux Design</h3>
                             </div> 
         
                             <ul className='service__list'>
                                 <li>
                                     <BiCheck className='service__list-icon' />
                                     <p>User Research and Analysis: Understanding user needs, preferences, and behaviors through surveys, interviews, and other research methods to create effective user interfaces and user experiences.</p>
                                 </li>  
                                 <li>
                                     <BiCheck className='service__list-icon' />
                                     <p>User Interface Design: Creating visual designs for digital products, such as websites, mobile apps, or software interfaces, that are aesthetically pleasing and easy to use.

</p>
                                 </li>   
                                 <li>
                                     <BiCheck className='service__list-icon' />
                                     <p>Interaction Design: Defining how users interact with digital products, including the design of buttons, forms, menus, and other interface elements.</p>
                                 </li>   
                                 <li>
                                     <BiCheck className='service__list-icon' />
                                     <p>Prototyping and Wireframing: Creating low-fidelity prototypes or wireframes that illustrate the layout and functionality of a product or service, allowing for testing and refining before final development.</p>
                                 </li>             
                                 <li>
                                     <BiCheck className='service__list-icon' />
                                     <p>Usability Testing: Conducting user testing to identify usability issues and gather feedback for improving the product or service.</p>
                                 </li>   
                                 </ul>
                                 </article>
                                 
                                 
 
         
         <article className="service">
         <div className="service_head">
             <h3>Content Creation</h3>
             </div> 

             <ul className='service__list'>
                 <li>
                     <BiCheck className='service__list-icon' />
                     <p>Blogging: Content creation services can help create blog posts that are engaging, informative, and optimized for search engines.</p>
                 </li>  
                 <li>
                     <BiCheck className='service__list-icon' />
                     <p>Social media content: Creating content for social media platforms such as Instagram, Facebook, Twitter, and LinkedIn to engage with your audience.</p>
                 </li>   
                 <li>
                     <BiCheck className='service__list-icon' />
                     <p>Content strategy: Developing a content strategy that aligns with your business goals, target audience, and marketing objectives.</p>
                 </li>   
                 <li>
                     <BiCheck className='service__list-icon' />
                     <p>SEO optimization: Content creation services can help optimize your website content for search engines, including keyword research, optimization, and analysis.</p>
                 </li>             
                 <li>
                     <BiCheck className='service__list-icon' />
                     <p>Infographics: Creating visually appealing content that presents complex data or information in a simplified and easy-to-understand format.</p>
                 </li>   
                 </ul>
                 </article>

            </div>
        </section>
    )
}

export default Services