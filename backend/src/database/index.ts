import { createConnections } from 'typeorm';
import sqlite from 'sqlite3';

createConnections().then(() => console.log('Successfully connection'));