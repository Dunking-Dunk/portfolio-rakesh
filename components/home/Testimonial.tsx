import styles from "./testimonial.module.css";
import Carousel  from "../carousel/Carousel";


const testimonials = [
  {
    testimonial: '“Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis felis turpis, nec semper odio convallis at. Curabitur imperdiet semper arcu, a finibus arcu suscipit in. Donec quis placerat nibh. Maecenas est purus, eleifend ac cursus sed, tincidunt ut sapien.Morbi ornare elit at libero suscipit porta.”',
    author: 'ABC Kumar',
    designation: 'Managing Director, ABC company'
  },
  {
    testimonial: '“Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis felis turpis, nec semper odio convallis at. Curabitur imperdiet semper arcu, a finibus arcu suscipit in. Donec quis placerat nibh. Maecenas est purus, eleifend ac cursus sed, tincidunt ut sapien.Morbi ornare elit at libero suscipit porta.”',
    author: 'ABC Kumar',
    designation: 'Managing Director, ABC company'
  },
  {
    testimonial: '“Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis felis turpis, nec semper odio convallis at. Curabitur imperdiet semper arcu, a finibus arcu suscipit in. Donec quis placerat nibh. Maecenas est purus, eleifend ac cursus sed, tincidunt ut sapien.Morbi ornare elit at libero suscipit porta.”',
    author: 'ABC Kumar',
    designation: 'Managing Director, ABC company'
  }
]

const Testimonial = () => {

  const slides = testimonials.map((data,index) => {
    return (
      <div key={index} className={styles.card}>
        <p className={styles.card__testimonial}>{data.testimonial}</p>
        <h3 className={styles.card__author}>{data.author}</h3>
        <h5 className={styles.card__designation}>{data.designation}</h5>
      </div>
    )
  })


  return (
    <div className={styles.testimonial}>
      <div className={styles.testimonial__container}>
      <h2 className={styles.testimonial__title}>Testimonial</h2>
        <Carousel slides={slides}/>
      </div>
    </div>
  );
};

export default Testimonial;
