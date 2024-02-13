import React from 'react';

import { getNotificationsClient } from '@openfin/cloud-api';

export default function App() {
    const [notId, setNotId] = React.useState('No notification ID');

    const onClick = async () => {
        const notificationsClient = await getNotificationsClient();

        const note = notificationsClient.createNotification({
            title: 'Hello, World!',
            body: 'This is a notification from the OpenFin Cloud API',
        });

        setNotId(note.id);
    };

    return (
        <div>
            <h1>React App</h1>
            <button onClick={onClick}>Create Notification</button>
            <div>Notification ID {notId}</div>
        </div>
    );
}
