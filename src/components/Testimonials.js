import React from "react";
import Slider from "react-slick";

const settings = {
  // dots: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  slideToShow: 1,
  slideToScroll: 1,
  swipeToSlide: true
};

const Testimonials = () => (
  <section id="testimonials">
    <div className="text-container">
      <div className="row">
        <div className="two columns header-col" />
        <div className="ten columns">
          <h1>Programming Quotes And Sayings</h1>
          <ul>
            <Slider {...settings}>
            <li>
                <blockquote>
                  <p>
                  Any fool can write code that a computer can understand. Good programmers write code that humans can understand.
                  </p>
                  <cite>Martin Fowler, 2008.</cite>
                </blockquote>
              </li>
              <li>
                <blockquote>
                  <p>
                  Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code. 
                  </p>
                  <cite>Dan Salomon</cite>
                </blockquote>
              </li>
              <li>
                <blockquote>
                  <p>
                  A good programmer is someone who always looks both ways before crossing a one-way street
                  </p>
                  <cite>Doug Linder</cite>
                </blockquote>
              </li>              
              <li>
                <blockquote>
                  <p>
                    Your work is going to fill a large part of your life, and
                    the only way to be truly satisfied is to do what you believe
                    is great work. And the only way to do great work is to love
                    what you do. If you haven't found it yet, keep looking.
                    Don't settle. As with all matters of the heart, you'll know
                    when you find it.
                  </p>
                  <cite>Steve Jobs</cite>
                </blockquote>
              </li>
              <li>
                <blockquote>
                  <p>
                  It's not a bug - it's an undocumented feature. 
                  </p>
                  <cite>Author Unkown :)</cite>
                </blockquote>
              </li>
              
              <li>
                <blockquote>
                  <p>
                  Comprehensiveness is the enemy of comprehensibility
                  </p>
                  <cite>Martin Fowler</cite>
                </blockquote>
              </li>              
              <li>
                <blockquote>
                  <p>
                  If (domain logic) then CQRS, or Saga? <br/>
                  The “if” statement – the guard clause that makes sure that what shouldn’t happen, can’t happen. 
                  We see it all over our code base, especially in our domain logic. 
                  The thing is, when we use properties of domain objects in those if-statements, 
                  we don’t even realize that other agents may have just changed that data – or will change it just a second later. 
                  In essence, hiding behind those little “ifs”, are all kinds of race conditions and collaborative domains – the places where CQRS approaches are necessary.
                  </p>
                  <cite>Udi Dahan</cite>
                </blockquote>
              </li>
              <li>
                <blockquote>
                  <p>
                  It works on my machine.
                  </p>
                  <cite>Author Unkown :)</cite>
                </blockquote>
              </li>   
              <li>
                <blockquote>
                  <p>
                  People also underestimate the time they spend debugging. They underestimate how much time they can spend chasing a long bug. 
                  With testing, I know straight away when I added a bug. That lets me fix the bug immediately, before it can crawl off and hide. 
                  There are few things more frustrating or time wasting than debugging. 
                  Wouldn't it be a hell of a lot quicker if we just didn't create the bugs in the first place?
                  </p>
                  <cite>Martin Fowler (2002) as cited in Evolutionary Design: A Conversation with Martin Fowler, Part III by Bill Venners, November 18, 2002.</cite>
                </blockquote>
              </li>
            </Slider>
          </ul>
        </div>
        {/* <div className="ten columns flex-container">
          <div className="flexslider">
            <ul className="slides">
              <li>
                <blockquote>
                  <p>
                    Your work is going to fill a large part of your life, and
                    the only way to be truly satisfied is to do what you believe
                    is great work. And the only way to do great work is to love
                    what you do. If you haven't found it yet, keep looking.
                    Don't settle. As with all matters of the heart, you'll know
                    when you find it.
                  </p>
                  <cite>Steve Jobs</cite>
                </blockquote>
              </li>

              <li>
                <blockquote>
                  <p>
                    This is Photoshop's version of Lorem Ipsum. Proin gravida
                    nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                    quis bibendum auctor, nisi elit consequat ipsum, nec
                    sagittis sem nibh id elit. Duis sed odio sit amet nibh
                    vulputate cursus a sit amet mauris.
                  </p>
                  <cite>Mr. Adobe</cite>
                </blockquote>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
    </div>
  </section>
);

export default Testimonials;
