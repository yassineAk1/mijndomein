const personResponse = await fetch ('https://fdnd.directus.app/items/person/278')
const personJson = await personResponse.json()

const person = await personJson.data

export default person 