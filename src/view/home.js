import React from 'react';
import Card from '../components/card';
import Nav from '../components/nav';
import Jumbo from '../components/jumbotron';
import Footer from '../components/Footer';

const Home = () => { //Home contiene la estructura, como un container

    const cartas = [
        {
            image: "https://www.cisco.com/c/es_cl/training-events/_jcr_content/Grid/training_c1eb/layout-training/widenarrow/WN-Wide-1/carousel/carouselContents/hero_panel/image.img.jpg/1508500909367.jpg",
            cardTitle: "Developers Team",
            cardDescription:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
            button: {
                url: "#",
                label: "Go to 4Geeks CL",
            }
        },
        {
            image: "https://www.mmh.com/images/MMH1804_Retail_600px.jpg",
            cardTitle: "Agile Scrum",
            cardDescription:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
            button: {
                url: "#",
                label: "Go",
            }
        },
        {
            image: "https://www.mediatica.com.mx/wp-content/uploads/2020/05/web_development-600x400.jpg",
            cardTitle: "Lessons",
            cardDescription:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
            button: {
                url: "#",
                label: "Go",
            }
        },
        {
            image: "https://www.cisco.com/c/es_co/training-events/_jcr_content/Grid/training_51a0/layout-training/widenarrow/WN-Wide-1/carousel/carouselContents/hero_panel_1/image.img.jpg/1508500853304.jpg",
            cardTitle: "Teacher",
            cardDescription:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
            button: {
                url: "#",
                label: "Go",
            }
        },
    ];
    return (
        <>
            <div className="container">
                <Nav logo="REACT" link1="Home" link2="Products" link3="Services" link4="Contact" />
                <div className="row">
                <Jumbo titulo="4Geeks Academy Chile"/>
                </div>
                <div className="row">
                <Card arreglodecards={cartas} />
                </div>
                <div><p></p></div>
                <Footer/>

            </div>
        </>
    )
   
}
export default Home;
