import React from 'react';

const socialLinks = [{
    id: 'github',
    url: 'https://github.com/gicsportsofficial/'
}, {
    id: 'twitter',
    url: 'https://twitter.com/'
}, {
    id: 'facebook',
    url: 'https://www.facebook.com/'
}, {
    id: 'discord',
    url: 'https://discord.gg/'
}, {
    id: 'telegram',
    url: 'https://telegram.me/'
}, {
    id: 'reddit',
    url: 'https://reddit.com/'
}];

const Footer = ({version}) => {
    return (
        <div className="menu-footer">
            <div>Version: {version.replace("Gic","GIC")}</div>
            <div>Brought to you by Better2Better.tech</div>
            <div>
                {socialLinks.map(item =>
                    (<a key={item.id} className={`social ${item.id}`} href={item.url} target="_blank"></a>))}
            </div>
            <div>
                <a className="fade" href="https://gicsports.io/" target="_blank">gicsports.io</a>
            </div>
        </div>
    );
}

export default Footer;
