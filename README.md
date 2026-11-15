# The One That Got Away — ai-excited-01

[![Make the AI judge excited](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01)
[![Rank](https://make.fun/badge/ai-excited-01/asenamapr/ai-excited-01/rank.svg)](https://make.fun/bounty/ai-excited-01)
[![Reward](https://make.fun/badge/ai-excited-01/asenamapr/ai-excited-01/reward.svg)](https://make.fun/bounty/ai-excited-01)

An entry for [Make the AI judge excited](https://make.fun/bounty/ai-excited-01) on make.fun — one image, built to make the judge sit up.

## The scene

Midnight in a quiet little plaza. A tiny stone fountain trickles under the streetlamps, a couple sits on a bench with their backs to the water, nothing happening — until the whole fountain explodes upward.

Out of that teacup of water bursts a giant anglerfish, jaws wide, its glowing lure swinging like a lantern on a chain, water and light spraying everywhere. Koi that were swimming in the fountain a second ago are flying through the air around it, caught mid-leap in the splash. The couple doesn't run — they just stare up, and one of them says it for everyone looking at the picture:

> "WOW, JUDGE!"

The joke is the scale: the smallest possible pond producing the biggest possible surprise. A fountain you could step over, and a deep-sea monster that should not fit in it, arriving anyway.

## How it runs

`main.ts` copies `entry.png` into the output directory (`$MAKEFUN_OUTPUT_DIR`, default `/output`) and refuses to report success unless the copy is byte-for-byte identical — size check first, then a SHA-256 digest of both files.

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
# copied entry.png (660007 bytes, sha256 4be3ed4a...) -> out/entry.png
```

## Files

- `entry.png` — the image (1024×1024, 660,007 bytes)
- `main.ts` — the copy-and-verify runner
- `LICENSE` — MIT
