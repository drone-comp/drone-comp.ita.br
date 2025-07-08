module.exports = {
    csp: false,
    headers: {
        hsts: {
            maxAge: 5184000,
            includeSubDomains: false,
        },
        dnsPrefetchControl: {
            allow: false,
        },
        expectCt: {
            enforce: true,
            maxAge: 120,
        },
        frameguard: {
            action: "sameorigin",
        },
        referrerPolicy: {
            policy: "no-referrer",
        },
        permittedCrossDomainPolicies: {
            permittedPolicies: "none",
        },
        contentSecurityPolicy: {
            directives: {
                "default-src": [
                    "'self'",
                ],
                "script-src": [
                    "'self'", 
                    "'strict-dynamic'",
                    "'unsafe-inline'",
                    (req, res) => `'nonce-${res.locals.nonce}'`,
                    'https://*.youtube-nocookie.com', 
                    'https://maps.google.com', 
                    'https://www.google.com', 
                    'https://calendar.google.com',
                    'https://barra.brasil.gov.br',
                    'https://vlibras.gov.br',
                ],
                "object-src": ["'none'"],
                "child-src": [
                    "'self'", 
                    'https://*.youtube-nocookie.com', 
                    'https://maps.google.com', 
                    'https://www.google.com', 
                    'https://calendar.google.com',
                ],
                "frame-src": [
                    "'self'",
                    'https://*.youtube-nocookie.com',
                    'https://maps.google.com',
                    'https://www.google.com',
                ],
                "style-src": [
                    "'self'",
                    "'unsafe-inline'",
                    'https://fonts.googleapis.com',
                ],
                "font-src": [
                    "'self'", 
                    'https://fonts.googleapis.com', 
                    'https://barra.brasil.gov.br', 
                    'https://fonts.gstatic.com',
                ],
                "img-src": [
                    "'self'", 
                    "data:", 
                    'https://barra.brasil.gov.br',
                    'https://vlibras.gov.br',
                ],
                "frame-ancestors": ["'self'"],
                "base-uri": ["'self'"],
                upgradeInsecureRequests: [],
            }
        },
    },
}