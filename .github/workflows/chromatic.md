name: "📙 Chromatic"

on:
  push:
    branches-ignore:
      - "main"

env:
  # 7 GiB by default on GitHub, setting to 6 GiB
  NODE_OPTIONS: --max-old-space-size=6144

jobs:
  chromatic-deployment:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0
      - uses: oven-sh/setup-bun@v1
        with:
          bun-version: 1.1.8
      - name: 📦 install depencies
        run: bun i
      - name: ☁️ Publish to Chromatic
        uses: chromaui/action@v1
        with:
          exitOnceUploaded: true
          onlyChanged: true
          projectToken: ${{ secrets.CHROMATIC_PROJECT_TOKEN }}
        env:
          NEXT_PUBLIC_HASS_URL: http://homeassistant.local:8123
          NEXT_PUBLIC_HASS_TOKEN: secret_token
