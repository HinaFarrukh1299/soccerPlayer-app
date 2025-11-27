/*import React from 'react';

const PlayerSingle = (props) => {

    return (
        <div className="row">
            <div className="col s12">
                <div className="card">
                    <div className="card-image">
                        <img src="soccer.jpg" alt ="soccer image"><span className="card-title">
                            {props.player.firstName}{props.player.lastName}</span></img>
                    </div>
                    <div className="card-content">
                        <p>Phone: {props.player.phone} -Email: {props.player.email} </p>
                        <p>Strength: {props.player.strength} -Endurance: {props.player.endurance} </p>
                        

                    </div>
                    <div className="card-action">
                        <p> Team : {props.player.team}</p>
                    </div>
                </div>
                </div>
        </div>
    )
}

export default PlayerSingle;*/
///import React from 'react';

/*const PlayerSingle = (props) => {
    return (
        <div className="row">
            <div className="col s12">
                <div className="card">
                    <div className="card-image">
                        <img src="soccer.jpg" alt="soccer image" />
                        <span className="card-title">
                            {props.Player.firstName} {props.Playerplayer.lastName}
                        </span>
                    </div>
                    <div className="card-content">
                        <p>Phone: {props.Player.phone} - Email: {props.Player.email}</p>
                        <p>Strength: {props.Player.strength} - Endurance: {props.Player.endurance}</p>
                    </div>
                    <div className="card-action">
                        <p>Team: {props.Player.team}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlayerSingle; 
/*import React from 'react';

const PlayerSingle = (props) => {
    // Destructure player from props for easier access
    const { player } = props;

    // Check if the player exists
    if (!player) {
        return <div className="row"><div className="col s12">Select a player to view details.</div></div>;
    }

    return (
        <div className="row">
            <div className="col s12">
                <div className="card">
                    <div className="card-image">
                        <img src="soccer.jpg" alt="soccer image" />
                        <span className="card-title">
                            {player.firstName} {player.lastName}
                        </span>
                    </div>
                    <div className="card-content">
                        <p>Phone: {player.phone} - Email: {player.email}</p>
                        <p>Strength: {player.strength} - Endurance: {player.endurance}</p>
                    </div>
                    <div className="card-action">
                        <p>Team: {player.team}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlayerSingle;

/*import React from 'react';

const PlayerSingle = (props) => {
    // Destructure the player prop for easier access
    const { player } = props;

    // If player is not provided, render a placeholder or a message
    if (!player) {
        return <div className="row"><div className="col s12">Select a player to view details.</div></div>;
    }

    return (
        <div className="row">
            <div className="col s12">
                <div className="card">
                    <div className="card-image">
                        <img src="soccer.jpg" alt="soccer image" />
                        <span className="card-title">
                            {player.firstName} {player.lastName}
                        </span>
                    </div>
                    <div className="card-content">
                        <p>Phone: {player.phone} - Email: {player.email}</p>
                        <p>Strength: {player.strength} - Endurance: {player.endurance}</p>
                    </div>
                    <div className="card-action">
                        <p>Team: {player.team}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlayerSingle;*/

/*import React from 'react';

const PlayerSingle = (props) => {
    const { player } = props; // Destructure player from props

    return (
        <div className="row">
            <div className="col s12">
                <div className="card">
                    <div className="card-image">
                        <img src="soccer.jpg" alt="soccer image" />
                        <span className="card-title">
                            {props.player.firstName} {props.player.lastName}
                        </span>
                    </div>
                    <div className="card-content">
                        <p>Phone: {player.phone} - Email: {player.email}</p>
                        <p>Strength: {player.strength} - Endurance: {player.endurance}</p>
                    </div>
                    <div className="card-action">
                        <p>Team: {player.team}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlayerSingle;*/

/*import React from 'react';
import axios from 'axios';

const PlayerSingle = (props) => {
    if (!props.Player) {
        
        return <div>Loading...</div>;
    }

    return (
        <div className="row">
             <img src="/soccer.jpg" alt="soccerimage"/>
            <div className="col s12">
                <div className="card">
                    <div className="card-image">
                        <img src="/soccer.jpg" alt="soccer image"/>
                        <span className="card-title">
                            {props.Player.firstName} {props.Player.lastName}
                        </span>
                    </div>
                    <div className="card-content">
                        <p>Phone: {props.Player.phone} - Email: {props.Player.email}</p>
                        <p>Strength: {props.Player.strength} - Endurance: {props.Player.endurance}</p>
                    </div>
                    <div className="card-action">
                        <p>Team: {props.Player.team}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlayerSingle; */
import React from 'react';

const PlayerSingle = ({player}) => {
    // If no player is provided, show a fallback message
    if (!player) {
        return (
            <div className="row">
                <div className="col s12">
                    <p className="center">Select a player to view details.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="row">
            <div className="col s12">
                <div className="card">
                    <div className="card-image">
                        <img src="/soccer.jpg" alt="soccer player" />
                        <span className="card-title">
                            {player.firstName} {player.lastName}
                        </span>
                    </div>
                    <div className="card-content">
                        <p>Phone: {player.phone} | Email: {player.email}</p>
                        <p>Strength: {player.strength} | Endurance: {player.endurance}</p>
                    </div>
                    <div className="card-action">
                        <p>Team: {player.team || "Not Assigned"}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerSingle;



