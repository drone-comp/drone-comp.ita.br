const 
    appRoot = require('app-root-path'),
    {transports, createLogger, format} = require('winston'),
    expressWinston = require('express-winston')

require('winston-daily-rotate-file')

const options = {
    appfile: {
        level: 'info',
        filename: `${appRoot.path}/log/app-%DATE%.json`,
        datePattern: 'YYYY-MM-DD-HH',
        zippedArchive: true,
        maxSize: '20m',
        maxFiles: '14d',
        handleExceptions: true,
    },
    reqfile: {
        level: 'info',
        filename: `${appRoot.path}/log/req-%DATE%.json`,
        datePattern: 'YYYY-MM-DD-HH',
        zippedArchive: true,
        maxSize: '20m',
        maxFiles: '14d',
        handleExceptions: true,
    },
    secfile: {
        level: 'info',
        filename: `${appRoot.path}/log/sec-%DATE%.json`,
        datePattern: 'YYYY-MM-DD-HH',
        zippedArchive: true,
        maxSize: '20m',
        maxFiles: '14d',
        handleExceptions: true,
    },
    errfile: {
        level: 'info',
        filename: `${appRoot.path}/log/err-%DATE%.json`,
        datePattern: 'YYYY-MM-DD-HH',
        zippedArchive: true,
        maxSize: '20m',
        maxFiles: '14d',
        handleExceptions: true,
    },
}

var applog = new createLogger({
    format: format.combine(
        format.timestamp(),
        format.json()
    ),
    transports: [
        new (transports.Console)(),
        new transports.DailyRotateFile(options.appfile),
    ],
    exitOnError: false,
})

var reqlog = new createLogger({
    format: format.combine(
        format.timestamp(),
        format.json()
    ),
    transports: [
        new transports.DailyRotateFile(options.reqfile),
    ],
    exitOnError: false,
})

var midlog = expressWinston.logger({
    winstonInstance: reqlog,
    meta: true,
    metaField: 'meta',
    requestWhitelist: ['headers', 'query'],
    responseWhiteList: ['body'],
    dynamicMeta: (req, res) => {
        const httpRequest = {}
        const httpResponse = {}
        const meta = {}
        if (req) {
            meta.httpRequest = httpRequest
            httpRequest.protocol = `HTTP/${req.httpVersion}`
            httpRequest.remoteIp = req.ip
            httpRequest.requestSize = req.socket.bytesRead
        }
        if (res) {
            meta.httpResponse = httpResponse
            httpResponse.statusMessage = res.statusMessage
            if (res.body) {
                if (typeof res.body === 'object') {
                    httpResponse.responseSize = JSON.stringify(res.body).length
                } else if (typeof res.body === 'string') {
                    httpResponse.responseSize = res.body.length
                }
            }
            httpResponse.latency = {
                seconds: Math.floor(res.responseTime / 1000),
                nanos: ( res.responseTime % 1000 ) * 1000000
            }
        }
        return meta
    }
})

var seclog = new createLogger({
    format: format.combine(
        format.timestamp(),
        format.json()
    ),
    transports: [
        new transports.DailyRotateFile(options.secfile),
    ],
    exitOnError: false,
})

var errlog = new createLogger({
    format: format.combine(
        format.timestamp(),
        format.json()
    ),
    transports: [
        new (transports.Console)(),
        new transports.DailyRotateFile(options.errfile),
    ],
    exitOnError: false,
})

applog.stream = {
    write: (message, encoding) => {
        applog.info(message.trim());
    },
}

reqlog.stream = {
    write: (message, encoding) => {
        reqlog.info(message.trim());
    },
}

seclog.stream = {
    write: (message, encoding) => {
        seclog.info(message.trim());
    },
}

errlog.stream = {
    write: (message, encoding) => {
        errlog.info(message.trim());
    },
}

module.exports = {
    applog: applog,
    reqlog: reqlog,
    midlog: midlog,
    seclog: seclog,
    errlog: errlog,
}