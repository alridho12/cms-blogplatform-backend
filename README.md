<div align="center">
  <h1>Sharelocks Homes.<h1>
</div>
  <p align="center">
    <a href="https://github.com/alridho12/cms-blogplatform-fe"><strong>Explore the docs »</strong></a>
    <br />
  <a href="https://cms-blogplatform-fe.vercel.app/">View Demo</a>
    ·
    <a href="https://cms-blogplatform-backend.vercel.app/">Api Demo</a>
  </p>
</p>

## Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Installation](#installation)
  - [Documentation](#documentation)
  - [Related Project](#related-project)
- [Contributors](#contributors)
  - [Meet The Team Members](#meet-the-team-members)

# About The Project

Technical Test.<br>
Nama Proyek: Blogging Platform
Aplikasi web ini akan memungkinkan pengguna untuk:
Membuat dan mengelola blog pribadi.
Menulis dan menerbitkan artikel baru.
Melihat daftar artikel.
Membaca artikel secara lengkap.
Mengedit dan menghapus artikel.

Backend | Buat API endpoint untuk:
Mendapatkan daftar artikel (GET /api/articles)
Membaca artikel secara lengkap (GET /api/articles/:id)
Membuat artikel baru (POST /api/articles)
Mengedit artikel (PUT /api/articles/:id)
Menghapus artikel (DELETE /api/articles/:id)

Frontend | Buat fitur untuk:
Menampilkan daftar artikel.
Menampilkan artikel secara lengkap.
Form untuk membuat artikel baru.
Form untuk mengedit artikel.
Navigasi antara halaman utama (daftar artikel) dan halaman detail/edit artikel.
Buatlah UI/UX sebaik mungkin.

These are the libraries and service used for building this backend API

- [Node.js](https://nodejs.org)
- [Express](https://expressjs.com)
- [PostgreSQL](https://www.postgresql.org)
- [Json Web Token](https://jwt.io)
- [Multer](https://github.com/expressjs/multer)

# Installation

1. Clone this repository

```sh
git clone https://github.com/alridho12/cms-blogplatform-backend
```

2. Change directory to cms-blogplatform-backend

```sh
cd peeworld_be
```

3. Install all of the required modules

```sh
npm install
```

4. Create PostgreSQL database, query are provided in [query.sql](./query.sql)

5. Create and configure `.env` file in the root directory, example credentials are provided in [.env.example](./.env.example)

```txt
- Please note that this server requires Google Drive API credentials and Gmail service account
- Otherwise API endpoint with image upload and account register won't work properly
```

6. Run this command to run the server

```sh
npm run server
```

- Or run this command for running in development environment

```sh
npm run dev
```

- Run this command for debugging and finding errors

```sh
npm run lint
```

## Documentation

Documentation files are provided in the [docs](./docs) folder

- [Postman API colletion]()
- [PostgreSQL database query](./query.sql)

API endpoint list are also available as published postman documentation

[![Run in Postman](https://run.pstmn.io/button.svg)](https://documenter.getpostman.com/view/27920957/2s9YC4Vt4j)

## Related Project

:rocket: [`Backend CMS`](cms-blogplatform-backend)

:rocket: [`Frontend CMS`](https://github.com/alridho12/cms-blogplatform-fe)

:rocket: [`Demo Sharelock Holmes`](https://peeworld-fe-4b1w.vercel.app/)

Project link : [https://github.com/alridho12/cms-blogplatform-backend](https://github.com/alridho12/cms-blogplatform-backend))
