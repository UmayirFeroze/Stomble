import mysql  from 'mysql';

const params = {
    host:'localhost',
    database: 'stomble',
    user:'root',
    password:'',
}

const Connect = async () => new Promise<mysql.Connection>((resolve, reject)=>{
    const connection = mysql.createConnection(params);
    connection.connect((error:any)=>{
       if (error) return reject(error);

       return resolve(connection);
    });
})


const Query = async (connection:mysql.Connection, query:string) => new Promise((resolve, reject)=>{
    connection.query(query, connection, (error, result)=>{
        if (error) return reject(error);
        resolve(result);
    })
})

export {Connect, Query}
