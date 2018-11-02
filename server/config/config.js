// ================================
//             Puerto
// ================================

process.env.PORT = process.env.PORT || 3000;

// ================================
//             Entorno
// ================================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ================================
//          Base de datos
// ================================

let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb://movici:movici123@ds217131.mlab.com:17131/movici';
}
process.env.URLDB = urlDB;