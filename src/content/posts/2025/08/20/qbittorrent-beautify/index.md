---
title: qBittorrent 美化
description: 使用 VueTorrent + qBitTorrent-fluent-theme 来实现对 qBittorrent 的美化
published: 2025-08-20
image: 'https://s1.imagehub.cc/images/2025/10/03/17f1ae4730536c502ef1c2716dbcd4df.webp'
category: 'IT'
tags: ["美化"]
---

> 封面：[Day 18 天依](https://www.pixiv.net/artworks/129644254)  
> 画师：[MORI森](https://www.pixiv.net/users/14292311)

## 前言
因为 qBittorrent 原版 UI 过于丑陋，所以我找了一些开源项目来美化 qBittorrent。

## WebUI
::github{repo="VueTorrent/VueTorrent"}

下载 VueTorrent，选择最新版本。

勾选 `工具-设置-WebUI-使用备用的WebUI`，解压后添加至 `文件位置`。

## GUI
### 主题
::github{repo="witalihirsch/qBitTorrent-fluent-theme"}

下载 qBitTorrent-fluent-theme 主题。
如果你的 qBittorrent 版本大于 5.x 版本，可以下载 [defaulticons-fluent.zip](https://github.com/user-attachments/files/17586876/defaulticons-fluent.zip) 或 [Pre-5.0-icons-fluent.zip](https://github.com/user-attachments/files/17588035/Pre-5.0-icons-fluent.zip)。
前者使用 qBittorrent 原版风格图标，后者使用 Fluent 风格图标。

最后添加 `.qbtheme` 文件至 `工具-设置-行为-使用自定义界面主题-界面主题文件`，可按个人喜好自行选择。

###  MicaForEveryone
`qBitTorrent-fluent-theme` 主题需要 MicaForEveryone 才能正常显示，因此需要下载 [MicaForEveryone](https://github.com/MicaForEveryone/MicaForEveryone)。

::github{repo="MicaForEveryone/MicaForEveryone"}

我下载的是 `v1.3.1.2` 版本，如果遇到什么问题，可以先尝试安装这个版本。

下载完后运行 MicaForEveryone，点击左下角添加规则，点击依据程序名添加规则，输入 `qbittorrent`。
启用将窗口框架扩展到客户区。

## 对比

![Original GUI](https://s1.imagehub.cc/images/2025/10/03/8216562fde47e9d06e796dd797a6eab6.webp)
![Fluent GUI](https://s1.imagehub.cc/images/2025/10/03/04912da6e1a5d72629df0a8449b17f95.webp)
![Original WebUI](https://s1.imagehub.cc/images/2025/10/03/fe920d4e4a7c3d3f85d9afc0a11d772f.webp)
![VueTorrent WebUI](https://s1.imagehub.cc/images/2025/10/03/ab62d56798a18ea22b8ec1c83a28c4d7.webp)
