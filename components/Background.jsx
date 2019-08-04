import React from 'react'

class Background extends React.Component {
  render() {
    return (
      <div className="background-container" id="background-container">
        <h2 className="section-header">
          <span>My Background</span>
        </h2>
        <div className="background-section">
            <p>
              I was raised around computers. My dad was a programmer and would constantly work and play with them throughout my childhood.
              My early experiences with computers involved video games. I loved point and click adventure games and whatever retro games my dad could emulate on his machines.
            </p>
            <p>
              I knew what programming was thanks to the Foxtrot and Dilbert comics that I would read obsessively. I really wanted
              to learn C++ but I could not find the proper resources to teach myself. Even though I was motivated to learn, I found programming textbooks daunting.
            </p>
            <p>
              As I was applying to colleges I knew that I wanted to work with computers. I wanted to program them. I applied early to Cal Poly SLO for Software Engineering.
              After a few months of anticipation I was accepted.
            </p>
            <p>
              Before I left for college I decided to teach myself some programming. I discovered Python and attempted to write a small text based adventure game.
              Python is still one of my favorite languages and it is my top choice for projects and scripts.
            </p>
            <p>
              With time, work, and internships I became more and more adept at programming. My classes gave me exposure to OpenGL, Android, and a variety of languages.
              One of my internships introduced me to embedded systems. My part time job during my Senior year introduced me to industry level software development.
            </p>
            <p>
              After I graduated from Cal Poly I received a job offer for a company in the Bay Area. I am currently working there as a web developer.
              My weekends are spent hiking with my girlfriend, breeding Pokémon, and tinkering with interesting JavaScript frameworks.
            </p>
            <p>
              If you would like to get in touch, I can be contacted through LinkedIn or through my Contact Form.
            </p>
        </div>
      </div>
    );
  }
};

export default Background;
