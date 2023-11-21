import aboutImg from '../Assests/img/Ellipse 1.png'

export default function About() {
  return (
    <section id='about'>
    <div className="d-flex aboutContainer">
  <div className="about-img col-12 col-md-5">
    <img src={aboutImg} alt="about-image" />
    <p className="name">Shree Nana Maharaj Tarankar (Chaitanyananda Saraswati)</p>
  </div>
  <div className="about-content col-10 col-lg-6">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
      Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies
      sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a,
      semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie,
      enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper.
      Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.
      Pellentesque congue. Ut in risus volutpat libero pharetra tempor. This text
      is often used as a placeholder when designing or formatting documents,
      designing or formatting documents, websites, or other visual materials.um
      diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae,
      consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat
      libero pharetra tempor. This text.
    </p>
  </div>
</div>

    </section>
  )
}
