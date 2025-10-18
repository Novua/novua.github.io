# AnimationsCore API Test Plugin

The AnimationsCore API test plugin provides a lightweight command harness for verifying
AnimationsCore integrations on a Paper development server. It exposes a `/acapitest`
command tree that mirrors the key entry points in `AnimationsCoreAPI`, making it easy to
exercise animation playback, preference management, AFK/emote helpers, and GUI flows
without writing bespoke code.

## Getting started

1. Build the plugin from the `testplugin` module:
   ```bash
   mvn -f testplugin/pom.xml clean package
   ```
2. Drop the resulting `AnimationsCoreApiTest-<version>.jar` into your Paper server's
   `plugins/` directory alongside AnimationsCore.
3. Ensure your account has the `acapitest.admin` permission (operators receive it by
   default).
4. Use the command reference below to walk through the available API scenarios.

## Command quick links

* [Command reference](./API-Test-Command-Reference.md)
* [Guided walkthrough](./Guided-Test-Flow.md)

> **Tip:** Every command accepts `self` for the player argument when invoked in-game.
> Console usage requires explicit player names (and world names where applicable).
