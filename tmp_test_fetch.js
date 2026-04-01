
async function test() {
    console.log("Fetching http://127.0.0.1:3005 ...")
    const start = Date.now()
    try {
        const res = await fetch('http://127.0.0.1:3005', { method: 'HEAD' })
        console.log("Status:", res.status)
        console.log("Duration:", Date.now() - start, "ms")
    } catch (err) {
        console.error("Fetch error:", err)
    }
}
test()
