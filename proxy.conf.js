const PROXY_CONFIG = [
    {
        context: [
            "/exame",
            "/ordem_servico",
        ],
        target: "http://localhost:8080",
        secure: false
    }
]

module.exports = PROXY_CONFIG;