import React from 'react';
import './home.css';
import Nav from '../Componets/layout/nav';
import Button from '../Componets/common/button';
import Scroll from '../Componets/common/scroll';
import Title from '../Componets/common/title'
import Number from '../Componets/common/number';

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
    </>
  );
};

export default Home;