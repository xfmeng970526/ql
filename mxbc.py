#!/usr/bin/python3
# -- coding: utf-8 --
# -------------------------------
# @Time : 2023/1/7 10:45
# cron "4 8 * * *" script-path=mxbc.py,tag=匹配cron
# const $ = new Env('蜜雪冰城');
# 环境变量名 MXBC_TOKEN 多账号用#隔开   
# pyhton依赖 先安装 wheel requests  pycryptodome
# new Env('51-蜜雪冰城');
# 项目名称：蜜雪冰城
# -------------------------------
from requests import get
from Crypto.PublicKey import RSA
from Crypto.Signature import PKCS1_v1_5
from Crypto.Hash import SHA256
from time import time
from base64 import b64encode, b64decode
from os import environ
try:
    from notify import send
    push = True
except:
    print(f"青龙无法找到notify.py文件 无法推送")
    push = False

def timestamp():
    return int(round(time() * 1000))


def RSA_sign(data):
    privateKey = '''MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCtypUdHZJKlQ9LL6lIJSphnhqjke7HclgWuWDRWvzov30du235cCm13mqJ3zziqLCwstdQkuXo9sOPIh94t6nzBHTuqYA1whrUnQrKfv9X4/h3QVkzwT+xWflE+KubJZoe+daLKkDeZjVWnUku8ov0E5vwADACfntEhAwiSZUALX9UgNDTPbj5ESeII+VztZ/KOFsRHMTfDb1GIR/dAc1mL5uYbh0h2Fa/fxRPgf7eJOeWGiygesl3CWj0Ue13qwX9PcG7klJXfToI576MY+A7027a0aZ49QhKnysMGhTdtFCksYG0lwPz3bIR16NvlxNLKanc2h+ILTFQbMW/Y3DRAgMBAAECggEBAJGTfX6rE6zX2bzASsu9HhgxKN1VU6/L70/xrtEPp4SLSpHKO9/S/Y1zpsigr86pQYBx/nxm4KFZewx9p+El7/06AX0djOD7HCB2/+AJq3iC5NF4cvEwclrsJCqLJqxKPiSuYPGnzji9YvaPwArMb0Ff36KVdaHRMw58kfFys5Y2HvDqh4x+sgMUS7kSEQT4YDzCDPlAoEFgF9rlXnh0UVS6pZtvq3cR7pR4A9hvDgX9wU6zn1dGdy4MEXIpckuZkhwbqDLmfoHHeJc5RIjRP7WIRh2CodjetgPFE+SV7SdjECmvYJbet4YLg+Qil0OKR9s9S1BbObgcbC9WxUcrTgECgYEA/Yj8BDfxcsPK5ebE9N2teBFUJuDcHEuM1xp4/tFisoFH90JZJMkVbO19rddAMmdYLTGivWTy PVsM1+9stq/NwsFJWHRUiMK7dttGiXuZry+xvq/SAZoitgI8tXdDXMw7368vatr0g6m7ucBKjZWxSHjK9/KVquVr7BoXFm+YxaECgYEAr3sgVNbr5ovx17YriTqe1FLTLMD5gPrzugJj7nypDYY59hLlkrA/TtWbfzE+vfrN3oRIz5OMi9iFk3KXFVJMjGg+M5eO9Y8m14e791/q1jUuuUH4mc6HttNRNh7TdLg/OGKivE+56LEyFPir45zw/dqwQM3jiwIzyPz/+bzmfTECgYATxrOhwJtc0FjrReznDMOTMgbWYYPJ0TrTLIVzmvGP6vWqG8rIS8cYEA5VmQyw4c7G97AyBcW/c3K1BT/9oAj0wA7wj2JoqIfm5YPDBZkfSSEcNqqy5Ur/13zUytC+VE/3SrrwItQf0QWLn6wxDxQdCw8J+CokgnDAoehbH6lTAQKBgQCE67T/zpR9279i8CBmIDszBVHkcoALzQtU+H6NpWvATM4WsRWoWUx7AJ56Z+joqtPKG1WztkYdn/L+TyxWADLvn/6Nwd2N79MyKyScKtGNVFeCCJCwoJp4R/UaE5uErBNnOH+gOJvPwHj5HavGC5kYENC1Jb+YCiEDu3CB0S6d4QKBgQDGYGEFMZYWqO6+LrfQZNDBLCI2G4+UFP+8ZEuBKy5NkDVqXQhHRbqr9S/OkFu+kEjHLuYSpQsclh6XSDks5x/hQJNQszLPJoxvGECvz5TN2lJhuyCupS50aGKGqTxKYtiPHpWa8jZyjmanMKnEdOGyw/X4SFyodv8AEloqd81yGg=='''
    private_keyBytes = b64decode(privateKey)
    priKey = RSA.importKey(private_keyBytes)
    signer = PKCS1_v1_5.new(priKey)
    hash_obj = SHA256.new(data.encode('utf-8'))

    signature = b64encode(signer.sign(hash_obj)).decode()
    return signature


class MXBC:
    msg = ""

    def __init__(self, token):
        self.token = token
        self.appid = "d82be6bbc1da11eb9dd000163e122ecb"

    def check_in(self):
        url = f"https://mxsa.mxbc.net/api/v1/customer/signin"
        params = f"appId={self.appid}&t={timestamp()}"
        params += "&sign=" + RSA_sign(params).replace("/", "_").replace("+", "-")
        headers = {
            "app": "mxbc",
            "appchannel": "huawei",
            "appversion": "3.0.3",
            "Access-Token": self.token,
            "Host": "mxsa.mxbc.net",
            "Connection": "Keep-Alive",
            "Accept-Encoding": "gzip",
            "User-Agent": "okhttp/4.4.1",
            "Pragma": "no-cache",
            "Cache-Control": "no-cache"
        }
        data = get(url, headers=headers, params=params).json()
        if data.get("msg") == "":
            print(f"签到成功")
            MXBC.msg += "签到成功 "
        else:
            print(f"签到失败, 原因是{data.get('msg')}")
            MXBC.msg += f"签到失败, 原因是{data.get('msg')} "


    def get_userinfo(self):
        url = "https://mxsa.mxbc.net/api/v1/customer/info"
        params = f"appId={self.appid}&t={timestamp()}"
        params += "&sign=" + RSA_sign(params).replace("/", "_").replace("+", "-")
        headers = {
            "app": "mxbc",
            "appchannel": "huawei",
            "appversion": "3.0.3",
            "Access-Token": self.token,
            "Host": "mxsa.mxbc.net",
            "Connection": "Keep-Alive",
            "Accept-Encoding": "gzip",
            "User-Agent": "okhttp/4.4.1",
            "Pragma": "no-cache",
            "Cache-Control": "no-cache"
        }
        data = get(url, headers=headers, params=params).json()
        account = data.get('data').get('mobilePhone')
        coin = data.get('data').get('customerPoint')
        exp = data.get('data').get('growthValue')
        level_exp = data.get('data').get('customerLevelVo').get('growthValueMax') - data.get('data').get('growthValue')
        MXBC.msg += f"查询成功, 账号{account}, 共有雪王币{coin}, 共有成长值{exp}, 还差{level_exp}升级\n"
    def main(self):
        self.check_in()
        self.get_userinfo()

if __name__ == '__main__':
    token_list = environ.get("MXBC_TOKEN")
    [MXBC(token).main() for token in token_list.split("#")]
    if push:
        send("蜜雪冰城签到", MXBC.msg)
