import 'dotenv/config';

export const DATABASE_URL = process.env.DATABASE_URL;




// Khi đưa lên Server cần tắt đi tránh để hacker chiếm quyền
console.log("\n", {
    DATABASE_URL: DATABASE_URL,
})