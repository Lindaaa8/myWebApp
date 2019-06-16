import React, { Component } from 'react';

import './Home.css';
import selfie from "./Assets/imgs/IMG_4224.JPG";
import github from "./Assets/imgs/github.png";
import linkedin from "./Assets/imgs/noun_linkedin_2045581.png";
import img1 from "./Assets/imgs/noun_Email_113149.png";
import img2 from "./Assets/imgs/IMG_1131.JPG";
import img3 from "./Assets/imgs/IMG_4696.JPG";
import img5 from "./Assets/imgs/IMG_5030.JPG";
import img4 from "./Assets/imgs/IMG_5118.jpg";
import img6 from "./Assets/imgs/IMG_5102.JPG";
import img7 from "./Assets/imgs/IMG_5461.JPG";
import img8 from "./Assets/imgs/IMG_3700.JPG";


class Home extends Component {
    render() {
        return (
            <div className='container'>
                <section>
                <h1 className="content bold">about me</h1>
                <span className="content">I'm a front end developer based in Toronto, Canada.</span>
                <p className="content">I enjoy turning complex problems into simple, beautiful and intuitive designs. When I'm not coding, instagramming or reading, you'll find me cooking, singing or working out in the park.</p>
                <figure>
                    <img id='selfie' src={selfie} alt='photos'/>
                </figure>
                </section>
                <div className="buttons">
                    {/* <img className='icons'src={github}  alt='photos'/>
                    <img className='icons' src={linkedin} alt='photos'/>
                    <img className='icons' src={img1} alt='photos'/> */}
                </div>
                <figure className='album'>
                    <img className='pics'src={img2} alt='photos'/>
                    <img className='pics' src={img3} alt='photos'/>
                    <img className='pics' src={img4} alt='photos'/>
                    <img className='pics' src={img5} alt='photos'/>
                    <img className='pics' src={img6} alt='photos'/>
                    <img className='pics' src={img7} alt='photos'/>
                    <img className='pics' src={img8} alt='photos'/>
                </figure>
            </div>
        );
    }
}
export default Home;