const LRU = require('lru-cache')

const ONE_HOUR = 3600000

const cache = new LRU({ maxAge: ONE_HOUR })

module.exports = {
  Query: {
    Hosts: getAllHosts
  }
}

function getAllHosts() {
  const allHostsCache = cache.get('allHosts')

  if (allHostsCache) {
    return allHostsCache
  } else {
    const datas = require('./hosts.json')
    cache.set('allHosts', datas)
    return datas
  }
}
