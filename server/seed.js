import 'dotenv/config';

import { db } from './configs/db.js';

const pengguna = [
    {
        username: 'nathan121',
        email: 'nathan@mail.com',
        password: '$2b$10$vD5yRWdxLp1j6riuSi/Ozu71x145viXeGC7AHT5R0WcycGalmYTae',
        avatar:
            'https://g.codewithnathan.com/default-user.png',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    },
    {
        username: 'jane78',
        email: 'jane@mail.com',
        password: '$2b$10$vD5yRWdxLp1j6riuSi/Ozu71x145viXeGC7AHT5R0WcycGalmYTae',
        avatar:
            'https://g.codewithnathan.com/default-user.png',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    },
    {
        username: 'farhan123',
        email: 'farhan@mail.com',
        password: '$2b$10$vD5yRWdxLp1j6riuSi/Ozu71x145viXeGC7AHT5R0WcycGalmYTae',
        avatar:
            'https://g.codewithnathan.com/default-user.png',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    },
];

const pemesanan = [
    {
        name: 'Air terjun 7 bidadari',
        description: 'lorem ipsum dolor sit amet',
        priority: 'not urgent',
        due: new Date().toISOString(),
        status: 'open',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    },
    {
        name: 'Museum Lhokseumawe',
        description:
            'lorem ipsum dolor sit amet',
        priority: 'urgent',
        due: new Date().toISOString(),
        status: 'open',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    },
];

try {
    // Seeding Users
    let collection = db.collection('pengguna');
    console.log('[seed]', 'Seeding pengguna...');
    const result = await collection.insertMany(pengguna);
    console.log(result.insertedIds);
    console.log('[seed]', 'Seeding pengguna Done');

    // Seeding Tasks
    pemesanan[0].owner = result.insertedIds[0];
    pemesanan[1].owner = result.insertedIds[1];

    collection = db.collection('pemesanan');
    console.log('[seed]', 'Seeding pemesanan...');
    await collection.insertMany(pemesanan);
    console.log('[seed]', 'Seeding pemesanan Done');

    console.log('[seed]', 'All Done');
} catch (error) {
    console.log('[seed]', 'Error: ', error);
}

process.exit();