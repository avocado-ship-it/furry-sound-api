# Animal Sounds API

A simple API that returns random cat and puppy sounds with :3

## Quick Start

```bash
# Install dependencies
bun install

# Start the server
bun run dev
```

The server will start at `http://localhost:3000`

## How to Use

Just call the API and get a random animal sound:

```bash
GET http://localhost:3000/
```

**Example Responses:**

Cat sounds:
- "meow :3"
- "mrow :3" 
- "prr :3"
- "mew :3"
- "purr :3"
- "miau :3"
- "nyaa :3"
- "mrrow :3"
- "chirp :3"
- "trill :3"

Puppy sounds:
- "arf :3"
- "bark :3"
- "woof :3"
- "yip :3"
- "ruff :3"
- "boof :3"

## Testing

### PowerShell (Windows):
```powershell
Invoke-RestMethod -Uri "http://localhost:3000/"
```

### curl (Mac/Linux):
```bash
curl http://localhost:3000/
```
