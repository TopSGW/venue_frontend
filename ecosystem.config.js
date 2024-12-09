module.exports = {
    apps: [
        {
            name: 'venue',
            script: 'npm',
            args: 'start',
            env: {
                NODE_ENV: 'production',
            },
        },
    ],
};
