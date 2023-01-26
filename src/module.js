console.log('module')

async function start() {
    await Promise.resolve('async working')
}

start()