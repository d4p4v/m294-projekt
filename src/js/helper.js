export async function grab(url) {
    const res = await fetch(url)
    const json = await res.json()
    return json
}