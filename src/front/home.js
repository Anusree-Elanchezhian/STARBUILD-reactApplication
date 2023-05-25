import './home.css';
import {Link} from "react-router-dom";
const Home =()=>{
    return(
<div>
        <div className="hero-image">
        <div className="hero-text">
          <h1 style={{fontSize: '50px'}}>STAR BUILD</h1>
         <h3>FROM BRICKS TO BUILDINGS</h3>
          <button><Link to ='/works'>PORTFOLIO</Link></button>
        </div>
		</div>
		<div className='para'>
		<h1>"Architecture should speak of it's time and place,but yearn for timelessness."</h1>
		<p>StarBuild is India’s fastest growing home interiors brand. 
		We help homeowners set up their dream homes, by bringing professionalism, predictability, convenience and
		transparency to this otherwise unorganised sector. Since our inception in 2014, we have grown rapidly,
	   having served 25000+ happy homeowners, and currently operate in 10 major cities across the country.</p>
		</div>
		<div className='trend'>
		<h1>Trending...</h1>
		</div>
		<div>
		<div className="gallery">
            <img src="https://res.cloudinary.com/dtrytsho8/image/upload/v1669100098/trending1_tshapl.jpg" alt="Cinque Terre" width={600} height={400} />
        </div>
        <div className="gallery">
            <img src="https://res.cloudinary.com/dtrytsho8/image/upload/v1669100109/trending2_x3o4vd.jpg" alt="Forest" width={600} height={400} />
        </div>
        <div className="gallery">
            <img src="https://res.cloudinary.com/dtrytsho8/image/upload/v1669100119/trending3_kau5gx.jpg" alt="Northern Lights" width={600} height={400} />
        </div>
        <div className="gallery">
            <img src="https://res.cloudinary.com/dtrytsho8/image/upload/v1669100128/trending4_c1iool.jpg" alt="Mountains" width={600} height={400} />
        </div>
	  </div>
	  <div className='trend'>
		<h1>Best selling Kitchen...</h1>
		</div>
		<div>
		<div className="gallery">
            <img src="https://res.cloudinary.com/dtrytsho8/image/upload/v1669101376/kit1_a87qfd.jpg" alt="Cinque Terre" width={600} height={400} />
        </div>
        <div className="gallery">
            <img src="https://res.cloudinary.com/dtrytsho8/image/upload/v1669101388/kit2_knygqb.jpg" alt="Forest" width={600} height={400} />
        </div>
        <div className="gallery">
            <img src="https://res.cloudinary.com/dtrytsho8/image/upload/v1669101402/kit3_icfmdd.jpg" alt="Northern Lights" width={600} height={400} />
        </div>
        <div className="gallery">
            <img src="https://res.cloudinary.com/dtrytsho8/image/upload/v1669101415/kit4_uouaqs.jpg" alt="Mountains" width={600} height={400} />
        </div>
	  </div>
	  <div className='trend'>
		<h1>Best Selling Wardrobe...</h1>
		</div>
		<div>
		<div className="gallery">
            <img src="https://res.cloudinary.com/dtrytsho8/image/upload/v1669101806/wad1_dwhvbz.jpg" alt="Cinque Terre" width={600} height={400} />
        </div>
        <div className="gallery">
            <img src="https://res.cloudinary.com/dtrytsho8/image/upload/v1669101811/wad2_ednrhs.jpg" alt="Forest" width={600} height={400} />
        </div>
        <div className="gallery">
            <img src="https://res.cloudinary.com/dtrytsho8/image/upload/v1669101818/wad3_objcl2.jpg" alt="Northern Lights" width={600} height={400} />
        </div>
        <div className="gallery">
            <img src="https://res.cloudinary.com/dtrytsho8/image/upload/v1669101828/wad4_wtiqfw.jpg" alt="Mountains" width={600} height={400} />
        </div>
	  </div>
      <div >
        <img src="https://res.cloudinary.com/dtrytsho8/image/upload/v1669122261/image_end1_fmso3j.png" alt="" width={1650}/>
      </div>
     <div className='trend'>
		<center><p className="happy">HAPPY HOMES BY STAR BUILD</p></center>
		</div>
		<div class='review'>
		<div className="gallery">
            <img src="https://res.cloudinary.com/dtrytsho8/image/upload/v1669123072/review_1_ot5ocf.jpg" alt="Cinque Terre" width={600} height={400} />
            <div class="desc">
           <p className="college">NANDHINI AND MANIK</p>
           <p>2BHK</p>
           <p>We really fell in love with the quality that star build assured and multiple options that they were to offer.
            The designers were able to provide us with a lot of smart options.
             </p>
            </div>
        </div>
        <div className="gallery">
            <img src="https://res.cloudinary.com/dtrytsho8/image/upload/v1669123085/review_2_e2hgm0.webp" alt="Forest" width={600} height={400} />
            <div class="desc">
                <p className="college">ROSHINI AND AMAN</p>
                <p>3BHK</p>
                <p>We are really happy with the materials that were used and the timeline for the project.
                    The reaction we got from our friends when they first saw our place was priceless.
                </p>
            </div>
        </div>
        <div className="gallery">
            <img src="https://res.cloudinary.com/dtrytsho8/image/upload/v1669123096/review_3_ldbsqy.jpg" alt="Northern Lights" width={600} height={400} />
            <div class="desc">
                <p className="college">RISHI AND DIMPLE</p>
                <p>3BHK</p>
                <p>Our designer took us through our options in extraordinary detail and was extremely helpful in setting up
                    our home in the way we wanted.
                </p>
            </div>
        </div>
        <div className="gallery">
            <img src="https://res.cloudinary.com/dtrytsho8/image/upload/v1669124095/review_4_qvzmjn.jpg" alt="Mountains" width={600} height={400} />
            <div class="desc">
                <p className="college">NITHYA AND SAMEER</p>
                <p>4BHK</p>
                <p>A place were we can find peace,the home.That's exactly what star build has helped us with.
                    We are very happy with the outcome.
                </p>
            </div>
        </div>
     </div>
     <div className="social">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        {/* Add font awesome icons */}
        <a href="https://www.facebook.com/" className="fa fa-facebook" />
        <a href="https://twitter.com" className="fa fa-twitter" />
        <a href="https://www.instagram.com" className="fa fa-instagram" />
        <a href="https://github.com" className="fa fa-github" />
      </div>
     <div className="foot"> 
        <p>Copyright 2022 All Rights Reserved by StarBuild</p>
      </div> 
</div>
  	  
    )
};
export default Home;