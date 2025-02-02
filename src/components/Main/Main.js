import React, {useState, useEffect} from "react";
import './Main.css';
import smallRight from '../../assets/icons/small-right.png';
import smallLeft from '../../assets/icons/small-left.png';
import search from '../../assets/icons/search.png';
import Playlist1 from '../../assets/playlists/1.jpeg';
import Playlist2 from '../../assets/playlists/2 (1).png';
import Playlist3 from '../../assets/playlists/3.jpeg';
import Playlist4 from '../../assets/playlists/4.jpeg';
import Playlist5 from '../../assets/playlists/5.jpeg';
import Playlist6 from '../../assets/playlists/6.jpeg';
import Playlist7 from '../../assets/playlists/7.jpeg';
import Playlist8 from '../../assets/playlists/8.jpeg';
import Playlist9 from '../../assets/playlists/9.jpeg';
import Playlist10 from '../../assets/playlists/10.jpeg';
import Playlist11 from '../../assets/playlists/11.jpeg';
import Playlist12 from '../../assets/playlists/12.jpeg';
import Playlist13 from '../../assets/playlists/13.jpeg';
import Playlist14 from '../../assets/playlists/14.jpeg';
import Playlist15 from '../../assets/playlists/15.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const Main = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [artists, setArtists] = useState([]);
    const [showPlaylists, setShowPlaylists] = useState(true);

    const fetchArtists = async (term) => {
        if (term.trim() === "") {
            setArtists([]);
            return;
        }

        try {
            const response = await fetch(`http://localhost:5000/artists?name_like=${term.toLowerCase()}`);
            const data = await response.json();
            const filteredArtists = data.filter((artist) => 
            artist.name.toLowerCase().includes(term.toLowerCase())
        );
        setArtists(filteredArtists);
        } catch (error) {
            console.error("Erro ao buscar artistas:", error);
        }
    };

    useEffect(() => {
        if(searchTerm.trim() === "") {
            setShowPlaylists(true);
            setArtists([]);
        } else {
            setShowPlaylists(false);
            fetchArtists(searchTerm);
        }
    }, [searchTerm]);

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="main-container">
        <nav className="header__navigation">
                <div className="navigation">
                    <button className="arrow-left">
                        <img src={smallLeft} alt="seta esquerda"/>
                    </button>
                    <button className="arrow-right">
                        <img src={smallRight} alt="seta direita"/>
                    </button>
                </div>

                    <div className="header__search">
                        <img src={search} alt=""/>
                        <input type="text" id="search-input" maxLength="800" autoCorrect="off" autoCapitalize="off" spellCheck="false" value={searchTerm} onChange={handleInputChange} placeholder="O que você quer ouvir?"/>
                    </div>

                    <div className="header__login">
                        <button className="subscribe">Inscreva-se</button>
                        <button className="login">Entrar</button>
                    </div>
            </nav>

            <div className="playlist-container">
                {showPlaylists ? (
                    <div id="result-playlist">
                    <div className="playlist">
                        <h1 id="greeting">Boas-vindas</h1>
                        <h2 className="session">Navegar por todas as seções</h2>
                    </div>

                    <div className="offer__scroll-container">
                        <div className="offer__list">
                            <section className="offer__list-item">

                                <a href="#" className="cards">
                                    <div className="cards card1">
                                        <img src={Playlist1} alt=""/>
                                        <span>Boas festas</span>
                                    </div>
                                </a>

                                <a href="#" className="cards">
                                    <div className="cards card2">
                                    <img src={Playlist2} alt=""/>
                                        <span>Feitos para você</span>
                                    </div>
                                </a>

                                <a href="#" className="cards">
                                    <div className="cards card3">
                                    <img src={Playlist3} alt=""/>
                                        <span>Lançamentos</span>
                                    </div>
                                </a>

                                <a href="#" className="cards">
                                    <div className="cards card4">
                                    <img src={Playlist4} alt=""/> 
                                        <span>Creators</span>
                                    </div>
                                </a>

                                <a href="#" className="cards">
                                    <div className="cards card5">
                                    <img src={Playlist5} alt=""/>
                                        <span>Para treinar</span>
                                    </div>
                                </a>

                                <a href="#" className="cards">
                                    <div className="cards card6">
                                    <img src={Playlist6} alt=""/>
                                        <span>Podcasts</span>
                                    </div>
                                </a>

                                <a href="#" className="cards">
                                    <div className="cards card7">
                                    <img src={Playlist7} alt=""/>
                                        <span>Sertanejo</span>
                                    </div>
                                </a>

                                <a href="#" className="cards">
                                    <div className="cards card8">
                                    <img src={Playlist8} alt=""/>
                                        <span>Samba e pagode</span>
                                    </div>
                                </a>

                                <a href="#" className="cards">
                                    <div className="cards card9">
                                    <img src={Playlist9} alt=""/>
                                        <span>Funk</span>
                                    </div>
                                </a>

                                <a href="#" className="cards">
                                    <div className="cards card10">
                                    <img src={Playlist10} alt=""/>
                                        <span>MPB</span>
                                    </div>
                                </a>

                                <a href="#" className="cards">
                                    <div className="cards card11">
                                    <img src={Playlist11} alt=""/>
                                        <span>Rock</span>
                                    </div>
                                </a>

                                <a href="#" className="cards">
                                    <div className="cards card12">
                                    <img src={Playlist12} alt=""/>
                                        <span>Hip Hop</span>
                                    </div>
                                </a>

                                <a href="#" className="cards">
                                    <div className="cards card13">
                                    <img src={Playlist13} alt=""/>
                                        <span>Indie</span>
                                    </div>
                                </a>

                                <a href="#" className="cards">
                                    <div className="cards card14">
                                    <img src={Playlist14} alt=""/>
                                        <span>Relax</span>
                                    </div>
                                </a>

                                <a href="#" className="cards">
                                    <div className="cards card15">
                                    <img src={Playlist15} alt=""/>
                                        <span>Música Latina</span>
                                    </div>
                                </a>
                            </section>
                        </div>
                    </div>
                </div>
                ) : (
                    <div id="result-artist">
                    <div className="grid-container">
                        {artists.length > 0 ? (
                            artists.slice(0,1).map((artist) => (
                            <div className="artist-card" key={artist.id}>
                                <div className="card-img">
                                <img id="artist-img" className="artist-img"
                                src={artist.urlImg}
                                alt={artist.name}/>
                                <div className="play">
                                    <span><FontAwesomeIcon icon={faPlay} /></span>
                                </div>
                            </div>
                            <div className="card-text">
                                <span className="artist-name">{artist.name}</span>
                                <span className="artist-categorie">Artista</span>
                            </div>
                        </div>
                            ))
                        ) : (
                            <p className='not-found'>Nenhum artista encontrado</p>
                        )}
                        </div>
                        </div>
                )}
                   </div>
                   </div>
    )
};

export default Main;
