export const rateLimiting = [
    {
        name: 'short',
        ttl: 1000,
        limit: 15,
    },
    {
        name: 'medium',
        ttl: 10000,
        limit: 150
    },
    {
        name: 'long',
        ttl: 60000,
        limit: 800
    }
]