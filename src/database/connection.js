import sql from 'mssql'

const dbsettings={
    user:"sa",
    password:"Contraseña123!",
    server:"localhost",
    database:"Ecommerce",
    options:{
        encrypt:false,
        trustServerCertificate:true,
    },
};
export const getconnection=async () =>{
    try {
        const pool= await sql.connect(dbsettings);
        return pool;
    } catch (error) {
        console.error(error);
    }
}
