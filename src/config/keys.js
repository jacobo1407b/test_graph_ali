const {HOST,USER,PASS,DB} = process.env
module.exports={
    host: HOST || "localhost",
    user: USER || "root",
    password: PASS || "",
    database: DB || "test",
    tabla: "users_test_jacobohernandez"
}