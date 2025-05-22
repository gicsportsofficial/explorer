import React from 'react';

const socialLinks = [{
    id: 'github',
    url: 'https://github.com/gicsportsofficial/'
}, {
    id: 'twitter',
    url: 'https://x.com/gicsports'
},{
    id: 'telegram',
    url: 'https://t.me/GicSmartChain'
}, {
    id: 'instagram',
    url: 'https://www.instagram.com/gic_sports'
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
