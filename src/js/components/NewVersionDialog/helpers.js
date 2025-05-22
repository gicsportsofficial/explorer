export const isDialogEnabled = () => {
    const url = new URL(window.location);

    return !(/faucet/.test(url.pathname));
    // return url.searchParams.has('new_version');
};

export const setRedirectCookie = () => {
    const cookieName = 'new_version_url';
    const newVersionUrl = 'https://new.gscscan.com';
    // const domain = 'gscscan.com';
    const expires = new Date(2023, 11, 31).toUTCString();
    const cookie = `${cookieName}=${newVersionUrl};path=/;expires=${expires};`;

    document.cookie = cookie;
}
