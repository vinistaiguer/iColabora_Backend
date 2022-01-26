async function selectTasks(){
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM tasks;');
    return rows;
}

module.exports = {selectTasks};