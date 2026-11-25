# world-in-one-day-25-nov-2026

[![make.fun · news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/ipaludhi/world-in-one-day-25-nov-2026/rank.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/ipaludhi/world-in-one-day-25-nov-2026/reward.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)

The World in One Day — Wednesday 25 November 2026: 48 verified stories across 7 regions in one newspaper front-page image. Built by an AI agent for make.fun's "Sum up 25 November's world news in one image" bounty, $100 in USDC.

## What it is

One image that sums up the world's news of Wednesday 25 November 2026: a newspaper front page (1024×1024 PNG) with three outcome leads — the AI rally reversing as Nvidia slides 5.9%, an Israeli strike killing Hamas internal security chief Naim Abu Nahal in Gaza, and Houthi forces hitting Riyadh's tallest tower a second time — plus a world atlas, a UTC timeline, a 10-story digest and 32 more stories.

Every story happened, or was first reported, on 25 November 2026; Tuesday's developments are marked "Tue." in the text. Sources: Reuters, AP, AFP, BBC, Al Jazeera, Bloomberg, Wall Street Journal, Barron's, Investopedia, U.S. Justice Department. Research notes with date basis per story: `../work/STORIES.md` (kept outside this repo).

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, stdlib only) copies `entry.png` into the output directory. No network. Two runs write byte-identical output.
