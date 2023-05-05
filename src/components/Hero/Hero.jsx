import "./Hero.css"


const Hero = () => {
  return (
    <section className='hero-container'>
        <div className="hero-slogan">
            <span>New Seasson</span>
            <h2>Special collection for everyone</h2>
            <a href="#">Explore now</a>
        </div>

        <div className="hero-image-container">
        <img src="../public/images/hero.png" alt="" className="hero-image-container"/>
        </div>
        
        
    </section>
  )
}

export default Hero