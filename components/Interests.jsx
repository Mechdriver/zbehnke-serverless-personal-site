import React from 'react'
import InterestBox from './InterestBox'

class Interests extends React.Component {
  render() {
    return (
      <div className="interests-section" id="interests-section">
        <h2 className="section-header">Interests</h2>
        <div className="pure-g">
          <div className="pure-u-1-2 pure-u-md-1-2 pure-u-lg-1-3"><InterestBox name="Github" iconClass="fa fa-github fa-5x" aria-hidden="true" link="https://github.com/Mechdriver"/></div> {/*Github*/}
          <div className="pure-u-1-2 pure-u-md-1-2 pure-u-lg-1-3"><InterestBox name="Steam" iconClass="fa fa-steam fa-5x" aria-hidden="true" link="http://steamcommunity.com/id/mechdriver/"/></div> {/*Steam Account*/}
          <div className="pure-u-1-2 pure-u-md-1-2 pure-u-lg-1-3"><InterestBox name="PokéDex" iconClass="fa fa-paw fa-5x" aria-hidden="true" link="https://pokedextracker.com/u/zbehnke/living-dex"/></div> {/*Pokemon Living Dex*/}
          <div className="pure-u-1-2 pure-u-md-1-2 pure-u-lg-1-3"><InterestBox name="LinkedIn" iconClass="fa fa-linkedin-square fa-5x" aria-hidden="true" link="https://www.linkedin.com/in/zachbehnke/"/></div> {/*LinkedIn*/}
          <div className="pure-u-1-2 pure-u-md-1-2 pure-u-lg-1-3"><InterestBox name="Strength" iconClass="fa fa-user fa-5x" aria-hidden="true" link="https://symmetricstrength.com/lifter/mechdriver"/></div> {/*Symmetric Strength*/}
          <div className="pure-u-1-2 pure-u-md-1-2 pure-u-lg-1-3"><InterestBox name="Spotify" iconClass="fa fa-spotify fa-5x" aria-hidden="true" link="https://open.spotify.com/user/mechdriver"/></div> {/*Spotify Account*/}
        </div>
      </div>
    );
  }
};

export default Interests
