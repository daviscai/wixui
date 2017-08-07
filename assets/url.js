let protocol = location.protocol + '//'
let hostname = typeof CURRENT_IP === 'string' ? CURRENT_IP : location.hostname
let port = location.port ? ':' + location.port : ''
let url = protocol + hostname + port + location.pathname.replace(/\/index\.html$/, '/').replace(/\/$/, '/dist/weex/App.js')
