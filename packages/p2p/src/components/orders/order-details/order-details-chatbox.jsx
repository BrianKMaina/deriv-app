import React from 'react';
import { Channel, SendBirdProvider } from 'sendbird-uikit';
import 'sendbird-uikit/dist/index.css';

const OrderDetailsChatbox = ({ token, app_id, user_id, channel_url, advertiser_name }) => {
    return (
        <SendBirdProvider appId={app_id} userId={user_id} accessToken={token}>
            <Channel channelUrl={channel_url} />
        </SendBirdProvider>
    );
};

// /public/images/sprite/common.svg#IcCashierP2pUser

export default OrderDetailsChatbox;
