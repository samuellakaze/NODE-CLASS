const routes=require('express').Router();
const db = require('./db');

//insert
routes.post('/insert',async function(req,res){
    const {name,age,classe}=req.body;
    await db.query('INSERT INTO `students`( `name`, `age`, `classe`) VALUES (?,?,?)',[name,age,classe])
    res.send('new user was created successfully');
});

routes.get('/students',async function(req,res){
    const select=await db.query('SELECT * FROM students');
    res.send(select[0])
});
routes.delete('/delete', async function(req, res) {
    const {id} = req.body;
     await db.query('DELETE FROM `students` WHERE id=?', [id]);
    res.send('Student deleted successfully');
});
routes.put('/update', async function(req, res) {
    const { id, name, age, classe } = req.body;
    await db.query('UPDATE `students` SET `name`=?, `age`=?, `classe`=? WHERE `id`=?',
        [name, age, classe, id]
    );
    res.send('Student updated successfully');
});

module.exports=routes;