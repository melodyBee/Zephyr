import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function CategoriesSection() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories').then((json) => setCategories(json.data));
  }, []);


  useEffect(() => {
    AOS.init();
  }, []);

  const categoryImages = [
    'https://i.dummyjson.com/data/products/1/thumbnail.jpg', 
    'https://i.dummyjson.com/data/products/6/thumbnail.png', 
    'https://i.dummyjson.com/data/products/11/thumbnail.jpg',
    "https://i.dummyjson.com/data/products/16/thumbnail.jpg",
    "https://i.dummyjson.com/data/products/21/thumbnail.png",
    'https://i.dummyjson.com/data/products/26/thumbnail.jpg',
    "https://i.dummyjson.com/data/products/35/thumbnail.jpg",
    'https://i.dummyjson.com/data/products/40/thumbnail.jpg',
    'https://i.dummyjson.com/data/products/45/thumbnail.jpg',
    'https://i.dummyjson.com/data/products/50/thumbnail.jpg',
    "https://i.dummyjson.com/data/products/55/thumbnail.jpg",
    "https://i.dummyjson.com/data/products/60/thumbnail.jpg",
    "https://i.dummyjson.com/data/products/65/thumbnail.webp",
    "https://i.dummyjson.com/data/products/70/thumbnail.jpg",
    "https://i.dummyjson.com/data/products/75/thumbnail.jpg",
    "https://i.dummyjson.com/data/products/80/thumbnail.jpg",
    "https://i.dummyjson.com/data/products/85/thumbnail.jpg",
    "https://i.dummyjson.com/data/products/90/thumbnail.jpg",
    "https://i.dummyjson.com/data/products/95/thumbnail.jpg",
    "https://i.dummyjson.com/data/products/98/thumbnail.jpg"
    
  ];

  return (
    <>
      <Carousel slide={false} >
        <Carousel.Item>
          <img className="d-block w-100" src={categoryImages[0]} alt="First slide" style={{height:"100vh", width:"100px" }} />
          <Carousel.Caption className='text-dark'>
            <h3 >ZEPHYR</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={categoryImages[1]} alt="Second slide" style={{ height: '100vh', width: '100px' }} />
          <Carousel.Caption className='text-dark'>
            <h3>ZEPHYR</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={categoryImages[3]} alt="Third slide" style={{ height: '100vh', width: '100px' ,}} />
          <Carousel.Caption className='text-dark'>
            <h3>ZEPHYR</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
         
        

        

      <div className="container-fluid">
        <div className="my-5 text-center">
          
          <p className="text-secondary" data-aos="fade-right">
          Explore our wide range of cutting-edge electronics, including smartphones, laptops, TVs, and more. Discover the latest technology trends and upgrade your digital lifestyle.Our home improvement category offers a comprehensive range of tools, equipment, and supplies to help you tackle any DIY project with ease. From small repairs to major renovations, find everything you need to transform your space.
          </p>
        </div>

        <div className="row" data-aos="zoom-in" >
          {categories.map((category, index) => (
            <div className="col-md-3 my-3" key={index}>
              <Card.Img variant="top" src={categoryImages[index % categoryImages.length]} alt={`Category ${index + 1}`} style={{objectFit: "cover" , width:"100%" , height:"200px"}}   />

              <Link className="text-decoration-none" to={`/products/category/${category}`}>
                <Card style={{boxShadow: "0 2px 4px black"}} >
                  <Card.Body>
                    <Card.Title> {category.toUpperCase().replace('-', ' ')}</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

