import React, {useState, useEffect} from "react";

const ArtistSearch = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [artists, setArtists] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);

    useEffect(() => {
        if(searchTerm.trim() === "") {
            setArtists([]);
            setHasSearched(false);
            return;
        }

        setHasSearched(true);

        const url = `http://localhost:5000/artists?name_like=${searchTerm.toLowerCase()}`;

        fetch(url)
        .then((response) => response.json())
        .then((result) => {
            setArtists(result);
        })
        .catch((error) => {
            console.error("Erro na requisição:", error);
            setArtists([]);
        });
    }, [searchTerm]);

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="main-container">
        <nav className="header__navigation">
        <div className="header__search">
        <input type="text" id="search-input" maxLength="800" autoCorrect="off" autoCapitalize="off" spellCheck="false" value={searchTerm} onChange={handleInputChange} placeholder="O que você quer ouvir?"/>
        </div>
        </nav>

        <div className="playlist-container">
            {(!hasSearched || searchTerm.trim() === "") && (
                <div id="result-playlist">
                <div className="playlist">
                    <h1 id="greeting">Boas-vindas</h1>
                    <h2 className="session">Navegar por todas as seções</h2>
                </div>
                </div>
            )}

            {hasSearched && (
                <div id="result-artist">
                <div className="grid-container">
                    {artists.length > 0 ? (
                        artists.map((artist) => (
                        <div className="artist-card" key={artist.id}>
                            {artist.urlImg}
                            {artist.name}
                            
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
        
    );
};

export default ArtistSearch;