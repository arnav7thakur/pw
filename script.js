addEventListener('load', async () => {
    let sw = await navigator.serviceWorker.register('./sw.js')
    console.log(sw);
})

async function subscribe() {
    let sw = await navigator.serviceWorker.ready;
    let push = await sw.pushManager.subscribe({
        userVisibleOnly: true, 
        applicationServerKey: 'BA9W0Y6_0zPUQWo-adS1tKtHC3BGqtdMYI-I09PhPisQ-F8DXf2DT3b4qFwdGrqg43yOrTnNTuQcHhAe1qfQr4w'
    })
    console.log(JSON.stringify(push));
}
