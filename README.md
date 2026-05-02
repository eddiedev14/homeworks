# Challenge 11: Smart Search Engine (2026-04-29)

1. Create a Smart search engine + Top results:
   - Save products in a Trie
   - Allow searching by prefix
   - Use a Heap to return the Top K most popular
2. Each product has:

```typescript
   {
        name: "air max",
        popularity: 95
   }
```

Example:

```typescript
insert("air max", 90);
insert("air force", 95);
insert("air jordan", 85);
insert("adidas boost", 80);

searchTopK("air", 2):
/*
[
    { name: "air force", popularity: 95 },
    { name: "air max", popularity: 90 }
]
*/
```
