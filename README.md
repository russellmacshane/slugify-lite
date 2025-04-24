# slugify-lite

A tiny utility that converts strings into URL-friendly slugs.

**Note:** This is just an AI generated package that is used for me to test npm package management. Use at your own risk.

## Installation

```bash
npm install slugify-lite
```

## Usage
### Slugify
```typescript
import { slugify } from '@rmacshane-lw/slugify-lite';

const slug = slugify('Hello World');
console.log(slug); # hello-world
```

### Version
```typescript
import { version } from '@rmacshane-lw/slugify-lite';

const version = version();
console.log(version); # 5.0.2
```