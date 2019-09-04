import React from 'react';
import { Spin } from 'antd'

import "./index.scss";

export default  ({tip="", size="large"}) => (
    <div className="loader">
        <Spin tip={tip} size={size} />
    </div>
);