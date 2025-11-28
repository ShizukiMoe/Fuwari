import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "Shizukiの魔法小屋",
	subtitle: "可愛いは正義です",
	lang: "zh_CN",
	themeColor: {
		hue: 310,
		fixed: false,
	},
	banner: {
		enable: false,
		src: "",
		position: "center",
		credit: {
			enable: false,
			text: "",
			url: "",
		},
	},
	toc: {
		enable: true,
		depth: 2,
	},
	favicon: [
        {
            src: '/favicon/favicon-512.png',
            sizes: '512x512'
        },

        {
            src: "/favicon/favicon-192.png",
            sizes: '192x192'
        }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
        LinkPreset.Friends,
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.png",
	name: "Shizuki Natsuki",
	bio: "可愛いは正義です",
	links: [
        {
            name: 'GitHub',
            url: 'https://github.com/ShizukiNatsuki',
            icon: 'fa6-brands:github',
        },

        {
            name: 'Steam',
            url: 'https://steamcommunity.com/id/ShizukiNatsuki/',
            icon: 'fa6-brands:steam',
        },
    ],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	theme: "dracula",
};
