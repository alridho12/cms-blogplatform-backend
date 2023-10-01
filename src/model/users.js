const pool = require("../config/db");

const create = (data) => {
  const { nama, email, passwordHash, id} = data;
  return pool.query(
    `INSERT INTO user_blog(user_id,nama,email,password) VALUES('${id}','${nama}','${email}','${passwordHash}')`
  );
};

const updateUser = (data) => {
  const { id, nama,photo_profile } = data;
  return pool.query(
    `UPDATE user_blog SET nama='${nama}',photo_profile='${photo_profile}'  WHERE user_id='${id}'`
  );
};

const findEmail = (email) => {
  return new Promise((resolve, reject) =>
    pool.query(
      `SELECT * FROM user_blog WHERE email = '${email}'`,
      (error, result) => {
        if (!error) {
          resolve(result);
        } else {
          reject(error);
        }
      }
    )
  );
};


const findId = (id) => {
  return new Promise((resolve, reject) =>
    pool.query(
      `SELECT user_id FROM user_blog WHERE user_id='${id}'`,
      (error, result) => {
        if (!error) {
          resolve(result);
        } else {
          reject(error);
        }
      }
    )
  );
};


const searchUser = (search, limit, offset, sortby, sort) => {
  return pool.query(
    `SELECT * FROM user_blog WHERE nama ILIKE '%${search}%' ORDER BY ${sortby} ${sort} LIMIT ${limit} OFFSET ${offset}`
  );
};

const selectUser = (id) => {
  return pool.query(`SELECT * FROM user_blog WHERE user_id='${id}'`);
};

module.exports = {
  findEmail,
  findId,
  create,
  selectUser,
  updateUser,
  searchUser,
};
