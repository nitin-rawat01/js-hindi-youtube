// In short, use a Map when you need a persistent key-value store and care about the size or iteration order. Use a WeakMap when you want to attach metadata to an object and want that metadata to be automatically cleaned up from memory when the object itself is no longer needed.

// In short (for interview)

// Map: keys can be any type, iterable, not garbage-collected automatically.

// WeakMap: keys must be objects, not iterable, automatically garbage-collected → useful for private data & memory-sensitive caching.