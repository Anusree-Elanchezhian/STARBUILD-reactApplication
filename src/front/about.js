
import './about.css';

function About()
{
  const mailData = ()  =>{
    const emailTo ='ajayb@gmail.com';
    const emailCC = '';
    const emailSub = '';
    const emailBody = '';
    window.open("mailto:"+emailTo+'?cc='+emailCC+'&subject='+emailSub+'&body='+emailBody);
  }
  const mailData1 = ()  =>{
    const emailTo ='harinim@gmail.com';
    const emailCC = '';
    const emailSub = '';
    const emailBody = '';
    window.open("mailto:"+emailTo+'?cc='+emailCC+'&subject='+emailSub+'&body='+emailBody);
  }
  const mailData2 = ()  =>{
    const emailTo ='anusree@gmail.com';
    const emailCC = '';
    const emailSub = '';
    const emailBody = '';
    window.open("mailto:"+emailTo+'?cc='+emailCC+'&subject='+emailSub+'&body='+emailBody);
  }
  const mailData3= ()  =>{
    const emailTo ='dhakshinyaca@gmail.com';
    const emailCC = '';
    const emailSub = '';
    const emailBody = '';
    window.open("mailto:"+emailTo+'?cc='+emailCC+'&subject='+emailSub+'&body='+emailBody);
  }
    return(
        <div>
            <div>
               <h1>&nbsp;&nbsp;&nbsp;&nbsp;</h1>
            </div>
         <div>   
             <img className="image" src="https://res.cloudinary.com/dtrytsho8/image/upload/v1669134211/about_wkyyic.png" alt=" "></img>
             <p className="para">At Starbuild, we believe that architecture 
                                belongs to the people it serves. Our mission is to improve the lives of the
                                individual and the community. We create by listening to the needs of society,
                                and with the principle that the basic design chisel of creating architecture
                                should be its purpose, which is at the same time always unique in specific 
                                desires, and universal in offering the improvement of life.</p>
             </div>
             <div class="row">
  <div class="column">
    <div class="card">
      <img class="abc" src="https://res.cloudinary.com/dtrytsho8/image/upload/v1669134542/ajay_cyxar8.jpg" alt="Jane"></img>
      <div class="container">
        <h2>&nbsp;AJAY B</h2>
        <p class="title">&nbsp;CEO &amp; Founder</p>
        <p>&nbsp;Excels in entrepreneurship.</p>
        <p>&nbsp;ajayb@gmail.org</p>
        <p><button class="button" onClick={mailData}>&nbsp;Contact</button></p>
      </div>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <img class="abc" src="https://res.cloudinary.com/dtrytsho8/image/upload/v1669134586/harini_zvnme3.jpg" alt="Mike" ></img>
      <div class="container">
        <h2>&nbsp;HARINI M</h2>
        <p class="title">&nbsp;Architect</p>
        <p>&nbsp;Most experienced hand of starbuild.</p>
        <p>&nbsp;harinim@gmail.org</p>
        <p><button class="button" onClick={mailData1}>&nbsp;Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img class="abc" src="https://res.cloudinary.com/dtrytsho8/image/upload/v1669135154/WhatsApp_Image_2022-11-22_at_9.57.59_PM_wj4qjw.jpg" alt="John" ></img>
      <div class="container">
        <h2>&nbsp;ANUSREE ELANCHEZHIAN</h2>
        <p class="title">&nbsp;Interior Designer</p>
        <p>&nbsp;Unique and artistic mind of starbuild</p>
        <p>&nbsp;anusree@gmail.org</p>
        <p><button class="button" onClick={mailData2}>&nbsp;Contact</button></p>
      </div>

      
    </div>
  </div>
  <div class="column">
    <div class="card">
      <img class="abc" src="https://res.cloudinary.com/dtrytsho8/image/upload/v1669134572/dhaks_mo4mu3.jpg" alt="John" ></img>
      <div class="container">
        <h2>&nbsp;DHAKSHINYA C A</h2>
        <p class="title">&nbsp;Civil Engineer</p>
        <p>&nbsp;Has completed 100+ successful projects.</p>
        <p>&nbsp;dhakshinyaca@gmail.org</p>
        <p><button class="button" onClick={mailData3}>&nbsp;Contact</button></p>
      </div>

      
    </div>
  </div>
</div>
             
        </div>   
        
        );
}
export default About;