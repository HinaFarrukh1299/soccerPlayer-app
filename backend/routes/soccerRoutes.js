/*import { 
    addNewPlayer,
    getPlayers,
    getPlayerWithID,
    updatePlayer,
    deletePlayer
 } from "../controllers/playerControllers"

 const routes = app => {
    app.route('/players').post(addNewPlayer);//post endpoint
    app.route('/getPlayer').get(getPlayers);//get endpoint
    app.route('/player/:PlayerId').get(getPlayerWithID);//another get endpoint
    //app.route('updatePlayer/:PlayerId').put(updatePlayer);//will update a specific player
    app.route('/player/:PlayerId').put(updatePlayer);
    app.route('/player/:PlayerId').delete(deletePlayer);
 }
 
 export default routes;*/
 import { 
   addNewPlayer,
   getPlayers,
   getPlayerWithID,
   updatePlayer,
   deletePlayer
} from "../controllers/playerControllers";

const routes = (app) => {
   app.route('/players')
       .post(addNewPlayer); // POST endpoint for adding a player
   
   app.route('/getPlayer')
       .get(getPlayers); // GET endpoint for fetching all players

   app.route('/player/:PlayerId')
       .get(getPlayerWithID)  // GET endpoint for fetching a player by ID
       .put(updatePlayer)     // PUT endpoint for updating a player
       .delete(deletePlayer); // DELETE endpoint for deleting a player
};

export default routes;

