import type { RedisClientType } from 'redis';
import { createClient } from 'redis';

const client: RedisClientType = createClient({
    password: "7lu8nip2IbO2H0vXT7dw2AdpwQzgL7q7",
    socket: {
        host: "redis-16813.c212.ap-south-1-1.ec2.cloud.redislabs.com",
        port: 16813
    }
});
(async () => { await client.connect(); })();

export default client;