"""
cron: * 37 0-23 * * *
new Env('104-抖音极速版');
项目名称：抖音极速版
安卓正常跑，不支持苹果
改自by Pearson大佬，修复安卓
开宝箱,宝箱广告,视频广告，走路
6.13
url是链接？后面的
变量名(dyjsb)    url#cookie#x-argus#x-ladon
多账号@
ua换成自己的
"""
ua = "com.ss.android.ugc.aweme.lite/250101 (Linux; U; Android 10; zh_CN_#Hans; LRA-AL00; Build/HONORLRA-AL00;tt-ok/3.12.13.1)"

import sys
import os
from urllib.parse import unquote
import time
import random
import base64
import requests
import json
import threading
try:
    from notify import send
except:
    print("upload notify failed")

cookies = os.getenv("dyjsb")

log_content = ''

class LoggerWriter:
    def __init__(self, level):
        self.level = level
 
    def write(self, message):
        global log_content
        self.level.write(message)
        log_content += message
    
    def flush(self):
        return None

sys.stdout = LoggerWriter(sys.stdout)

class DY:
    def __init__(self, cookie):
        self.url = cookie.split("#")[0]
        self.cookie = cookie.split("#")[1]
        self.argus = cookie.split("#")[2]
        self.ladon = cookie.split("#")[3]
        self.nickname = self.get_nickname()

    def run(self):
        self.get_info()
        self.sign_in()
        time.sleep(1.5)
        self.read()
        time.sleep(1.5)
        self.open_box()
        print(f"•••准备看广告,假装看15s•••")
        time.sleep(random.randint(20, 30))
        self.box_ad()
        self.detail_info()
        time.sleep(random.randint(20, 30))
        self.detail_ad()
        step = self.get_step()
        time.sleep(0.5)
        self.read()
        time.sleep(1.5)
        self.upload_step(step)
        self.step_reward()

    def sign_in(self):
        try:
            url = f"https://api5-normal-c-lf.amemv.com/luckycat/aweme/v1/task/done/sign_in?{self.url}"
            headers = {
                'Host': 'api5-normal-c-lf.amemv.com',
                'Connection': 'keep-alive',
                'Content-Length': '22',
                'Accept': 'application/json',
                'Cookie': self.cookie,
                'User-Agent': ua,
                'passport-sdk-version': '5.12.1',
                'X-Argus': self.argus,
                'X-Ladon': self.ladon,
                'Content-Type': 'text/plain'}
            payload = base64.b64decode("ewogICJpbl9zcF90aW1lIiA6IDAKfQ==")
            response = requests.request("POST", url=url, headers=headers, data=payload)
            qdcg = f"[{self.nickname}]签到成功,获取金币{response.json().get('data').get('amount')}"
            print(qdcg)
        except:
            qdsb = "签到失败,可能今日已签到"
            print(qdsb)
    def get_info(self):
        url = f"https://api5-normal-c-lf.amemv.com/luckycat/aweme/v1/task/page?{self.url}"
        headers = {'Host': 'api5-normal-c-lq.amemv.com',
                   'Accept': 'application/json',
                   'Cookie': self.cookie,
                   'User-Agent': ua}
        response = requests.request("GET", url=url, headers=headers)
        if response.json().get("data").get("is_login"):
            dlcg = f"[{self.nickname}]登录成功\n" f"[{self.nickname}]今日金币{response.json().get('data').get('income_data').get('amount1')}"
            print(dlcg)

    def get_nickname(self):
        now = str(time.time()).replace(".", "")[:10]
        url = f"https://api5-core-c-lf.amemv.com/aweme/v1/user/profile/self/?{self.url}"
        headers = {'Host': 'api5-normal-c-lq.amemv.com',
                   'Content-Type': 'application/json; encoding=utf-8',
                   'Accept': 'application/json',
                   'tt-request-time': now,
                   'X-Argus': self.argus,
                   'X-Ladon': self.ladon,
                   'Cookie': self.cookie,
                   'User-Agent': ua}
        payload = None
        try:
            response = requests.request("GET", url=url, headers=headers, data=payload)
            i = 1
            for cookie in cookies:
                nickname = f"账号{i}"
                # nickname = response.json().get("user").get("nickname")
                return nickname
        except:
            hqyfmsb = "获取用户名失败"
            print(hqyhmsb)

    def read(self):
        url = f"https://api5-normal-c-lf.amemv.com/luckycat/aweme/v1/task/done/read?{self.url}"
        headers = {
            'Host': 'api5-normal-c-lf.amemv.com',
            'Connection': 'keep-alive',
            'Content-Length': '22',
            'Accept': 'application/json',
            'Cookie': self.cookie,
            'User-Agent': ua,
            'passport-sdk-version': '5.12.1',
            'X-Argus': self.argus,
            'X-Ladon': self.ladon,
            'Content-Type': 'text/plain'}
        payload = base64.b64decode("ewogICJpbl9zcF90aW1lIiA6IDAsCiAgInRhc2tfa2V5IiA6ICJyZWFkIgp9")
        response = requests.request("POST", url=url, headers=headers, data=payload)
        if response.json().get("err_tips") == "成功":
            sspjl = f"[{self.nickname}]刷视频奖励--{response.json().get('data').get('score_amount')}"
            print(sspjl)



    def open_box(self):
        url = f"https://api5-normal-c-lf.amemv.com/luckycat/aweme/v1/task/done/treasure_task?{self.url}"
        headers = {
            'Host': 'api5-normal-c-lf.amemv.com',
            'Connection': 'keep-alive',
            'Content-Length': '22',
            'Accept': 'application/json',
            'Cookie': self.cookie,
            'User-Agent': ua,
            'passport-sdk-version': '5.12.1',
            'X-Argus': self.argus,
            'X-Ladon': self.ladon,
            'Content-Type': 'text/plain'}
        payload = base64.b64decode("ewogICJpbl9zcF90aW1lIiA6IDAKfQ==")
        response = requests.request("POST", url=url, headers=headers, data=payload)
        if response.json().get("err_tips") == "成功":
            kbxjljb = f"[{self.nickname}]开宝箱奖励金币--{response.json().get('data').get('amount')}"
            print(kbxjljb)
        elif response.json().get("err_no") == 10006:
            cw1 = response.json().get("err_tips")
            print(cw1)
        else:
            kbx = "开宝箱"+response.text
            print(kbx)########

    def box_ad(self):
        url = f"https://api5-normal-c-lf.amemv.com/luckycat/aweme/v1/task/done/excitation_ad_treasure_box?{self.url}"
        headers = {
            'Host': 'api5-normal-c-lf.amemv.com',
            'Connection': 'keep-alive',
            'Accept': 'application/json',
            'Cookie': self.cookie,
            'User-Agent': ua,
            'X-Argus': self.argus,
            'X-Ladon': self.ladon}
        response = requests.request("POST", url=url, headers=headers)
        if response.json().get("err_tips") == "成功":
            kbxgg = f"[{self.nickname}]看宝箱广告--{response.json().get('data').get('amount')}"
            print(kbxgg)
        elif response.json().get("err_no") == 10006:
            cw2 = response.json().get("err_tips")
            print(cw2)
        else:
            bxgg = "宝箱广告"+response.text
            print(bxgg)#########

    def detail_info(self):
        now = str(time.time()).replace(".", "")[:13]
        url = f"https://api5-normal-c-lf.amemv.com/luckycat/aweme/v1/task/sign_in/detail?{self.url}"
        headers = {'Host': 'api5-normal-c-lq.amemv.com',
                   'Content-Type': 'application/json; encoding=utf-8',
                   'Accept': 'application/json',
                   'tt-request-time': now,
                   'X-Argus': self.argus,
                   'X-Ladon': self.ladon,
                   'Cookie': self.cookie,
                   'User-Agent': ua}
        response = requests.request("GET", url=url, headers=headers)
        score_amount = response.json().get("data").get("calendar_reminder_button").get("score_amount")
        if response.json().get("err_tips") == "成功":
            hqggspcg = f"[{self.nickname}]获取广告视频成功,预计获得{score_amount},假装看15秒"
            print(hqggspcg)
        
        else:
            hqggsp = "获取广告视频"+response.text
            print(hqggsp)
    def detail_ad(self):
        now = str(time.time()).replace(".", "")[:13]
        url = f"https://api3-normal-c.amemv.com/luckycat/aweme/v1/task/done/excitation_ad?{self.url}"
        headers = {
            'Host': 'api3-normal-c-lf.amemv.com',
            'Connection': 'keep-alive',
            'Accept': 'application/json',
            'Cookie': self.cookie,
            'User-Agent': ua,
            'passport-sdk-version': '203100',
            'X-Argus': self.argus,
            'X-Ladon': self.ladon}
        response = requests.request("POST", url=url, headers=headers)
        if response.json().get("err_tips") == "成功":
            kspjljbcg = f"[{self.nickname}]看视频奖励金币成功--{response.json().get('data').get('amount')}"
            print(kspjljbcg)
        else:
            kspjl = "看视频奖励"+response.text
            print(kspjl)

    def get_step(self):
        now = str(time.time()).replace(".", "")[:13]
        url = f"https://api5-normal-c-lf.amemv.com/luckycat/aweme/v1/task/walk/page?{self.url}"
        headers = {
            'Host': 'api5-normal-c-lf.amemv.com',
            'Connection': 'keep-alive',
            'Accept': 'application/json',
            'Cookie': self.cookie,
            'User-Agent': ua,
            'passport-sdk-version': '5.12.1',
            'X-Argus': self.argus,
            'X-Ladon': self.ladon}
        response = requests.request("GET", url=url, headers=headers)
        if response.json().get("err_tips") == "成功":
            step = response.json().get("data").get("continue_walk_list")[0].get("step")
            dqbs = f"[{self.nickname}]当前步数{step}"
            print(dqbs)
            return step
        else:
            zlcc = "走路出错"
            print(zlcc)

    def upload_step(self, steps):
        now = str(time.time()).replace(".", "")[:10]
        url = f"https://api5-normal-c-lf.amemv.com/luckycat/aweme/v1/task/walk/step_submit?{self.url}"
        headers = {
            'Host': 'api5-normal-c-lf.amemv.com',
            'Connection': 'keep-alive',
            'Accept': 'application/json',
            'Cookie': self.cookie,
            'User-Agent': ua,
            'passport-sdk-version': '5.12.1',
            'X-Argus': self.argus,
            'X-Ladon': self.ladon}
        step = random.randint(steps, steps+1200)
        payload = {"step": step,
                   "submit_time": int(now),
                   "in_sp_time": 0}
        payload = json.dumps(payload)
        response = requests.request("POST", url=url, headers=headers, data=payload)
        if response.json().get("err_tips") == "成功":
            scbscg = f"[{self.nickname}]上传步数成功,当前步数--{response.json().get('data').get('today_step')}"
            print(scbscg)

    def step_reward(self):
        now = str(time.time()).replace(".", "")[:13]
        url = f"https://api5-normal-c-lf.amemv.com/luckycat/aweme/v1/task/walk/receive_step_reward?{self.url}"
        headers = {
            'Host': 'api5-normal-c-lf.amemv.com',
            'Connection': 'keep-alive',
            'Accept': 'application/json',
            'Cookie': self.cookie,
            'User-Agent': ua,
            'passport-sdk-version': '5.12.1',
            'X-Argus': self.argus,
            'X-Ladon': self.ladon}
        payload = base64.b64decode("ewogICJpbl9zcF90aW1lIiA6IDAKfQ==")
        response = requests.request("POST", url=url, headers=headers, data=payload)
        if response.json().get("err_tips") == "成功":
            lcbsjlcg = f"[{self.nickname}]领取步数奖励成功--{response.json().get('data').get('reward_amount')}"
            print(lcbsjlcg)
        elif response.json().get("err_no") == 10009:
            cw3 = response.json().get("err_tips")
            print(cw3)
        else:
            xywb = response.text
            print(xywb)


if __name__ == "__main__":
    cookies = cookies.split("@")
    dyjsbghqd = f"抖音极速版共获取到{len(cookies)}个账号，偷撸冲"
    print(dyjsbghqd)
    i = 1
    for cookie in cookies:
        print(f"\n---开始第{i}个账号---")
        i += 1
        DY(cookie).run()
        print("\n随机等待30s进行下一个账号")
        time.sleep(random.randint(30,60))

    # 在所有账号循环处理完成后，将所有输出内容推送
    if len(cookies) > 0:
        send('抖音极速版', log_content)

    # 推送消息完成后，立即退出程序
    sys.exit(0)
