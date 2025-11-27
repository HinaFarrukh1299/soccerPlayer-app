/*import React from 'react';

/*const PlayerList = (props) => {

    return (
        <div>
            <ul className="collection with-header">
                <li className="collection-header"><h4>Players</h4></li>
                {props.players.map((item) => {
                    <a href="#!" className="collection-item" key={item.id} 
                    onClick={props.updateCurrentPlayer.bind(this,item)}>
                        {props.item.firstName} {props.item.lastName}
                    </a>
                })}
            </ul>
        </div>
    )
}

export default PlayerList; */
/*const PlayerList = (props) => {
    return (
        <div>
            <ul className="collection with-header">
                <li className="collection-header"><h4>Players</h4></li>
                {props.players.map((item) => (
                    <a href="#!" className="collection-item" key={item._id} onClick={props.updateCurrentPlayer.bind(this,item)}>
                        {item.firstName} {item.lastName}
                    </a>
                ))}
            </ul>
        </div>
    );
}

export default PlayerList;*/
/*import React from 'react';

const PlayerList = (props) => {
    return (
        <div>
            <ul className="collection with-header">
                <li className="collection-header"><h4>Players</h4></li>
                {props.players.map((item) => (
                    <a 
                        href="#!" 
                        className="collection-item" 
                        key={item._id} 
                        onClick={() => props.updateCurrentPlayer(item)} // Use arrow function
                    >
                        {item.firstName} {item.lastName}
                    </a>
                ))}
            </ul>
        </div>
    );
}

export default PlayerList; 

/* import React from 'react';

const PlayerList = (props) => {
    return (
        <div>
            <ul className="collection with-header">
                <li className="collection-header"><h4>Players</h4></li>
                {props.players.map((player) => (
                    <a 
                        href="#!" 
                        className="collection-item" 
                        key={player.id} 
                        onClick={() => props.updateCurrentPlayer(player)} // Use an arrow function
                    >
                        {player.firstName} {player.lastName}
                    </a>
                ))}
            </ul>
        </div>
    );
}

export default PlayerList;*/
import React from 'react';

const PlayerList = (props) => {
    return (
        <div>
            <ul className="collection with-header">
                <li className="collection-header"><h4>Players</h4></li>
                {props.players && props.players.length > 0 ? (
                    props.players.map((player) => (
                        <a 
                            href="#!" 
                            className="collection-item" 
                            key={player._id || player.id} // Ensure a unique key exists
                            onClick={() => props.updateCurrentPlayer(player)} // Use arrow function
                        >
                            {player.firstName} {player.lastName}
                        </a>
                    ))
                ) : (
                    <li className="collection-item">No players available</li>
                )}
            </ul>
        </div>
    );
};

export default PlayerList;
