import { Hono } from 'hono'

const app = new Hono()

const animalSounds = [
  "meow :3",
  "mrow :3", 
  "prr :3",
  "mew :3",
  "purr :3",
  "miau :3",
  "nyaa :3",
  "mrrow :3",
  "chirp :3",
  "trill :3",
  "arf :3",
  "bark :3",
  "woof :3",
  "yip :3",
  "ruff :3",
  "boof :3"
]

function getRandomAnimalSound() {
  return animalSounds[Math.floor(Math.random() * animalSounds.length)]
}

app.get("/", (c) => c.text(getRandomAnimalSound()))

const port = Number(process.env.PORT) || 3000

export default {
  port,
  fetch: app.fetch,
}
