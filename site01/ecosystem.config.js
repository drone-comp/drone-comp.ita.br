module.exports = {
  apps : [{
    name: "portal",
    script: "server.js",
    env_construction: {
      NODE_ENV: "construction",
    },
    env_ita: {
      NODE_ENV: "ita",
    },
    env_labbio: {
      NODE_ENV: "labbio",
    },
    env_maintenance: {
      NODE_ENV: "maintenance",
    },
    env_pgfis: {
      NODE_ENV: "pgfis",
    },
    env_inovalab: {
      NODE_ENV: "inovalab",
    },
    env_ceds: {
      NODE_ENV: "ceds",
    },
    env_drone: {
      NODE_ENV: "drone",
    },
    env_pgcomp: {
      NODE_ENV: "pgcomp",
    },
  },],
}
