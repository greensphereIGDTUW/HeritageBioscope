import React from 'react'
import './Team.css'; 

const Team = () => {
  return (
    <>
    <h1 className='team-head'>Our Team</h1>
<div className="gallery">
    
    <div className="card-container">
        <img className="round" src="https://res.cloudinary.com/dmg4zjmrp/image/upload/v1713939781/ananya_dp_pmdst4.jpg" alt="user"  />
        <h3>Ananya Bhardwaj</h3>
        <h6>President</h6>
        <p>Nature-loving coder on a quest to blend the beauty of the outdoors with the precision of programming</p>
        <a href="https://www.linkedin.com/in/ananya-bhardwaj-093713227/" ><i class="fa fa-linkedin" aria-hidden="true" /></a>
    </div>
    <div className="card-container">
        <img className="round" src="https://res.cloudinary.com/dmg4zjmrp/image/upload/v1713938503/arshiya_oc4zrm.jpg" alt="user"  />
        <h3>Arshiya Gedam</h3>
        <h6>President</h6>
        <p>Nature will heal itself if we simply allow it</p>
        <a href="https://www.instagram.com/arshiyagedam?igsh=MWN4MjJnMGxpN21zaA==" ><i class="fa fa-instagram" aria-hidden="true" /></a>
    </div>
    
    <div className="card-container">
        <img className="round" src="https://res.cloudinary.com/dmg4zjmrp/image/upload/v1713938462/Koma_tr11gc.jpg" alt="user"  />
        <h3>Komal Verma</h3>  
        <h6>Vice-President</h6>     
        <p>Blending my passion for technology with a deep love for nature, all while fiercely advocating for strong women and living an independent life.</p>
        <a href="https://www.linkedin.com/in/komal-verma-640897239/" ><i class="fa fa-linkedin" aria-hidden="true" /></a>
    </div>
    
    <div className="card-container">
        <img className="round" src="https://res.cloudinary.com/dmg4zjmrp/image/upload/v1713968551/aakriti_kbjekf.jpg" alt="user"  />
        <h3>Aakriti Kumari</h3>
        <h6>Project Head</h6>
        <p>A dedicated learner, embracing lessons from positive and challenging experiences to continually grow and evolve.</p>
        <a href="https://www.linkedin.com/in/aakriti-k-14579a256/" ><i class="fa fa-linkedin" aria-hidden="true" /></a>
    </div>

</div>
    </>
  )
}

export default Team; 