require('skyapm-nodejs').start({
    serviceName: 'nodejs-demo',
    directServers: 'skywalking-oap.istio-system:11800'
});
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () =>
    console.log(`Example app listening on port ${port}!`)
)


require('skyapm-nodejs').start({
    // 开启方法追踪的服务名称，该值不能为空，建议每个服务的名称最好唯一
    serviceName: 'tracing-demo',
    // oap服务地址，不需要修改
    directServers: 'skywalking-oap.istio-system:11800'
});

