# Guided test flow

Follow the sequence below to exercise the major AnimationsCore API surfaces through the
`/acapitest` harness. Commands assume you are running them in-game; replace `self` with a
player name when issuing them from console.

1. **Baseline playback**
   * `/acapitest playAnimation self join default`
2. **Persistent animation lifecycle**
   * `/acapitest spawnAnimation self join default`
   * `/acapitest moveAnimation last 0 1 0`
   * `/acapitest removeAnimation last`
3. **Scheduled playback**
   * `/acapitest playAnimationLater self afk idle 200`
4. **Temporary animations**
   * `/acapitest playTemporaryAnimation self teleport-in swirl 100`
   * `/acapitest playTemporaryAnimationAt self 0 64 0 world afk idle 20 200`
5. **Discovery and permissions**
   * `/acapitest getAvailableAnimations afk`
   * `/acapitest checkPerm self afk idle`
6. **Preferences round-trip**
   * `/acapitest loadPreferences`
   * `/acapitest setPreference self join welcome`
   * `/acapitest getPreference self join`
   * `/acapitest clearPreference self join`
   * `/acapitest savePreferences self --syncDb`
7. **GUI, AFK, and emotes**
   * `/acapitest openGui self`
   * `/acapitest openGui self --resetState`
   * `/acapitest triggerAfk self`
   * `/acapitest triggerAfk self idle`
   * `/acapitest triggerAfkAnimation self idle`
   * `/acapitest stopEmote self`

Refer back to the [command reference](./API-Test-Command-Reference.md) for detailed
argument descriptions and behaviour notes.
