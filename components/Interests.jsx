import React from 'react'
import InterestBox from './InterestBox'

class Interests extends React.Component {
  render() {
    return (
      <div className="interests-section" id="interests-section">
        <h2 className="section-header">Interests</h2>
        <div className="pure-g">
          <div className="pure-u-1-2 pure-u-md-1-2 pure-u-lg-1-3"><InterestBox name="Github" iconClass="fab fa-github-alt fa-5x" link="https://github.com/Mechdriver"/></div> {/*Github*/}
          <div className="pure-u-1-2 pure-u-md-1-2 pure-u-lg-1-3"><InterestBox name="Steam" iconClass="fab fa-steam-symbol fa-5x" link="http://steamcommunity.com/id/mechdriver/"/></div> {/*Steam Account*/}
          <div className="pure-u-1-2 pure-u-md-1-2 pure-u-lg-1-3"><InterestBox name="PokéDex" iconClass="fas fa-paw fa-5x" link="https://pokedextracker.com/u/zbehnke/living-dex"/></div> {/*Pokemon Living Dex*/}
          <div className="pure-u-1-2 pure-u-md-1-2 pure-u-lg-1-3"><InterestBox name="LinkedIn" iconClass="fab fa-linkedin-in fa-5x" link="https://www.linkedin.com/in/zachbehnke/"/></div> {/*LinkedIn*/}
          <div className="pure-u-1-2 pure-u-md-1-2 pure-u-lg-1-3"><InterestBox name="Strength" iconClass="fas fa-dumbbell fa-5x" link="https://symmetricstrength.com/lifter/mechdriver"/></div> {/*Symmetric Strength*/}
          <div className="pure-u-1-2 pure-u-md-1-2 pure-u-lg-1-3"><InterestBox name="Twitter" iconClass="fab fa-twitter fa-5x" link="https://twitter.com/BehnkeCodes"/></div> {/*Spotify Account*/}
        </div>
      </div>
    );
  }
};

export default Interests
