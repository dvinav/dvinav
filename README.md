# Project Setup

## Installation

Make sure you have [Bun](https://bun.sh/) installed. Then, run the following command to install dependencies:

```bash
bun install
```

## Development

To start the development server, use:

```bash
bun --bun run dev
```

## Build

To build the project for production, use:

```bash
bun --bun run build
```

## Environment Variables

In development mode, you can set the default language by using the `DEFAULT_LANG` environment variable. For example:

```bash
DEFAULT_LANG=fa bun run dev
```

Additionally, the following environment variables are required:

- `DOMAIN_INTL`: The domain for internationalized content.
- `DOMAIN_FA`: The domain for Persian content.
