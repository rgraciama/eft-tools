import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Hideout.css';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import MiniLoader from '../components/MiniLoader';

class Hideout extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  componentDidMount() {
    this.fetchData();

    this.intervalId = setInterval(this.fetchData, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      // const data = await api.Hideout.list();
      const data = {};
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading === true && !this.state.data) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <React.Fragment>
        <div className="Hideout__container">
            <div className="Hideout__row">
              <div className="Hideout__item-recipe">
                <img alt="EFT Painkillers Icon.png"
                     src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/e/e0/EFT_Painkillers_Icon.png?version=e9f17e7413d2b1fc975ef0cdd3240320"
                     decoding="async" width="64" height="64"/>
              </div>
              <div className="Hideout__plus"/>
              <div className="Hideout__item-recipe">
                <img alt="EFT Aseptic-Bandage Icon.png"
                     src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/1/11/EFT_Aseptic-Bandage_Icon.png?version=b5344570754168e1ec6b9a0a2860293e"
                     decoding="async" width="64" height="64"/>
              </div>
              <div className="Hideout__plus"/>
              <div className="Hideout__item-recipe">
                <img className="Hideout__element" alt="EFT Splint Icon.png"
                     src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/2/26/EFT_Splint_Icon.png?version=1d7c0790f8310cd1ec32195afff79d7d"
                     decoding="async" width="64" height="64"/>
                <div className="Hideout__price" name="Salewa_FIRST_AID_KIT"/>
              </div>
              <div className="Hideout__result"/>
              <div className="Hideout__item-result">
                <img className="Hideout__element"
                    src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/7/77/EFT_Salewa-First-Aid-Kit_Icon_2.png?version=9d93631cdd651f147d2b843705679e62"
                    decoding="async" width="64" height="127"/>
                <div className="Hideout__price" name="Salewa_FIRST_AID_KIT"/>
              </div>
            </div>

          {this.state.loading && <MiniLoader />}
        </div>
      </React.Fragment>
    );
  }
}

export default Hideout;
