export const getLinkType = (link: string): string => {
    const normalizedLink = link.toLowerCase();
    
    const domains = {
        VK: ['vk.com', 'vkontakte.ru'],
        Telegram: ['t.me', 'telegram.me', 'telegram.dog'],
        YouTube: ['youtube.com', 'youtu.be', 'youtube.be'],
        X: ['twitter.com', 'x.com'],
        GitHub: ['github.com', 'github.io'],
        GitLab: ['gitlab.com', 'gitlab.io'],
        Facebook: ['facebook.com', 'fb.com', 'fb.me'],
        LinkedIn: ['linkedin.com', 'linked.in'],
        WhatsApp: ['wa.me', 'whatsapp.com', 'web.whatsapp.com'],
        Instagram: ['instagram.com', 'instagr.am'],
        Discord: ['discord.com', 'discord.gg', 'discordapp.com'],
        Behance: ['behance.net', 'behance.com']
    };

    for (const [platform, platformDomains] of Object.entries(domains)) {
        if (platformDomains.some(domain => normalizedLink.includes(domain))) {
            return platform;
        }
    }

    return link;
};
