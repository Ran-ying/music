# music

## music.yir.moe

## 这是什么？

这是一个音乐播放网页，同时支持 PWA。我用它代替 Apple Music，QQ 音乐 和 网易云音乐。

由于各平台的版权差异，使得享受音乐的过程并不是平滑的，基于此我们将音乐统一整合到同一个播放器，通过 PWA 技术可以实现音乐软件的所有效果。

## 我可以部署我自己的版本吗？

当然可以。

- 首先 fork 本仓库。
- 修改 `index.html` 的标题
- 将 music 的音乐删掉并换成自己的
- 运行 `node gen >> /assets/mu.json` 命令
- 修改 `/assets/manifest.webmanifest` 文件