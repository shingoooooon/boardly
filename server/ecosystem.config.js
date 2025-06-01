module.exports = {
    apps: [
        {
            name: "boardly",
            script: "npm",
            args: "run dev",
            env: {
                NODE_ENV: "development",
            },
        },
    ],
};