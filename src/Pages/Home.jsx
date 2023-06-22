import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default function Home() {
  return (
    <>
    <section class="parallax-container">
      <h1 className='brand-font'>Zephyr</h1>
      <p>
      Where your shopping desires meet limitless possibilities.
      </p>
    </section>

    <section className="buffer text-white">
    <div className="aboutus d-flex flex-wrap">
  <div className="image flex-grow-1 flex-shrink-1 flex-basis-40 mr-3">
    <img  className="img-fluid" alt="Image description"/>
  </div>
  <div className="contents flex-grow-1 flex-shrink-1 flex-basis-50">
    <h1 className="font-size-36 mb-4">About Us</h1>
    <p className="font-size-18 mb-0">
      We are a team of passionate people dedicated to providing the best
      service to our clients. Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Sed et est vel quam molestie bibendum at vitae lorem. Phasellus ac
      purus in nisl sagittis consectetur non non magna. Lorem ipsum dolor, sit
      amet consectetur adipisicing elit. Dicta, excepturi repellat itaque
      reprehenderit nihil in tenetur reiciendis iure fuga atque incidunt
      voluptatem eveniet voluptatibus architecto dolor, tempore qui dolorum
      similique? Maxime tenetur voluptate quos impedit qui sit cum officiis
      reprehenderit dicta nemo nobis fuga ipsam ea, esse accusamus iste
      perspiciatis. Laudantium rerum, maxime iusto beatae dignissimos quibusdam
      vero nostrum soluta.
    </p>
  </div>
</div>
    </section>

    <section class="parallax-container parallax-container2">


    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </section>

    </>
  )
}
