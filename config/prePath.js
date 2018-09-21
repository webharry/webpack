const prePath = {
    // 本地环境
    local: {
        'path': 'https://easy-mock.com/mock/5a504c662435163d11866df4', //测试
        'path2': 'https://easy-mock.com/mock/5a504c662435163d11866df4'//抓取测试
    },
    // 测试环境
    development: {
        'path': 'https://easy-mock.com/mock/5a504c662435163d11866df4', //测试
        'path2': 'https://easy-mock.com/mock/5a504c662435163d11866df4'//抓取测试
    },
    // 生产环境
    production: {
        'path': 'https://easy-mock.com/mock/5a504c662435163d11866df4',//线上
        'path2': 'https://easy-mock.com/mock/5a504c662435163d11866df4'//抓取线上
    }
}

// 启动端口
const startPort = {
    local: '3000',
    development: '3000',
    production: '3000'
}

let env = process.env.NODE_ENV || 'local'
env = env.toLowerCase()

module.exports = {
    port: startPort[env] || startPort['local'],
    prePath: prePath[env],
}
