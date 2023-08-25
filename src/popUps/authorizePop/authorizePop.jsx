'use strict';
import React, { useState } from "react";
import './authorizePop.less';
import modalStore from "@src/store/modal";
import store from "@src/store";
import { _debounce, _throttle } from "@src/utils/utils";
import API from "@src/api";
import { Toast } from "@src/toast";

const AuthorizePop = () => {
    const [select, setSelect] = useState(true)
    const agree = _throttle(async () => {
        console.log('同意开通')
       
    }, 2000)

    return (
        <div className="authorizePopBox">
            <span className="authorizePopBox_title">公交云</span>
            <span className="authorizePopBox_desc">该应用由与本APP合作的第三方开发，如出现不明广告抽奖页面等请立即离开，并联系客服人员</span>
            <span className="authorizePopBox_privacy">已阅读<span className="bule">《用户协议和隐私政策》</span></span>
            {select ? <div className="authorizePopBox_select" onClick={() => {
                setSelect(false)
            }}> </div> : <div className="authorizePopBox_unselect"
                onClick={() => {
                    setSelect(true)
                }}
            ></div>}
            <div className="authorizePopBox_agreeBtn"
                onClick={() => { agree() }}
            >同意</div>
            <div className="authorizePopBox_disagreeBtn"
                onClick={() => {
                    modalStore.closePop('AuthorizePop')
                }}
            >不同意</div>

        </div>
    )



}
export default AuthorizePop