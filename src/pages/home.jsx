import React from 'react';
import './home.css';
import Nav from '../Componets/layout/nav';
import Button from '../Componets/common/button';
import Scroll from '../Componets/common/scroll';
import Title from '../Componets/common/title'
import Number from '../Componets/common/number';
import Practice from '../Componets/common/practice';
import Team from '../Componets/common/team';
import t1 from '../assets/team1.png'
import t2 from '../assets/team2.png'
import t3 from '../assets/image 9.png'

const Home = () => {
  return (
    <>
      <Nav />
      <div className='backgroundimg'></div>
      <section className='s1'>
        <div className='circle'></div>
        <div className='div1'>
          <Title 
                mainText="Your Case. Our Commitment. Total"
                highlightText="Victory." 
            />
          <Button 
          text="LEARN MORE"
          />
          <Scroll />
        </div>
      </section>

      <section id="section2" className="s2">
        <div className='s2div'>
            <div className='s2div2'>
                <div className='div3'>
                    <Title 
                        mainText="ABOUT"
                    />
                    <div className='line'></div>
                   <p>
                        <span>
                            At Lexora, we believe that the law is more than just a set of rules—it is a commitment to the people and businesses we serve. Since [Year], our firm has stood as a pillar of stability in an ever-changing legal landscape.
                        </span>
                        <span className="p2">
                            We don’t just manage cases; we build relationships. Our partners bring a combined [Number] years of experience to the table, ensuring that every client benefits from seasoned perspective and unwavering advocacy. When you walk through our doors, you aren’t just a file—you are our priority.
                        </span>
                    </p>
                    <Button 
                    text="EXPLORE"
                    />
                </div>
                <div className='photo'></div>
            </div>
            <div className='numberdiv'>
                <Number 
                num="20+"
                numbp="Years of Experience"
                />
                <Number 
                num="500+"
                numbp="Cases Successfully Handled"
                />
                <Number 
                num="10+"
                numbp="Practice Areas Covered"
                />
            </div>
        </div>
      </section>
      <section className='s3'>
        <div className='s3div'>
            <div className='ourvision'>
                <Title 
                        mainText="OUR VISION"
                    />
                <div className='golddiv'>
                    <p>To be the definitive cornerstone of legal excellence—shaping the future of advocacy through unwavering integrity, sophisticated strategy, and a relentless commitment to protecting our clients' legacies.
                        </p>
                </div>
            </div>
            <div className='line2'></div>
            <div className='ourvision'>
                <div className='golddiv two'>
                    <p> To provide sophisticated legal counsel and aggressive advocacy that secures our clients' interests. We combine deep technical expertise with a tireless commitment to achieving the most favorable outcomes in the most complex environments.
                        </p>
                </div>
                 <Title 
                        mainText="OUR MISSION"
                    />
            </div>
        </div>
      </section>
      <section className='s4'>
        <div className='s4div1'>
             <Title 
                        mainText="PRACTICE AREAS"
                    />
            <div className='practice-container'>
                <Practice 
                ptitle="Corporate Law"
                pp="Advising businesses on contracts, compliance, mergers, and corporate governance."
                />
                  <Practice 
                ptitle="Criminal Law"
                pp="Defense representation and legal counsel for criminal cases at all levels."
                />
                  <Practice 
                ptitle="Family Law"
                pp="Handling divorce, child custody, adoption, and other family-related legal matters."
                />
                  <Practice 
                ptitle="Intellectual Property"
                pp="Protecting patents, trademarks, copyrights, and trade secrets."
                />
                  <Practice 
                ptitle="Intellectual Property"
                pp="Assisting with property disputes, contracts, leasing, and transactions."
                />
                  <Practice 
                ptitle="Real Estate Law"
                pp="Guiding workplace rights, contracts, and employment disputes."
                />
             
            </div>
            <Button 
                    text="EXPLORE"
                    />
        </div>
      </section>
      <section className='s5'>
        <div className='s5div'>
            <div className="why">
                <Title
                    mainText="why choose"
                    highlightText="us"
                 />
            </div>
            <div className='s5div2'>
                <p className='p2'>Our commitment, experience, and proven track record set us apart in providing top-notch legal services."</p>
                <div className='goldiv2'>
                    <p>At our firm, we combine over 20 years of legal expertise with a commitment to personalized service and proven results. Our experienced team of attorneys is dedicated to guiding clients through every step of the legal process with integrity, professionalism, and attention to detail. Recognized for our trusted reputation and comprehensive support, we strive to deliver effective solutions tailored to each client’s unique needs</p>
                </div>
            </div>
            
        </div>
      </section>
      <section className='s6'>
        <div className='s6div'>
             <Title 
                 mainText="our team"
            />
            <div className='team'>
               <Team
               img ={t1}
                teamtext="John Smith"
                teamp="Corporate Lawyer"
                teams="12+ years experience handling mergers, acquisitions, and corporate compliance."
                />

                <Team
                img ={t2}
                teamtext="David Johnson"
                teamp="Criminal Defense Attorney"
                teams="Specializes in high-profile criminal cases, protecting client rights with proven results."
                />

                <Team
                img ={t3}
                teamtext="Robert Wilson"
                teamp="Family Law Specialist"
                teams="Expert in mediation and family dispute resolution, helping clients find amicable solutions."
                />
            </div>
        </div>
      </section>
    </>
  );
};

export default Home;