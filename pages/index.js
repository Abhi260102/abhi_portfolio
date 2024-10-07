import Head from 'next/head'
import Skill from '@/components/Skill'
import ContactUs from '@/components/ContactUs'


export default function Home() {

  return (
    <>
      <Head>
        <title>Portfolio | Abhishek Maurya</title>
        <meta name="description" content="Portfolio | Abhishek Maurya" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {/* <div class="loader-container">
  <img draggable="false" src="./images/preloader.gif" alt=""/>
</div> */}

        <header>
          <a href="/" className="logo flex gap-2 justify-center items-center"><img src='/images/logo.png' className='rounded-full h-[40px] w-[40px]' alt=''/>  Abhishek</a>
          <div id="menu" className="fas fa-bars" />
          <nav className="navbar">
            <ul>
              <li><a className="active" href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#work">Work</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </header>
        {/* navbar ends */}
        {/* hero section starts */}
        <section className="home" id="home">
          <div id="particles-js" />
          <div className="content">
            <h2>Hi There,<br /> I'm Abhishek <span>Maurya</span></h2>
            <p><span className='text-color'>I'm Into </span><span className="typing-text" /></p>
            <a href="#about" className="btn"><span>About Me</span>
              <i className="fas fa-arrow-circle-down" />
            </a>
            <div className="socials">
              <ul className="social-icons">
                <li><a className="linkedin" aria-label="LinkedIn" href="https://www.linkedin.com/in/abhishek-maurya-853602217/" target="_blank"><i className="fab fa-linkedin" /></a></li>
                <li><a className="github" aria-label="GitHub" href="https://github.com/Abhi260102" target="_blank"><i className="fab fa-github" /></a></li>
                <li><a className="twitter" aria-label="Twitter" href="https://twitter.com/av_m2602" target="_blank"><i className="fab fa-twitter" /></a></li>
                <li><a className="instagram" aria-label="Instagram" href="https://www.instagram.com/_hey.abhishek/" target="_blank"><i className="fab fa-instagram" target="_blank" /></a></li>
              </ul>
            </div>
          </div>
          <div className="image">
            <img draggable="false" className="tilt" src="./images/hero.png" alt />
          </div>
        </section>

        <section className="about" id="about">
          <h2 className="heading"><i className="fas fa-user-alt" /> About <span>Me</span></h2>
          <div className="row">
            <div className="image">
              <img draggable="false" className="tilt" src="./images/abhi_profile.jpg" alt />
            </div>
            <div className="content">
              <h3>I'm Abhishek</h3>
              <span className="tag">Mern Stack Developer</span>
              <p className='text-black'>I am a Full-Stack developer based in Jaipur, India.
                I have 3+ years of hand on experience as Mern developer,
                I am an Information Technology undergraduate from BIT.
                I am very passionate about improving my coding skills &amp; developing applications &amp; websites.
                I build WebApps and Websites using MERN Stack.
                Working for myself to improve my skills.
                Love to build Full-Stack clones. </p>
              <div className="box-container">
                <div class="box">
                  <p><span> age: </span>  <span className='text-black'> 24</span></p>
                  <p><span> phone : </span><span className='text-black'> +91 XXX-XXX-XXXX</span></p>
                </div>
                <div className="box">
                  <p><span> email : </span> <a href='mailto:abhishekmaurya676@gmail.com' className='text-black'>abhishekmaurya676@gmail.com</a></p>
                  <p><span> place : </span> <span className='text-black'>Jaipur, India - 302017</span></p>
                </div>
              </div>
              <div className="resumebtn">
                <a href="https://drive.google.com/file/d/1oMleKlccV1_Hmj2lbmzD90CsIBBJCn3m/view?usp=drive_link" target="_blank" className="btn"><span>Resume</span>
                  <i className="fas fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>
        </section>
        <Skill/>
  
        <section className="education" id="education">
          <h1 className="heading"><i className="fas fa-graduation-cap" /> My <span>Education</span></h1>
          <p className="qoute">Education is not the learning of facts, but the training of the mind to think.</p>
          <div className="box-container">
            <div className="box">
              <div className="image">
                <img draggable="false" src="./images/bit.webp" alt />
              </div>
              <div className="content">
                <h3>Bachelor of Technology in Information Technology</h3>
                <p>Buddha institute of technology | BIT</p>
                <h4>2018-2022 | Completed</h4>
              </div>
            </div>
            <div className="box">
              <div className="image">
                <img draggable="false" src="./images/educat/school.jpg" alt />
              </div>
              <div className="content">
                <h3>Sr.Secondary | 12th</h3>
                <p>APS | CBSE</p>
                <h4>2016-2018 | Completed</h4>
              </div>
            </div>
          </div>
        </section>
        
        <section className="work" id="work">
          <h2 className="heading"><i className="fas fa-laptop-code" /> Projects <span>Made</span></h2>
          <div className="box-container">
          
          </div>
          <div className="viewall">
            <a href="/projects" className="btn"><span>View All</span>
              <i className="fas fa-arrow-right" />
            </a>
          </div>
        </section>
       
        <section className="experience" id="experience">
          <h2 className="heading"><i className="fas fa-briefcase" /> Experience </h2>
          <div className="timeline">
            <div className="container right">
              <div className="content">
                <div className="tag">
                  <h2>Octal It Solution</h2>
                </div>
                <div className="desc">
                  <h3>Mern Stack Developer</h3>
                  <p>Jan 2022 - Present</p>
                </div>
              </div>
            </div>
            <div className="container left">
              <div className="content">
                <div className="tag">
                  <h2>Fullestop</h2>
                </div>
                <div className="desc">
                  <h3>Mern Stack Developer</h3>
                  <p>Apr 2022 - Feb 2024</p>
                </div>
              </div>
            </div>
          
          </div>
          <div className="morebtn">
            <a href="/experience" className="btn"><span>View All</span>
              <i className="fas fa-arrow-right" />
            </a>
          </div>
        </section>
        {/* experience section ends */}
        {/* contact section starts */}
        <ContactUs/>
      
        {/* contact section ends */}
        {/* footer section starts */}
        <section className="footer">
          <div className="box-container">
            <div className="box">
              <h3>Abhishek's Portfolio</h3>
              <p>Thank you for visiting my personal portfolio website. Connect with me over socials. <br /> <br /> Keep Rising 🚀. Connect with me over live chat!</p>
            </div>
            <div className="box">
              <h3>quick links</h3>
              <a href="#home"><i className="fas fa-chevron-circle-right" /> home</a>
              <a href="#about"><i className="fas fa-chevron-circle-right" /> about</a>
              <a href="#skills"><i className="fas fa-chevron-circle-right" /> skills</a>
              <a href="#education"><i className="fas fa-chevron-circle-right" /> education</a>
              <a href="#work"><i className="fas fa-chevron-circle-right" /> work</a>
              <a href="#experience"><i className="fas fa-chevron-circle-right" /> experience</a>
            </div>
            <div className="box">
              <h3>contact info</h3>
              <p> <i className="fas fa-phone" />+91 XXX-XXX-XXXX</p>
              <p> <i className="fas fa-envelope" />abhishekmaurya676@gmail.com</p>
              <p> <i className="fas fa-map-marked-alt" />Jaipur, India-302017</p>
              <div className="share">
                <a href="https://www.linkedin.com/in/abhishek-maurya-853602217/" className="fab fa-linkedin" aria-label="LinkedIn" target="_blank" />
                <a href="https://github.com/Abhi260102" className="fab fa-github" aria-label="GitHub" target="_blank" />
                <a href="mailto:abhishekmaurya676@gmail.com" className="fas fa-envelope" aria-label="Mail" target="_blank" />
                <a href="https://twitter.com/av_m2602" className="fab fa-twitter" aria-label="Twitter" target="_blank" />
                <a href="https://www.instagram.com/_hey.abhishek/" className="fab fa-instagram" aria-label="Telegram" target="_blank" />

              </div>
            </div>
          </div>
          <h1 className="credit">Designed with <i className="fa fa-heart pulse" /> by <a href="https://www.linkedin.com/in/abhishek-maurya-853602217/"> Abhishek Maurya</a></h1>
        </section>
        {/* footer section ends */}
        {/* scroll top btn */}
        <a href="#home" aria-label="ScrollTop" className="fas fa-angle-up" id="scroll-top" />
       
      </div>


    </>
  )
}
