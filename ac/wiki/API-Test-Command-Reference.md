# `/acapitest` command reference

Each subcommand aligns with a method on `AnimationsCoreAPI`. The syntax below matches the
current test plugin implementation.

## Animation playback

* **`/acapitest playAnimation <player:self|name> <type> <key>`** – plays the animation
  immediately at the player's location.
* **`/acapitest playAnimationLater <player:self|name> <type> <key> <delayTicks>`** –
  queues playback using the player's current location when invoked.
* **`/acapitest playTemporaryAnimation <player:self|name> <type> <key> <durationTicks>`** –
  spawns a temporary instance that despawns after the supplied duration.
* **`/acapitest playTemporaryAnimationAt <player:self|name> <x> <y> <z> <world> <type> <key> <delayTicks> <durationTicks>`** –
  plays a temporary animation at explicit coordinates after an optional delay.

## Persistent animation lifecycle

* **`/acapitest spawnAnimation <player:self|name> <type> <key> [--id label]`** – spawns the
  animation and caches its UUID under the provided label (defaults to `last`).
* **`/acapitest moveAnimation <storedIdLabel> <x> <y> <z> [world]`** – moves a stored
  animation. Console usage must include the `world`; in-game your current world is used
  when the argument is omitted.
* **`/acapitest removeAnimation <storedIdLabel>`** – despawns the animation and clears the
  cached label.

## Preferences workflow

1. **Load** – `/acapitest loadPreferences`
2. **Mutate** – use the commands below while the configuration is cached:
   * `/acapitest setPreference <player:self|name> <type> <value>`
   * `/acapitest clearPreference <player:self|name> <type>`
   * `/acapitest getPreference <player:self|name> <type>`
3. **Save** – `/acapitest savePreferences <player:self|name> [--syncDb]`

## Discovery and permissions

* **`/acapitest getAvailableAnimations <type>`** – prints every key registered for the
  animation type (try `join`, `afk`, etc.).
* **`/acapitest checkPerm <player:self|name> <type> <key>`** – reports whether the player
  may use the animation.

## GUI, AFK, and emotes

* **`/acapitest openGui <player:self|name> [--resetState]`** – opens the selection GUI and
  optionally clears remembered GUI state.
* **`/acapitest triggerAfk <player:self|name> [animationKey]`** – runs the AFK workflow or
  forces a specific AFK animation.
* **`/acapitest triggerAfkAnimation <player:self|name> <animationKey>`** – attempts to play
  a specific AFK animation and reports success.
* **`/acapitest stopEmote <player:self|name>`** – stops any currently playing emote.

## Animation type tokens

```
join, leave, death, respawn, afk, gui, teleport-in, teleport-out, kill, custom
```

Use `self` for the player argument in-game or provide an explicit online player name when
running commands from the console.
