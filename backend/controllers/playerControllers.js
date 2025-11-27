/*import mongoose from 'mongoose';
import { playerSchema } from '../models/playerModel';

const Player = mongoose.model('Player',playerSchema);

// function to create a new player
 export const addNewPlayer = async(req,res) => {
    let newPlayer = Player(req.body)
 
 try {
    const player = await newPlayer.save();
    res.json(player)
 }
 catch (err)
{
    res.send(err)
}}

export const getPlayers = async(req,res) =>{

   try {
      const players = await Player.find({});
      res.json(players);

   }
   catch (err)
   {
       res.send(err)
   }
}
export const getPlayerWithID = async (req,res) => {

   try {
      const player = await Player.findById(req.params.PlayerId);
      res.json(player);


   }
   catch(err){
      res.send(err);
   }
}
// put function is basically the update function for player

export const updatePlayer = async(req,res) => {

   try{
      const player= await Player.findByIdAndUpdate(
         {_id: req.params.PlayerId},
         req.body,
         {new: true}  
      )
      res.json(player);
   }
   catch(err)
{
   res.send(err)
}}
// function to delete a player
 export const deletePlayer = async (req,res) =>{
   try{
      const player = await Player.findByIdAndDelete(
         {Player: req.params.PlayerId})
         res.json({message:"successfully deleted"})
      

   }
   catch(err){
      res.send(err);
   }
 }
*/
import mongoose from 'mongoose';
import { playerSchema } from '../models/playerModel';

const Player = mongoose.model('Player', playerSchema);

// Function to create a new player
export const addNewPlayer = async (req, res) => {
    try {
        const newPlayer = new Player(req.body);
        const player = await newPlayer.save();
        res.status(201).json(player); // 201 Created
    } catch (err) {
        res.status(500).json({ error: 'Failed to create player' });
    }
};

// Get all players
export const getPlayers = async (req, res) => {
    try {
        const players = await Player.find({});
        res.status(200).json(players); // 200 OK
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve players' });
    }
};

// Get a player by ID
export const getPlayerWithID = async (req, res) => {
    try {
        const player = await Player.findById(req.params.PlayerId);
        if (!player) {
            return res.status(404).json({ error: 'Player not found' }); // 404 Not Found
        }
        res.status(200).json(player);
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve player' });
    }
};

// Update a player by ID
export const updatePlayer = async (req, res) => {
    try {
        const player = await Player.findByIdAndUpdate(
            req.params.PlayerId,
            req.body,
            { new: true, runValidators: true } // Ensure validation and return updated document
        );
        if (!player) {
            return res.status(404).json({ error: 'Player not found' });
        }
        res.status(200).json(player);
    } catch (err) {
        res.status(500).json({ error: 'Failed to update player' });
    }
};

// Delete a player by ID
export const deletePlayer = async (req, res) => {
    try {
        const player = await Player.findByIdAndDelete(req.params.PlayerId);
        if (!player) {
            return res.status(404).json({ error: 'Player not found' });
        }
        res.status(200).json({ message: 'Player successfully deleted' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete player' });
    }
};
