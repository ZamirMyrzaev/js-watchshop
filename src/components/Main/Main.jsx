import React from 'react';
import './Main.css'
import RolexWatch from '../../assets/rolex_watch.jpg';
import PatekWatch from '../../assets/patek_watch.jpg';
import HublotWatch from '../../assets/hublot_watch.jpg';
import MadMan from '../../assets/Rectangle 8.png';
import MadMan2 from '../../assets/Rectangle 9.png';

const Main = () => {
    
    return (
        <div className='main'>
            <section className="first">
                <div className="left_side">
                    <p className="text">SEASON 2021/22</p>
                    <div className="bg-line"></div>
                    <div className="season_card">
                        <div className="card_1">
                            <img className="season_watch" src={RolexWatch} alt="" />
                            <p className="name_watch">Rolex Milgauss</p>
                        </div>
                        <div className="card_1">
                            <img className="season_watch" src={PatekWatch} alt="" />
                            <p className="name_watch">Patek Philippe</p>
                        </div>
                        <div className="card_1">
                            <img className="season_watch" src={HublotWatch} alt="" />
                            <p className="name_watch">Hublot Unigo</p>
                        </div>
                    </div>
                </div>
                <div className="right_side">
                    <img className="content" src={MadMan} alt="MadMan" />
                </div>
            </section>
            <section className="second">
                <div className='left_side'>
                    <img className="content" src={MadMan2} alt="MadMan" />
                </div>
                <div className="right_side">
                    <p className="text1">COLLECTION 2020</p>
                    <div className="bg-line1"></div>
                    <div className="text_box">
                    <p className="text_content">The art of fusion: Hublot successfully 
                    brings together the art and tradition of horology and innovation. 
                    Since 1980, the Swiss company has been manufacturing watches of the highest quality, 
                    which stand out due to their extravagant design and exquisite choice in materials. 
                    </p>
                    </div>
                    <button className="btn_1">VIEW THE COLLECTION</button>
                </div>
            </section>
        </div>
    );
};

export default Main;