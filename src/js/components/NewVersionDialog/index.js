import React from 'react';
import { isDialogEnabled, setRedirectCookie } from './helpers'

export class NewVersionDialog extends React.Component {

    onClickNewVersion() {
        setRedirectCookie();
        window.location.reload();
    }

    render() {

        return null;
    }
}
