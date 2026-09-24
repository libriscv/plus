# Mod SDK

Implement the obligations trait with `uses`, keep the API passed to `mod_init`, and put mod.cfg beside your entry. Manifests may lower the game's resource limits. The Sandbox grants only the methods declared by the API trait. SDK traits are public, including concrete method bodies. Abstract methods must be implemented; concrete methods provide defaults that mods may override. Mark a mod callback with `@requires_host_hook` to require host support for it. Missing hooks or incompatible signatures refuse the mod before initialization. The game dispatches declared hooks under their documented event conditions.

### `ModBrain.mod_init(api: ArenaAPI) -> void`

Keep the API reference; no scene traversal is granted.

### `ModBrain.think(delta: float, me: Vector2, crystals: Array, hazards: Array) -> Vector2`

Return the desired steering direction.

### `ArenaAPI.input_axis() -> Vector2`



### `ArenaAPI.time() -> float`



### `ArenaAPI.size() -> Vector2`



### `ArenaAPI.draw_line(from: Vector2, to: Vector2, color: Color) -> void`



### `ArenaAPI.draw_circle(center: Vector2, radius: float, color: Color) -> void`



### `ArenaAPI.log(text: String) -> void`



### `ArenaAPI.input_axis() -> Vector2`



### `ArenaAPI.time() -> float`



### `ArenaAPI.size() -> Vector2`



### `ArenaAPI.draw_line(from: Vector2, to: Vector2, color: Color) -> void`



### `ArenaAPI.draw_circle(center: Vector2, radius: float, color: Color) -> void`



### `ArenaAPI.log(text: String) -> void`



### `ModBrain.mod_init(api: ArenaAPI) -> void`

Keep the API reference; no scene traversal is granted.

### `ModBrain.think(delta: float, me: Vector2, crystals: Array, hazards: Array) -> Vector2`

Return the desired steering direction.

