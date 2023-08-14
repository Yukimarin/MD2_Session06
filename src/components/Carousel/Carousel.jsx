import Carousel from "react-bootstrap/Carousel";

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme='dark'>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='//file.hstatic.net/1000230642/file/1920x750_f8b1443d50044a6c9fabff9ce8d615ee_master.jpg'
          alt='First slide'
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='//file.hstatic.net/1000230642/file/1920x750_f8b1443d50044a6c9fabff9ce8d615ee_master.jpg'
          alt='Second slide'
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='//file.hstatic.net/1000230642/file/massline2_1539917014144d349cb5f4313a1e47a4_master.png'
          alt='Third slide'
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='//file.hstatic.net/1000230642/file/1__1__d6492b66eebc4688a85dff1961233724_master.jpg'
          alt='Third slide'
        />
        <Carousel.Caption>
          <h5>Four slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
