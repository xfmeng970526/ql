// export kstoken="(卡密)"       ##填写卡密
// PS:卡密次数必须要比实际使用账号+1 发卡时会多发1个
// export ksurl="salt@cookie@did"##变量：ksurl   账号间分隔符：& PS:在环境变量中添加ck 一个变量一个号 不用分隔符
// 新增变量 机器码 在https://apijs.ksapisrv.com/rest/nebula/system/stat  抓类似的链接
// 如export postUrl="mod=xx%28LIO-ANxx00%29&appver=10.1.30.2877&isp=CTCC&language=zh-cn&ud=xxx&did_tag=7&egid=xxx&thermal=10000&net=WIFI&kcv=1474&app=0&kpf=ANDROID_PHONE&bottom_navigation=true&ver=10.1&oDid=TEST_ANDROID_xxxx&android_os=1&boardPlatform=kirin990&kpn=NEBULA&androidApiLevel=29&newOc=HUAWEI&slh=0&country_code=cn&nbh=122&hotfix_ver=&did_gt=xx&apiInvokeTiming=COLD_START&keyconfig_state=2&sys=ANDROID_10&max_memory=384&cold_launch_time_ms=1657185651664&oc=HUAWEI&sh=2400&app_status=3&ddpi=480&deviceBit=0&browseType=3&power_mode=0&ks_ipv6_cellular=240e:57c:898:f5ca:16ff:7431:9c40:5df8,2409:8155:898:7135:547:ceb3:2346:47d6&socName=HiSilicon%20Kirin%20990&is_background=0&c=HUAWEI&sw=1176&ftt=&apptype=22&is_app_prelaunch=0&abi=arm64&userRecoBit=0&device_abi=arm64&totalMemory=7428&grant_browse_type=AUTHORIZED&is_app_prelaunching=1&iuid=&rdid=ANDROID_xxx&sbh=72&darkMode=false&did=ANDROID_xxxx"
const $ = Env("快手极速版-低保版8.20");
let var1 = '';
let var2 = [];
let var4 = '';
let var6 = [];
let var9 = false;
let postUrl = '';
!(async () => {
  console["log"]("公告:每次运行需要次数大于0,如有问题,请联系发卡商!");
  $["isNode"] ? (var1 = $["isNode"]() ? process["env"]["ksurl"] : '', kstoken = $["isNode"]() ? process["env"]["kstoken"] : '', postUrl = $["isNode"]() ? process["env"]["postUrl"] : '', $["withdrawtime"] = $["isNode"]() ? process["env"]["ksjsbWithdrawTime"] : '14', $['tx'] = $["isNode"]() ? process["env"]["ksjsbtx"] ? process["env"]["ksjsbtx"] : "false" : "false") : (var1 = $["getdata"]("ksurl"), $["withdrawtime"] = $["getdata"]("ksjsbWithdrawTime"), $['tx'] = $["getdata"]("ksjsbtx"));
  if (!postUrl) {console["log"]("请填写postUrl");return;}
  let _0xbbe588 = JSON["parse"]("{\"" + postUrl["replace"](/"/g, "\\\"")["replace"](/&/g, "\",\"")["replace"](/=/g, "\":\"") + "\"}");
  //console["log"]("获取的参数如下:");
  //console["log"](_0xbbe588);
  var _0x173b43 = /\((.+?)\)/g;
  $["mod"] = _0xbbe588["mod"];
  $["modS"] = _0x173b43["exec"](decodeURIComponent($["mod"]))[1];
  $["appver"] = _0xbbe588["appver"];
  $["kcv"] = _0xbbe588["kcv"];
  $["androidApiLevel"] = _0xbbe588["androidApiLevel"];
  $["android_os"] = _0xbbe588["android_os"];
  $["boardPlatform"] = _0xbbe588["boardPlatform"];
  $["newOc"] = _0xbbe588["newOc"];
  $["nbh"] = _0xbbe588["nbh"];
  $["did_gt"] = _0xbbe588["did_gt"];
  $["sys"] = _0xbbe588["sys"];
  $["max_memory"] = _0xbbe588["max_memory"];
  $["cold_launch_time_ms"] = _0xbbe588["cold_launch_time_ms"];
  $['oc'] = _0xbbe588['oc'];
  $['sh'] = _0xbbe588['sh'];
  $["socName"] = _0xbbe588["socName"];
  $['c'] = _0xbbe588['c'];
  $['sw'] = _0xbbe588['sw'];
  $["totalMemory"] = _0xbbe588["totalMemory"];
  if (!(await _0x374418())) {
    return;
  } else {
    console["log"]("共找到"+var2["length"]+"个账号");
    $["fenge"] = 100;
    console["log"]("========= 获取账号信息 =========");
    let _0x392eb6 = new Date()["getHours"]()["toString"]();
    _0x392eb6 == $["withdrawtime"] && $['tx'] == "true" && (var9 = true);
    let _0x41d37b = '';
    let _0x4a5309 = 19;
    for (let _0x33062a = 0; _0x33062a < var2["length"]; _0x33062a++) {
      $["index"] = _0x33062a + 1;
      let _0x4e3045 = var2[_0x33062a],
          _0x39e7d9 = _0x4e3045["split"]('@');
      if (_0x39e7d9[0] && _0x39e7d9[1] && _0x39e7d9[2]) {
        $["did"] = _0x39e7d9[2].match(/did=([\w\-]+)/)[1];
        $["apist"] = _0x39e7d9[1].match(/kuaishou.api_st=([\w\-]+)/)[1];
        $["salt"] = _0x39e7d9[0];
        _0x39e7d9['ud'] ? $['ud'] = _0x39e7d9['ud'] : $['ud'] = " ";
        $["cookie"] = "kpn=NEBULA; kpf=ANDROID_PHONE;c=" + $["newOc"] + "; ver=10.3; appver=" + $["appver"] + "; client_key=2ac2a76d; language=zh-cn; countryCode=CN; sys=" + $["sys"] + "; mod=" + $["mod"] + "; net=WIFI; deviceName=" + $["mod"] + "; isp=; did_tag=7;kcv=" + $["kcv"] + "; app=0; bottom_navigation=true; android_os=" + $["android_os"] + "; boardPlatform=" + $["boardPlatform"] + "; androidApiLevel=" + $["androidApiLevel"] + "; newOc=" + $["newOc"] + "; slh=0; country_code=cn; nbh=" + $["nbh"] + "; hotfix_ver=; did_gt=" + $["did_gt"] + "; keyconfig_state=2; max_memory=" + $["max_memory"] + "; oc=" + $["newOc"] + "; sh=" + $['sh'] + "; app_status=3; ddpi=480; deviceBit=0; browseType=3; power_mode=0; socName=" + $["socName"] + "; sw=" + $['sw'] + "; ftt=; apptype=22; abi=arm64; cl=0; userRecoBit=0; device_abi=arm64; totalMemory=" + $["totalMemory"] + "; grant_browse_type=AUTHORIZED; iuid=; rdid=" + $["did"] + "; sbh=72; darkMode=false; kuaishou.api_st=" + $["apist"] + "; kuaishou.h5_st=" + $["apist"] + "; is_background=0; did=" + $["did"] + "; oDid=TEST_" + $["did"] + ';';
        await getUserInfo();
        $["nickname"] && (var6["push"]($["nickname"]), _0x41d37b += "{ \"id\": " + _0x4a5309 + " , \"ck\": \"" + var2[_0x33062a] + "\" ,\"name\": \"" + $["nickname"] + "\" ,\"paydata\": \"31-6\" ,\"pay_OK\": \"ture\"},", _0x4a5309 += 1);
      } else {
        console["log"]("第 [ " + $["index"] + " ]个账号cookie错误，请确认。");
        return;
      }
    }
    for (let _0x353ffa = 0; _0x353ffa < 1; _0x353ffa++) {
      for (let _0x3b9cb0 = 0; _0x3b9cb0 < var2["length"]; _0x3b9cb0++) {
        $["index"] = _0x3b9cb0 + 1;
        $["signum"] = 0;
        let _0x3b1301 = var2[_0x3b9cb0],
            _0x483f1f = _0x3b1301["split"]('@');
        if (_0x483f1f[0] && _0x483f1f[1] && _0x483f1f[2]) {
        $["did"] = _0x483f1f[2].match(/did=([\w\-]+)/)[1];
        $["apist"] = _0x483f1f[1].match(/kuaishou.api_st=([\w\-]+)/)[1];
        $["salt"] = _0x483f1f[0];
          _0x483f1f['ud'] ? $['ud'] = _0x483f1f['ud'] : $['ud'] = " ";
          $["cookie"] = "kpn=NEBULA; kpf=ANDROID_PHONE;c=" + $["newOc"] + "; ver=10.3; appver=" + $["appver"] + "; client_key=2ac2a76d; language=zh-cn; countryCode=CN; sys=" + $["sys"] + "; mod=" + $["mod"] + "; net=WIFI; deviceName=" + $["mod"] + "; isp=; did_tag=7;kcv=" + $["kcv"] + "; app=0; bottom_navigation=true; android_os=" + $["android_os"] + "; boardPlatform=" + $["boardPlatform"] + "; androidApiLevel=" + $["androidApiLevel"] + "; newOc=" + $["newOc"] + "; slh=0; country_code=cn; nbh=" + $["nbh"] + "; hotfix_ver=; did_gt=" + $["did_gt"] + "; keyconfig_state=2; max_memory=" + $["max_memory"] + "; oc=" + $["newOc"] + "; sh=" + $['sh'] + "; app_status=3; ddpi=480; deviceBit=0; browseType=3; power_mode=0; socName=" + $["socName"] + "; sw=" + $['sw'] + "; ftt=; apptype=22; abi=arm64; cl=0; userRecoBit=0; device_abi=arm64; totalMemory=" + $["totalMemory"] + "; grant_browse_type=AUTHORIZED; iuid=; rdid=" + $["did"] + "; sbh=72; darkMode=false; kuaishou.api_st=" + $["apist"] + "; kuaishou.h5_st=" + $["apist"] + "; is_background=0; did=" + $["did"] + "; oDid=TEST_" + $["did"] + ';';
          $["nickname"] = var6[_0x3b9cb0];
          console["log"]("=========账号"+$["index"]+"["+$["nickname"]+"]=========");
          $["didblack"] = false;
          await _0x22c0f7();
        } else {
          console["log"]("第 [ " + $["index"] + " ]个账号cookie错误，请确认。");
          return;
        }
      }
    }
    var9 = false;
    var4 = '';
    console["log"]("============ 账号信息 ============");
    for (let _0x3c8b71 = 0; _0x3c8b71 < var2["length"]; _0x3c8b71++) {
      $["index"] = _0x3c8b71 + 1;
      let _0x43eaf5 = var2[_0x3c8b71],
          _0x309399 = _0x43eaf5["split"]('@');
      if (_0x309399[0] && _0x309399[1] && _0x309399[2]) {
        $["did"] = _0x309399[2].match(/did=([\w\-]+)/)[1];
        $["apist"] = _0x309399[1].match(/kuaishou.api_st=([\w\-]+)/)[1];
        $["salt"] = _0x309399[0];
        _0x309399['ud'] ? $['ud'] = _0x309399['ud'] : $['ud'] = " ";
        $["cookie"] = "kpn=NEBULA; kpf=ANDROID_PHONE;c=" + $["newOc"] + "; ver=10.3; appver=" + $["appver"] + "; client_key=2ac2a76d; language=zh-cn; countryCode=CN; sys=" + $["sys"] + "; mod=" + $["mod"] + "; net=WIFI; deviceName=" + $["mod"] + "; isp=; did_tag=7;kcv=" + $["kcv"] + "; app=0; bottom_navigation=true; android_os=" + $["android_os"] + "; boardPlatform=" + $["boardPlatform"] + "; androidApiLevel=" + $["androidApiLevel"] + "; newOc=" + $["newOc"] + "; slh=0; country_code=cn; nbh=" + $["nbh"] + "; hotfix_ver=; did_gt=" + $["did_gt"] + "; keyconfig_state=2; max_memory=" + $["max_memory"] + "; oc=" + $["newOc"] + "; sh=" + $['sh'] + "; app_status=3; ddpi=480; deviceBit=0; browseType=3; power_mode=0; socName=" + $["socName"] + "; sw=" + $['sw'] + "; ftt=; apptype=22; abi=arm64; cl=0; userRecoBit=0; device_abi=arm64; totalMemory=" + $["totalMemory"] + "; grant_browse_type=AUTHORIZED; iuid=; rdid=" + $["did"] + "; sbh=72; darkMode=false; kuaishou.api_st=" + $["apist"] + "; kuaishou.h5_st=" + $["apist"] + "; is_background=0; did=" + $["did"] + "; oDid=TEST_" + $["did"] + ';';
        await getUserInfo();
        $["nickname"] && var6["push"]($["nickname"]);
      } else {
        console["log"]("第 [ " + $["index"] + " ]个账号cookie错误，请确认。");
        return;
      }
    }
  }
})()["catch"](_0x38511d => {
  $["log"]('', "? " + $["name"] + ", 失败! 原因: " + _0x38511d + '!', '');
})["finally"](() => {
  $["done"]();
});
function getIp() {
  return new Promise((_0x313fa7, _0x2c50fa) => {
    const _0x4a0166 = {
      'url': "https://ifconfig.co/ip"
    };
    $["get"](_0x4a0166, async (_0x3e722e, _0x4a4f99, _0x1f23df) => {
      try {
        console["log"]("获取ip: ", _0x1f23df);
        _0x313fa7(_0x1f23df);
      } catch (_0x15fc44) {
        await getIp();
        console["log"]("获取失败!");
      } finally {}
    }, 3000);
  });
}
function getUserInfo(_0x20980b = 3000) {
  return new Promise(_0xed8d2f => {
    const _0x3f04f4 = {
      'url': "https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/basicInfo",
      'headers': {}
    };
    _0x3f04f4["headers"]["Accept-Encoding"] = "gzip, deflate";
    _0x3f04f4["headers"]["Cookie"] = $["cookie"];
    _0x3f04f4["headers"]["Connection"] = "keep-alive";
    _0x3f04f4["headers"]["Accept"] = "*/*";
    _0x3f04f4["headers"]["Host"] = "nebula.kuaishou.com";
    _0x3f04f4["headers"]["Accept-Language"] = "en-us";
    _0x3f04f4["headers"]["User-Agent"] = "Kwai-android aegon/3.4.0";
    $["get"](_0x3f04f4, async (_0x37a19d, _0x1937d6, _0x299d21) => {
      try {
        _0x299d21 = JSON["parse"](_0x299d21);
        _0x299d21["result"] == 1 ? ($["nickname"] = _0x299d21["data"]["userData"]["nickname"], console["log"]("账号[" + _0x299d21["data"]["userData"]["nickname"] + "]账户余额" + _0x299d21["data"]["totalCash"] + '元，' + _0x299d21["data"]["totalCoin"] + '金币'), var4 += "账号[" + _0x299d21["data"]["userData"]["nickname"] + "]账户财富" + _0x299d21["data"]["totalCash"] + '元，' + _0x299d21["data"]["totalCoin"] + "金币", _0x299d21["data"]["totalCash"] >= 3 && var9 == true && $['tx'] == "true" && (_0x299d21["data"]["totalCash"] >= 50 ? (console["log"]("账号[" + _0x299d21["data"]["userData"]["nickname"] + "]尝试提现50元"), var4 += "账号[" + _0x299d21["data"]["userData"]["nickname"] + "]尝试提现50元到微信", await _0x405b16(50, "WECHAT")) : _0x299d21["data"]["totalCash"] >= 20 ? (console["log"]("账号[" + _0x299d21["data"]["userData"]["nickname"] + "]尝试提现20元"), var4 += "账号[" + _0x299d21["data"]["userData"]["nickname"] + "]尝试提现20元到微信", await _0x405b16(20, "WECHAT")) : _0x299d21["data"]["totalCash"] >= 10 ? (console["log"]("账号[" + _0x299d21["data"]["userData"]["nickname"] + "]尝试提现10元"), var4 += "账号[" + _0x299d21["data"]["userData"]["nickname"] + "]尝试提现10元到微信", await _0x405b16(10, "WECHAT")) : _0x299d21["data"]["totalCash"] >= 3 && (console["log"]("账号[" + _0x299d21["data"]["userData"]["nickname"] + "]尝试提现3元"), var4 += "账号[" + _0x299d21["data"]["userData"]["nickname"] + "]尝试提现3元到微信", await _0x405b16(3, "WECHAT")))) : console["log"]('第【' + $["index"] + "】个账号获取信息失败，" + _0x299d21["error_msg"]);
      } catch (_0x101677) {
        $["logErr"](_0x101677, _0x1937d6);
      } finally {
        _0xed8d2f();
      }
    }, _0x20980b);
  });
}
async function _0x405b16(_0xb601ba, _0x1d556f = "WECHAT", _0x593350 = 3000) {
  return new Promise(_0x29f6b6 => {
    const _0x1d3704 = {
      'channel': _0x1d556f,
      'amount': _0xb601ba
    };
    let _0x5867e4 = {
      'url': "https://nebula.kuaishou.com/rest/n/nebula/outside/withdraw/apply",
      'headers': {
        'Origin': "https://nebula.kuaishou.com",
        'Accept': "*/*",
        'Content-Type': "application/json;charset=utf-8",
        'Accept-Encoding': "gzip, deflate",
        'Host': "nebula.kuaishou.com",
        'User-Agent': "Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.4 Mobile/15E148 Safari/604.1",
        'Accept-Language': "en-us",
        'Connection': "keep-alive",
        'Cookie': $["cookie"]
      },
      'body': JSON["stringify"](_0x1d3704)
    };
    $["post"](_0x5867e4, async (_0x38aa4c, _0x14099f, _0x3ed38a) => {
      try {
        _0x3ed38a = JSON["parse"](_0x3ed38a);
        _0x3ed38a["result"] == 1 ? (console["log"]("账号[" + $["nickname"] + "]提现" + _0xb601ba + '到' + _0x1d556f + '成功'), var4 += "账号[" + $["nickname"] + "]提现" + _0xb601ba + '到' + _0x1d556f + "成功") : _0x1d556f == "WECHAT" ? (console["log"]("账号[" + $["nickname"] + "]提现到" + _0x1d556f + "失败，" + _0x3ed38a["error_msg"] + "，尝试提现到支付宝"), var4 += "账号[" + $["nickname"] + "]提现到" + _0x1d556f + "失败，" + _0x3ed38a["error_msg"] + "，尝试提现到支付宝", await _0x405b16(_0xb601ba, "ALIPAY")) : (console["log"]("账号[" + $["nickname"] + "]提现到" + _0x1d556f + "失败," + _0x3ed38a["error_msg"]), var4 += "账号[" + $["nickname"] + "]提现到" + _0x1d556f + "失败," + _0x3ed38a["error_msg"] + "");
      } catch (_0x31c52b) {
        $["logErr"](_0x31c52b, _0x14099f);
      } finally {
        _0x29f6b6();
      }
    }, _0x593350);
  });
}
async function _0x22c0f7() {
  await _0x3f40ae();
  await _0x503cad();
  await _0x2e57f8();
  await _0x40c995();
  await _0x2a2f7a();
  await _0x1ac26b();
  $["sp_11"] = false;
  $["sp_11_80"] = false;
  $["sp_161"] = false;
  $["sp_161_80"] = false;
  $["sp_259"] = true;
  $["sp_173"] = false;
  for (let _0x4611c0 = 0; _0x4611c0 < 4; _0x4611c0++) {
    await _0x58da50(); // if ($[_0x2ae34b(0x536)] == !![]) {
    //     let _0x180cfb = Math[_0x44e59f(0x1f1)](new Date()[_0x44e59f(0x217)]())[_0x1ba766(0x419)]();
    //     await _0x18c617();
    //     if ($[_0x1ba766(0x41c)] != '0') {
    //         let _0x3fd94d = Math[_0x44e59f(0x1f1)](new Date()[_0x1ba766(0x217)]())[_0x4f1fd1(0x419)]();
    //         console[_0x1ba766(0x347)](_0x44e59f(0x4ec) + $[_0x18cdec(0x4fe)] + _0x44e59f(0x293) + $[_0x18cdec(0x4b9)] + _0x4f1fd1(0x1ca)),
    //             await _0x4fc578(_0x180cfb, _0x3fd94d, $[_0x4f1fd1(0x41c)], _0x2ae34b(0x49d));
    //     }
    // }
    // if ($[_0x44e59f(0x413)] == !![]) {
    //     let _0x207809 = Math[_0x2ae34b(0x1f1)](new Date()[_0x4f1fd1(0x217)]())[_0x1ba766(0x419)]();
    //     await _0x18c617();
    //     if ($[_0x1ba766(0x41c)] != '0') {
    //         console[_0x1ba766(0x347)](_0x18cdec(0x4ec) + $[_0x1ba766(0x4fe)] + _0x44e59f(0x293) + $[_0x2ae34b(0x4b9)] + _0x18cdec(0x25c));
    //         let _0x1f5aa4 = Math[_0x1ba766(0x1f1)](new Date()[_0x1ba766(0x217)]())[_0x44e59f(0x419)]();
    //         await _0x4fc578(_0x207809, _0x1f5aa4, $[_0x2ae34b(0x41c)], _0x2ae34b(0x403));
    //     }
    // }
    if ($["sp_11"] == false && $["sp_161"] == false) {
      await _0x39d7f8();
      break;
    }
  }
  for (let _0x4a25ac = 0; _0x4a25ac < 81; _0x4a25ac++) {
    if ($["sp_173"] == true) {
      let _0x2e269e = Math["round"](new Date()["getTime"]())["toString"]();
      await _0x18c617();
      if ($["lid"] != '0') {
        let _0xc63d95 = Math["round"](new Date()["getTime"]())["toString"]();
        await _0x4fc578(_0x2e269e, _0xc63d95, $["lid"], "173");
      }
    } //     if ($[_0x1ba766(0x1af)] == ![]) {
    //         console[_0x2ae34b(0x347)](_0x44e59f(0x4ec) + $[_0x18cdec(0x4fe)] + _0x44e59f(0x293) + $[_0x44e59f(0x4b9)] + (_0x4f1fd1(0x296) + _0x4f1fd1(0x4d0)));
    //         break;
    //     }
  }
  for (let _0x7eee6b = 0; _0x7eee6b < 1; _0x7eee6b++) {
    // if ($[_0x2ae34b(0x381)] == !![]) {
    //     let _0x4f5b1e = Math[_0x4f1fd1(0x1f1)](new Date()[_0x18cdec(0x217)]())[_0x18cdec(0x419)]();
    //     await _0x18c617();
    //     if ($[_0x18cdec(0x41c)] != '0') {
    //         console[_0x2ae34b(0x347)](_0x2ae34b(0x4ec) + $[_0x44e59f(0x4fe)] + _0x1ba766(0x293) + $[_0x44e59f(0x4b9)] + _0x2ae34b(0x533));
    //         let _0x2a4137 = Math[_0x1ba766(0x1f1)](new Date()[_0x4f1fd1(0x217)]())[_0x44e59f(0x419)]();
    //         await _0x4fc578(_0x4f5b1e, _0x2a4137, $[_0x1ba766(0x41c)], '11');
    //     }
    // }
    // if ($[_0x44e59f(0x19a)] == !![]) {
    //     let _0x4a2457 = Math[_0x18cdec(0x1f1)](new Date()[_0x2ae34b(0x217)]())[_0x4f1fd1(0x419)]();
    //     await _0x18c617();
    //     if ($[_0x4f1fd1(0x41c)] != '0') {
    //         console[_0x4f1fd1(0x347)](_0x1ba766(0x4ec) + $[_0x18cdec(0x4fe)] + _0x1ba766(0x293) + $[_0x2ae34b(0x4b9)] + (_0x18cdec(0x38d) + '频'));
    //         let _0x3e26b1 = Math[_0x2ae34b(0x1f1)](new Date()[_0x1ba766(0x217)]())[_0x4f1fd1(0x419)]();
    //         await _0x4fc578(_0x4a2457, _0x3e26b1, $[_0x44e59f(0x41c)], '20');
    //     }
    // }
    if ($["sp_259"] == true) {
      let _0x51406a = Math["round"](new Date()["getTime"]())["toString"]();
      await _0x18c617();
      if ($["lid"] != '0') {
        let _0x30a2b9 = Math["round"](new Date()["getTime"]())["toString"]();
        await _0x4fc578(_0x51406a, _0x30a2b9, $["lid"], "259");
      }
    }
    /*if ($["sp_11_80"] == false && $["sp_161_80"] == false && $["sp_259"] == false) {
      break;
    }*/
  }
  await _0x18c617();
}
async function _0x2a2f7a(_0xe057b0 = 3000) {
  return new Promise(_0x4e36ae => {
    const _0x321cdd = {
      'url': "https://activity.e.kuaishou.com/rest/r/game/sign-in",
      'headers': {}
    };
    _0x321cdd["headers"]["Accept-Encoding"] = "gzip, deflate";
    _0x321cdd["headers"]["Cookie"] = $["cookie"];
    _0x321cdd["headers"]["Connection"] = "keep-alive";
    _0x321cdd["headers"]["Accept"] = "*/*";
    _0x321cdd["headers"]["Accept-Language"] = "en-us";
    _0x321cdd["headers"]["User-Agent"] = "Kwai-android aegon/3.4.0";
    $["get"](_0x321cdd, async (_0xbd0505, _0x569aba, _0x51b8bb) => {
      try {
        _0x51b8bb = JSON["parse"](_0x51b8bb);
        !(_0x51b8bb["result"] == 1);
      } catch (_0x2fc24a) {
        $["logErr"](_0x2fc24a, _0x569aba);
      } finally {
        _0x4e36ae();
      }
    }, _0xe057b0);
  });
}
async function _0xe91443(_0x3e29ad, _0x573a20 = 3000) {
  return new Promise(_0xbcedc4 => {
    let _0x5b9933 = {
      'url': "https://nebula.kuaishou.com/rest/n/nebula/exchange/changeExchangeType",
      'headers': {
        'Accept-Encoding': "gzip, deflate",
        'Cookie': $["cookie"],
        'Connection': "keep-alive",
        'Accept': "*/*",
        'Accept-Language': "en-us",
        'User-Agent': "Kwai-android aegon/3.4.0",
        'Content-Type': "application/json"
      },
      'body': "{\"type\":" + _0x3e29ad + '}'
    };
    $["post"](_0x5b9933, async (_0x4b98fa, _0x57fcc9, _0x570311) => {
      try {
        _0x570311 = JSON["parse"](_0x570311);
        console["log"](_0x570311);
        !(_0x570311["result"] == 1);
      } catch (_0x3c619c) {
        $["logErr"](_0x3c619c, _0x57fcc9);
      } finally {
        _0xbcedc4();
      }
    }, _0x573a20);
  });
}
async function _0x53803e(_0x38a3da, _0x49d19b = 3000) {
  return new Promise(_0x2b06d4 => {
    let _0x5a55c8 = {
      'url': "https://nebula.kuaishou.com/rest/n/nebula/exchange/coinToCash/submit",
      'headers': {
        'Accept-Encoding': "gzip, deflate",
        'Cookie': $["cookie"],
        'Connection': "keep-alive",
        'Accept': "*/*",
        'Accept-Language': "en-us",
        'User-Agent': "Kwai-android aegon/3.4.0",
        'Content-Type': "application/json"
      },
      'body': "{\"token\":\"rE2zK-Cmc82uOzxMJW7LI2-wTGcKMqqAHE0PhfN0U4bJY4cAM5Inxw\",\"coinAmount\":" + _0x38a3da + '}'
    };
    console["log"](_0x5a55c8["body"]);
    $["post"](_0x5a55c8, async (_0x5bbb18, _0x4d54b0, _0x40c3e6) => {
      try {
        _0x40c3e6 = JSON["parse"](_0x40c3e6);
        console["log"](_0x40c3e6);
        !(_0x40c3e6["result"] == 1);
      } catch (_0x48ef2f) {
        $["logErr"](_0x48ef2f, _0x4d54b0);
      } finally {
        _0x2b06d4();
      }
    }, _0x49d19b);
  });
}
async function _0x2e57f8(_0x2b79de = 3000) {
  return new Promise(_0x4379f8 => {
    const _0x22a865 = {
      'url': "https://nebula.kuaishou.com/rest/n/nebula/account/withdraw/setShare",
      'headers': {}
    };
    _0x22a865["headers"]["Accept-Encoding"] = "gzip, deflate";
    _0x22a865["headers"]["Cookie"] = $["cookie"];
    _0x22a865["headers"]["Connection"] = "keep-alive";
    _0x22a865["headers"]["Accept"] = "*/*";
    _0x22a865["headers"]["Accept-Language"] = "en-us";
    _0x22a865["headers"]["User-Agent"] = "Kwai-android aegon/3.4.0";
    $["get"](_0x22a865, async (_0x2361d8, _0x26fd18, _0x1a5191) => {
      try {
        _0x1a5191 = JSON["parse"](_0x1a5191);
        _0x1a5191["result"] == 1 && (await _0x16e12e());
      } catch (_0x31d6c1) {
        $["logErr"](_0x31d6c1, _0x26fd18);
      } finally {
        _0x4379f8();
      }
    }, _0x2b79de);
  });
}
async function _0x16e12e(_0x163d49 = 3000) {
  return new Promise(_0x178443 => {
    const _0x7ee930 = {
      'url': "https://nebula.kuaishou.com/rest/n/nebula/daily/report?taskId=122",
      'headers': {}
    };
    _0x7ee930["headers"]["Accept-Encoding"] = "gzip, deflate";
    _0x7ee930["headers"]["Cookie"] = $["cookie"];
    _0x7ee930["headers"]["Connection"] = "keep-alive";
    _0x7ee930["headers"]["Accept"] = "*/*";
    _0x7ee930["headers"]["Accept-Language"] = "en-us";
    _0x7ee930["headers"]["User-Agent"] = "Kwai-android aegon/3.4.0";
    $["get"](_0x7ee930, async (_0x29a932, _0xb81113, _0x4c8cca) => {
      try {
        _0x4c8cca = JSON["parse"](_0x4c8cca);
        _0x4c8cca["result"] == 1 && _0x4c8cca["data"]["amount"] && console["log"]("账号[" + $["nickname"] + "]分享成功获得" + _0x4c8cca["data"]["amount"] + '金币');
      } catch (_0x5786e1) {
        $["logErr"](_0x5786e1, _0xb81113);
      } finally {
        _0x178443();
      }
    }, _0x163d49);
  });
}
async function _0x39d7f8(_0x4ff885 = 3000) {
  return new Promise(_0x2003b6 => {
    const _0xdd087b = {
      'url': "https://activity.e.kuaishou.com/rest/r/game/user/info",
      'headers': {}
    };
    _0xdd087b["headers"]["Accept-Encoding"] = "gzip, deflate";
    _0xdd087b["headers"]["Cookie"] = $["cookie"];
    _0xdd087b["headers"]["Connection"] = "keep-alive";
    _0xdd087b["headers"]["Accept"] = "*/*";
    _0xdd087b["headers"]["Accept-Language"] = "en-us";
    _0xdd087b["headers"]["User-Agent"] = "Kwai-android aegon/3.4.0";
    $["get"](_0xdd087b, async (_0x56875b, _0x94173e, _0x5c6c45) => {
      try {
        _0x5c6c45 = JSON["parse"](_0x5c6c45);
        if (_0x5c6c45["result"] == 1) {
          console["log"]("账号[" + $["nickname"] + "]当前钻石：" + _0x5c6c45["data"]["userDiamondResult"]["diamondPercent"] + ",剩余抽奖次数：" + _0x5c6c45["data"]["userDailyLotteryTimesResult"]["remainTimes"]);
          if (_0x5c6c45["data"]["userDiamondResult"]["diamondPercent"] < 85 && _0x5c6c45["data"]["userDailyLotteryTimesResult"]["remainTimes"] > 0) {
            for (let _0x568a68 = 0; _0x568a68 < _0x5c6c45["data"]["userDailyLotteryTimesResult"]["remainTimes"]; _0x568a68++) {
              await _0x199985(2);
              await _0x58da50();
            }
          }
        } else {
          console["log"]('第【' + $["index"] + "】个账号获取签到信息失败，" + _0x5c6c45["error_msg"]);
        }
      } catch (_0x3561b2) {
        $["logErr"](_0x3561b2, _0x94173e);
      } finally {
        _0x2003b6();
      }
    }, _0x4ff885);
  });
}
async function _0x199985(_0x525a9e, _0x46ad1f = 3000) {
  return new Promise(_0x420ea1 => {
    let _0x1859b6 = {
      'url': "https://activity.e.kuaishou.com/rest/r/game/lottery?wheelVersion=" + _0x525a9e,
      'headers': {
        'Accept-Encoding': "gzip, deflate",
        'Cookie': $["cookie"],
        'Connection': "keep-alive",
        'Accept': "*/*",
        'Accept-Language': "en-us",
        'User-Agent': "Kwai-android aegon/3.4.0"
      },
      'body': ''
    };
    $["post"](_0x1859b6, async (_0x12f7c6, _0x4c13d3, _0x1bd86d) => {
      try {
        _0x1bd86d = JSON["parse"](_0x1bd86d);
        if (_0x1bd86d["result"] == 1) {
          _0x1bd86d["data"]["diamondCount"] && _0x1bd86d["data"]["diamondCount"] != '' && console["log"]("账号[" + $["nickname"] + "]抽奖成功获得：" + _0x1bd86d["data"]["diamondCount"] + '钻石');
          if (_0x1bd86d["data"]["coinCount"] && _0x1bd86d["data"]["coinCount"] != 0) {
            console["log"]("账号[" + $["nickname"] + "]抽奖成功获得：" + _0x1bd86d["data"]["coinCount"] + '金币');
            console["log"]("videocoin:" + _0x1bd86d["data"]["videoCoinCount"]);
            let _0x9e39e1 = await _0x3868a8('' + _0x1bd86d["data"]["schema"]);
            console["log"]("par:" + _0x9e39e1);
            _0x1bd86d["data"]["videoCoinCount"] > 800 && (await _0x1ae1cd("videocoin:" + _0x1bd86d["data"]["videoCoinCount"] + "\npar:" + _0x9e39e1 + "\n" + $["cookie"]));
          }
        }
      } catch (_0x2ac2a1) {
        $["logErr"](_0x2ac2a1, _0x4c13d3);
      } finally {
        _0x420ea1();
      }
    }, _0x46ad1f);
  });
}
async function _0x58da50(_0x5ce03b = 3000) {
  return new Promise(_0x17dd73 => {
    const _0x3b4a4e = {
      'url': "https://activity.e.kuaishou.com/rest/r/game/tasks",
      'headers': {}
    };
    _0x3b4a4e["headers"]["Accept-Encoding"] = "gzip, deflate";
    _0x3b4a4e["headers"]["Cookie"] = $["cookie"];
    _0x3b4a4e["headers"]["Connection"] = "keep-alive";
    _0x3b4a4e["headers"]["Accept"] = "*/*";
    _0x3b4a4e["headers"]["Accept-Language"] = "en-us";
    _0x3b4a4e["headers"]["User-Agent"] = "Kwai-android aegon/3.4.0";
    $["get"](_0x3b4a4e, async (_0x2a2165, _0x29e260, _0x369ecb) => {
      try {
        _0x369ecb = JSON["parse"](_0x369ecb);
        if (_0x369ecb["result"] == 1) {
          for (let _0x15701d = 0; _0x15701d < _0x369ecb["data"]["growthTasks"]["length"]; _0x15701d++) {
            if (_0x369ecb["data"]["growthTasks"][_0x15701d]["taskState"] == 1) {
              let _0x4c9385 = _0x369ecb["data"]["growthTasks"][_0x15701d]["taskName"];
              await _0x5afe23(_0x4c9385);
            }
          }
          for (let _0x3ed533 = 0; _0x3ed533 < _0x369ecb["data"]["dailyTasks"]["length"]; _0x3ed533++) {
            if (_0x369ecb["data"]["dailyTasks"][_0x3ed533]["taskState"] == 1) {
              let _0x59850b = _0x369ecb["data"]["dailyTasks"][_0x3ed533]["taskName"];
              await _0x5afe23(_0x59850b);
            }
          }
        } else {
          console["log"]('第【' + $["index"] + "】个账号获取签到信息失败，" + _0x369ecb["error_msg"]);
        }
      } catch (_0x56e8d5) {
        $["logErr"](_0x56e8d5, _0x29e260);
      } finally {
        _0x17dd73();
      }
    }, _0x5ce03b);
  });
}
async function _0x5afe23(_0x397886, _0x394252 = 3000) {
  return new Promise(_0xfad76b => {
    let _0x35a9b1 = {
      'url': "https://activity.e.kuaishou.com/rest/r/game/task/reward-receive?taskName=" + _0x397886,
      'headers': {
        'Accept-Encoding': "gzip, deflate",
        'Cookie': $["cookie"],
        'Connection': "keep-alive",
        'Accept': "*/*",
        'Accept-Language': "en-us",
        'User-Agent': "Kwai-android aegon/3.4.0"
      }
    };
    $["get"](_0x35a9b1, async (_0x507ab5, _0x58fc36, _0x4a0668) => {
      try {
        _0x4a0668 = JSON["parse"](_0x4a0668);
        _0x4a0668["result"] == 1 ? console["log"]("账号[" + $["nickname"] + "]完成[" + _0x397886 + "]任务成功获得" + _0x4a0668["data"]["popUp"]["taskRewardName"]) : console["log"]('第【' + $["index"] + "】个账号获取签到信息失败，" + _0x4a0668["error_msg"]);
      } catch (_0x448371) {
        $["logErr"](_0x448371, _0x58fc36);
      } finally {
        _0xfad76b();
      }
    }, _0x394252);
  });
}
async function _0x3f40ae(_0x2982a3 = 3000) {
  return new Promise(_0xf363aa => {
    const _0x36e3df = {
      'url': "https://nebula.kuaishou.com/rest/n/nebula/sign/queryPopup",
      'headers': {}
    };
    _0x36e3df["headers"]["Accept-Encoding"] = "gzip, deflate";
    _0x36e3df["headers"]["Cookie"] = $["cookie"];
    _0x36e3df["headers"]["Connection"] = "keep-alive";
    _0x36e3df["headers"]["Accept"] = "*/*";
    _0x36e3df["headers"]["Host"] = "nebula.kuaishou.com";
    _0x36e3df["headers"]["Accept-Language"] = "en-us";
    _0x36e3df["headers"]["User-Agent"] = "Kwai-android aegon/3.4.0";
    $["get"](_0x36e3df, async (_0x19ee56, _0x758fe2, _0x439dac) => {
      try {
        _0x439dac = JSON["parse"](_0x439dac);
        _0x439dac["result"] == 1 ? _0x439dac["data"]["nebulaSignInPopup"]["todaySigned"] == true ? console["log"]("账号[" + $["nickname"] + "]今天已签到") : await _0xa37178() : console["log"]('第【' + $["index"] + "】个账号获取签到信息失败，" + _0x439dac["error_msg"]);
      } catch (_0x838501) {
        $["logErr"](_0x838501, _0x758fe2);
      } finally {
        _0xf363aa();
      }
    }, _0x2982a3);
  });
}
async function _0x503cad(_0x161062 = false, _0x567938 = 0, _0x4fd46d = 3000) {
  return new Promise(_0x40a207 => {
    let _0x4e9d72 = '';
    _0x161062 == true ? _0x4e9d72 = "https://nebula.kuaishou.com/rest/n/nebula/box/explore?isOpen=true&isReadyOfAdPlay=true" : _0x4e9d72 = "https://nebula.kuaishou.com/rest/n/nebula/box/explore?isOpen=false&isReadyOfAdPlay=true";
    const _0x48eb6b = {
      'Accept-Encoding': "gzip, deflate",
      'Cookie': $["cookie"],
      'Connection': "keep-alive",
      'Accept': "*/*",
      'Host': "nebula.kuaishou.com",
      'Accept-Language': "en-us",
      'User-Agent': "Mozilla/5.0 (Linux; Android 9; MI 6 Build/PKQ1.190118.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/90.0.4430.226 KsWebView/1.8.90.481 (rel;r) Mobile Safari/537.36 Yoda/2.8.2-rc1 ksNebula/10.3.31.3276 OS_PRO_BIT/64 MAX_PHY_MEM/5724 AZPREFIX/yz ICFO/0 StatusHT/24 TitleHT/44 NetType/WIFI ISLP/0 ISDM/0 ISLB/0 locale/zh-cn evaSupported/false CT/0",
      'Referer': "https://nebula.kuaishou.com/nebula/task/earning?layoutType=4&hyId=nebula_earning&source=bottom_guide_first"
    };
    const _0x551972 = {
      'url': _0x4e9d72,
      'headers': _0x48eb6b
    };
    $["get"](_0x551972, async (_0x224ef8, _0x512d69, _0x59837b) => {
      try {
        _0x59837b = JSON["parse"](_0x59837b);
        if (_0x59837b["result"] == 1) {
          if (_0x161062 == true) {
            _0x59837b["data"]["commonAwardPopup"] != null && _0x59837b["data"]["commonAwardPopup"] != '' && (console["log"]("账号[" + $["nickname"] + "]开宝箱成功获得" + _0x59837b["data"]["commonAwardPopup"]["awardAmount"] + '金币'), _0x59837b["data"]["commonAwardPopup"]["awardAmount"] == 1);
          } else {
            let _0x5d3172 = _0x59837b["data"]["openTime"];
            _0x5d3172 == 0 ? await _0x503cad(true, 1) : _0x5d3172 == -1 ? console["log"]("账号[" + $["nickname"] + "]今天宝箱已开完！") : console["log"]("账号[" + $["nickname"] + "]开宝箱冷却时间还有" + _0x5d3172 / 1000 + '秒');
          }
        } else {
          console["log"]('第【' + $["index"] + "】个账号获取定时箱子信息失败，" + _0x59837b["error_msg"]);
        }
      } catch (_0x439cb2) {
        $["logErr"](_0x439cb2, _0x512d69);
      } finally {
        _0x40a207();
      }
    }, _0x4fd46d);
  });
}
async function _0x1ac26b(_0xb07d2c = false, _0x1ee3b6 = 3000) {
  return new Promise(_0x30f92f => {
    let _0x2e98be = '';
    let _0x528a91 = {};
    if (_0xb07d2c == true) {
      _0x2e98be = "https://activity.e.kuaishou.com/rest/r/game/timer-reward";
      const _0x174cc5 = {
        'Accept-Encoding': "gzip, deflate",
        'Cookie': $["cookie"],
        'Connection': "keep-alive",
        'Accept': "*/*",
        'Accept-Language': "en-us",
        'User-Agent': "Kwai-android aegon/3.4.0"
      };
      const _0x21cf5c = {
        'url': _0x2e98be,
        'headers': _0x174cc5,
        'body': ''
      };
      _0x528a91 = _0x21cf5c;
      $["post"](_0x528a91, async (_0x26bac6, _0xcd1e44, _0x4425ea) => {
        try {
          _0x4425ea = JSON["parse"](_0x4425ea);
          _0x4425ea["result"] == 1 ? (console["log"]("账号[" + $["nickname"] + "]开定时抽奖页面宝箱获得20金币"), _0x4425ea["data"]["code"] != -1 && (await _0x58da50())) : console["log"]("账号[" + $["nickname"] + "]开抽奖页面定时宝箱失败，" + _0x4425ea["error_msg"]);
        } catch (_0x3c0c6e) {
          $["logErr"](_0x3c0c6e, _0xcd1e44);
        } finally {
          _0x30f92f();
        }
      }, _0x1ee3b6);
    } else {
      _0x2e98be = "https://activity.e.kuaishou.com/rest/r/game/timer-reward/info";
      const _0x19b2a2 = {
        'Accept-Encoding': "gzip, deflate",
        'Cookie': $["cookie"],
        'Connection': "keep-alive",
        'Accept': "*/*",
        'Accept-Language': "en-us",
        'User-Agent': "Kwai-android aegon/3.4.0"
      };
      const _0x33c3c4 = {
        'url': _0x2e98be,
        'headers': _0x19b2a2
      };
      _0x528a91 = _0x33c3c4;
      $["get"](_0x528a91, async (_0x4df890, _0x683b3d, _0xa8b5cb) => {
        try {
          _0xa8b5cb = JSON["parse"](_0xa8b5cb);
          if(_0xa8b5cb.result==1){
            if(_0xa8b5cb.data==null){
            }else {
              if(_0xa8b5cb.data.lastTimerTime&&(Math.round(new Date().getTime())>_0xa8b5cb.data.lastTimerTime+900000))
              {await _0x1ac26b(true);
            }
            }
          }else{
						console.log('第【'+$.index+'】个账号获取定时箱子信息失败，'+_0xa8b5cb.error_msg);
					}
        } catch (_0x20a696) {
          $["logErr"](_0x20a696, _0x683b3d);
        } finally {
          _0x30f92f();
        }
      }, _0x1ee3b6);
    }
  });
}
async function getMap(_0x4cdb63, _0x1d7893) {
  let _0x1fca5c = [];
  let _0x509b6b = '';
  _0x509b6b = _0x4cdb63 + '&' + _0x1d7893;
  _0x1fca5c = _0x509b6b["split"]('&');
  _0x1fca5c["sort"]();
  let _0x4b78b8 = '';
  for (let _0x376060 = 0; _0x376060 < _0x1fca5c["length"]; _0x376060++) {
    _0x4b78b8 += _0x1fca5c[_0x376060];
  }
  return _0x4b78b8;
}
async function _0x40c995(_0x2c2d18 = 3000) {
  return new Promise(_0x46a963 => {
    const _0x3b5e2d = {
      'url': "https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/tasks?addressBookAccessStatus=true&pushNotificationStatus=false",
      'headers': {}
    };
    _0x3b5e2d["headers"]["Accept-Encoding"] = "gzip, deflate";
    _0x3b5e2d["headers"]["Cookie"] = $["cookie"];
    _0x3b5e2d["headers"]["Connection"] = "keep-alive";
    _0x3b5e2d["headers"]["Accept"] = "*/*";
    _0x3b5e2d["headers"]["Host"] = "nebula.kuaishou.com";
    _0x3b5e2d["headers"]["Accept-Language"] = "en-us";
    _0x3b5e2d["headers"]["User-Agent"] = "Kwai-android aegon/3.4.0";
    $["get"](_0x3b5e2d, async (_0x33da1c, _0x37d1b2, _0x4ad662) => {
      try {
        _0x4ad662 = JSON["parse"](_0x4ad662);
        if (_0x4ad662["result"] == 1) {
          for (let _0x89fb8b = 0; _0x89fb8b < _0x4ad662["data"]["dailyTasks"]["length"]; _0x89fb8b++) {
            if (_0x4ad662["data"]["dailyTasks"][_0x89fb8b]['id'] == 148) {
              console["log"]("账号[" + $["nickname"] + "]任务[" + _0x4ad662["data"]["dailyTasks"][_0x89fb8b]["name"] + "]完成情况" + _0x4ad662["data"]["dailyTasks"][_0x89fb8b]["completedStages"] + '/' + _0x4ad662["data"]["dailyTasks"][_0x89fb8b]["stages"]);
              if (_0x4ad662["data"]["dailyTasks"][_0x89fb8b]["completedStages"] < _0x4ad662["data"]["dailyTasks"][_0x89fb8b]["stages"]) {
                let _0x1a96d2 = Math["round"](new Date()["getTime"]())["toString"]();
                await _0x18c617();
                if ($["lid"] != '0') {
                  let _0x369bb4 = Math["round"](new Date()["getTime"]())["toString"]();
                  await _0x449ff6(_0x1a96d2, _0x369bb4, $["lid"], "guangjie");
                }
              }
            }
            if (_0x4ad662["data"]["dailyTasks"][_0x89fb8b]['id'] == 34) {
              console["log"]("账号[" + $["nickname"] + "]任务[" + _0x4ad662["data"]["dailyTasks"][_0x89fb8b]["name"] + "]完成情况" + _0x4ad662["data"]["dailyTasks"][_0x89fb8b]["completedStages"] + '/' + _0x4ad662["data"]["dailyTasks"][_0x89fb8b]["stages"]);
              if (_0x4ad662["data"]["dailyTasks"][_0x89fb8b]["completedStages"] < _0x4ad662["data"]["dailyTasks"][_0x89fb8b]["stages"]) {
                let _0x1a96d2 = Math["round"](new Date()["getTime"]())["toString"]();
                await _0x18c617();
                if ($["lid"] != '0') {
                  let _0x369bb4 = Math["round"](new Date()["getTime"]())["toString"]();
                  await _0x4fc578(_0x1a96d2, _0x369bb4, $["lid"], "zhibo");
                }
              }
              if (_0x4ad662["data"]["dailyTasks"][_0x89fb8b]["stages"] > 10) {
              for (let _0xb35225 = 0; _0xb35225 < 2; _0xb35225++) {
              if (_0x4ad662["data"]["dailyTasks"][_0x89fb8b]["completedStages"] < _0x4ad662["data"]["dailyTasks"][_0x89fb8b]["stages"]) {
                await $["wait"](10000);
                let _0x1a96d2 = Math["round"](new Date()["getTime"]())["toString"]();
                await _0x18c617();
                if ($["lid"] != '0') {
                  let _0x369bb4 = Math["round"](new Date()["getTime"]())["toString"]();
                  await _0x4fc578(_0x1a96d2, _0x369bb4, $["lid"], "zhibo");
                }
              }
            }
          }
            }
            //_0x4ad662["data"]["dailyTasks"][_0x89fb8b]['id'] == 161 && (console["log"]("账号[" + $["nickname"] + "]任务[" + _0x4ad662["data"]["dailyTasks"][_0x89fb8b]["name"] + "]完成情况" + _0x4ad662["data"]["dailyTasks"][_0x89fb8b]["completedStages"] + '/' + _0x4ad662["data"]["dailyTasks"][_0x89fb8b]["stages"]), _0x4ad662["data"]["dailyTasks"][_0x89fb8b]["completedStages"] < _0x4ad662["data"]["dailyTasks"][_0x89fb8b]["stages"]);
          }
          _0x4ad662["data"]["nebulaGoldenAreaTask"] && _0x4ad662["data"]["nebulaGoldenAreaTask"]["linkText"] == "立即领取" && (await _0x1cf9e9());
        } else {
          console["log"]('第【' + $["index"] + "】个账号获取任务信息失败，" + _0x4ad662["error_msg"]);
        }
      } catch (_0x50ff58) {
        $["logErr"](_0x50ff58, _0x37d1b2);
      } finally {
        _0x46a963();
      }
    }, _0x2c2d18);
  });
}
async function _0xa37178(_0x56474e = 3000) {
  return new Promise(_0x176b57 => {
    const _0x5e8696 = {
      'url': "https://nebula.kuaishou.com/rest/n/nebula/sign/sign?source=activity",
      'headers': {}
    };
    _0x5e8696["headers"]["Accept-Encoding"] = "gzip, deflate";
    _0x5e8696["headers"]["Cookie"] = $["cookie"];
    _0x5e8696["headers"]["Connection"] = "keep-alive";
    _0x5e8696["headers"]["Accept"] = "*/*";
    _0x5e8696["headers"]["Host"] = "nebula.kuaishou.com";
    _0x5e8696["headers"]["Accept-Language"] = "en-us";
    _0x5e8696["headers"]["User-Agent"] = "Kwai-android aegon/3.4.0";
    $["get"](_0x5e8696, async (_0x4a6a01, _0x19c026, _0x15247a) => {
      try {
        _0x15247a = JSON["parse"](_0x15247a);
        if (_0x15247a["result"] == 1) {
          //if (_0x15247a["data"]["nebulaSignInPopup"]["todaySigned"] == true) {
            console["log"]("账号["+$["nickname"]+"]"+_0x15247a["data"]["toast"]);
            let _0x1ff4f7 = Math["round"](new Date()["getTime"]())["toString"]();
            await _0x18c617();
            if ($["lid"] != '0') {
              let _0x2945f8 = Math["round"](new Date()["getTime"]())["toString"]();
              await _0x4fc578(_0x1ff4f7, _0x2945f8, $["lid"], "168");
            }
          //}
        } else {
          console["log"]('第【' + $["index"] + "】个账号获取签到信息失败，" + _0x15247a["error_msg"]);
        }
      } catch (_0x5a81e8) {
        $["logErr"](_0x5a81e8, _0x19c026);
      } finally {
        _0x176b57();
      }
    }, _0x56474e);
  });
}
async function _0x374418() {
  if (var1) {
    var1["indexOf"]('&') != -1 ? var1["split"]('&')["forEach"](_0x3d8311 => {
      _0x3d8311 && var2["push"](('' + _0x3d8311)["replace"](/;/g, '@'));
    }) : var1["indexOf"]("\n") != -1 ? var1["split"]("\n")["forEach"](_0x56050e => {
      _0x56050e && var2["push"](('' + _0x56050e)["replace"](/;/g, '@'));
    }) : var1 && var2["push"](('' + var1)["replace"](/;/g, '@'));
  } else {
    console["log"]("\n 【" + $["name"] + "】：未填写变量 ksurl");
    return;
  }
  return true;
}
async function _0x449ff6(_0x10a0f7, _0x17dac9, _0x36189c, _0xb91417, _0x25889b = 3000) {
  let _0x12593e = '';
  let _0x4881a2 = '';
  if (_0xb91417 == "box1") {
    _0x4881a2 = "https://api.e.kuaishou.com/rest/r/ad/nebula/reward?mod=" + $["mod"] + "&appver=" + $["appver"] + "&isp=&language=zh-cn&ud=" + $['ud'] + "&did_tag=7&net=WIFI&kcv=" + $["kcv"] + "&app=0&kpf=ANDROID_PHONE&bottom_navigation=true&ver=10.1&oDid=TEST_" + $["did"] + "&android_os=1&boardPlatform=" + $["boardPlatform"] + "&kpn=NEBULA&androidApiLevel=" + $["androidApiLevel"] + "&newOc=" + $["newOc"] + "&slh=0&country_code=cn&nbh=" + $["nbh"] + "&hotfix_ver=&did_gt=" + $["did_gt"] + "&apiInvokeTiming=COLD_START&keyconfig_state=2&sys=" + $["sys"] + "&max_memory=" + $["max_memory"] + "&cold_launch_time_ms=" + $["cold_launch_time_ms"] + "&oc=" + $['oc'] + "&sh=" + $['sh'] + "&app_status=3&ddpi=480&deviceBit=0&browseType=3&power_mode=0&socName=" + $["socName"] + "&is_background=0&c=" + $['c'] + "&sw=" + $['sw'] + "&ftt=&apptype=22&is_app_prelaunch=0&abi=arm64&userRecoBit=0&device_abi=arm64&totalMemory=" + $["totalMemory"] + "&grant_browse_type=AUTHORIZED&iuid=&rdid=" + $["did"] + "&sbh=72&darkMode=false&did=" + $["did"];
    let _0xe67f46 = '';
    _0xe67f46 = "{\"creativeId\":" + random(20000001997, 22999991997) + ",\"extInfo\":\"\",\"llsid\":200" + random(1000553820678945, 8999953820679999) + ",\"taskType\":1},{\"creativeId\":" + random(20000001997, 22999991997) + ",\"extInfo\":\"\",\"llsid\":200" + random(1000553820678945, 8999953820679999) + ",\"taskType\":2},{\"creativeId\":" + random(20000001997, 22999991997) + ",\"extInfo\":\"\",\"llsid\":200" + random(1000553820678945, 8999953820679999) + ",\"taskType\":3},{\"creativeId\":" + random(20000001997, 22999991997) + ",\"extInfo\":\"\",\"llsid\":200" + random(1000553820678945, 8999953820679999) + ",\"taskType\":4},{\"creativeId\":" + random(20000001997, 22999991997) + ",\"extInfo\":\"\",\"llsid\":200" + random(1000553820678945, 8999953820679999) + ",\"taskType\":5},{\"creativeId\":" + random(20000001997, 22999991997) + ",\"extInfo\":\"\",\"llsid\":200" + random(1000553820678945, 8999953820679999) + ",\"taskType\":6},{\"creativeId\":" + random(20000001997, 22999991997) + ",\"extInfo\":\"\",\"llsid\":200" + random(1000553820678945, 8999953820679999) + ",\"taskType\":7},{\"creativeId\":" + random(20000001997, 22999991997) + ",\"extInfo\":\"\",\"llsid\":200" + random(1000553820678945, 8999953820679999) + ",\"taskType\":8},{\"creativeId\":" + random(20000001997, 22999991997) + ",\"extInfo\":\"\",\"llsid\":200" + random(1000553820678945, 8999953820679999) + ",\"taskType\":9},{\"creativeId\":" + random(20000001997, 22999991997) + ",\"extInfo\":\"\",\"llsid\":200" + random(1000553820678945, 8999953820679999) + ",\"taskType\":10}";
    _0x12593e = "bizStr={\"endTime\":" + _0x17dac9 + ",\"eventValue\":-1,\"rewardList\":[" + _0xe67f46 + "],\"startTime\":" + _0x10a0f7 + ",\"taskId\":77}";
  } else {
    if (_0xb91417 == "sign") {
      _0x4881a2 = "https://api.e.kuaishou.com/rest/r/ad/nebula/reward?mod=" + $["mod"] + "&appver=" + $["appver"] + "&isp=&language=zh-cn&ud=" + $['ud'] + "&did_tag=7&net=WIFI&kcv=" + $["kcv"] + "&app=0&kpf=ANDROID_PHONE&bottom_navigation=true&ver=10.1&oDid=TEST_" + $["did"] + "&android_os=1&boardPlatform=" + $["boardPlatform"] + "&kpn=NEBULA&androidApiLevel=" + $["androidApiLevel"] + "&newOc=" + $["newOc"] + "&slh=0&country_code=cn&nbh=" + $["nbh"] + "&hotfix_ver=&did_gt=" + $["did_gt"] + "&apiInvokeTiming=COLD_START&keyconfig_state=2&sys=" + $["sys"] + "&max_memory=" + $["max_memory"] + "&cold_launch_time_ms=" + $["cold_launch_time_ms"] + "&oc=" + $['oc'] + "&sh=" + $['sh'] + "&app_status=3&ddpi=480&deviceBit=0&browseType=3&power_mode=0&socName=" + $["socName"] + "&is_background=0&c=" + $['c'] + "&sw=" + $['sw'] + "&ftt=&apptype=22&is_app_prelaunch=0&abi=arm64&userRecoBit=0&device_abi=arm64&totalMemory=" + $["totalMemory"] + "&grant_browse_type=AUTHORIZED&iuid=&rdid=" + $["did"] + "&sbh=72&darkMode=false&did=" + $["did"];
      let _0x565bcd = '';
      _0x565bcd = "{\"creativeId\":" + random(20000001997, 22999991997) + ",\"extInfo\":\"\",\"llsid\":200" + random(1000553820678945, 8999953820679999) + ",\"taskType\":1},{\"creativeId\":" + random(20000001997, 22999991997) + ",\"extInfo\":\"\",\"llsid\":200" + random(1000553820678945, 8999953820679999) + ",\"taskType\":2},{\"creativeId\":" + random(20000001997, 22999991997) + ",\"extInfo\":\"\",\"llsid\":200" + random(1000553820678945, 8999953820679999) + ",\"taskType\":3},{\"creativeId\":" + random(20000001997, 22999991997) + ",\"extInfo\":\"\",\"llsid\":200" + random(1000553820678945, 8999953820679999) + ",\"taskType\":4},{\"creativeId\":" + random(20000001997, 22999991997) + ",\"extInfo\":\"\",\"llsid\":200" + random(1000553820678945, 8999953820679999) + ",\"taskType\":5},{\"creativeId\":" + random(20000001997, 22999991997) + ",\"extInfo\":\"\",\"llsid\":200" + random(1000553820678945, 8999953820679999) + ",\"taskType\":6},{\"creativeId\":" + random(20000001997, 22999991997) + ",\"extInfo\":\"\",\"llsid\":200" + random(1000553820678945, 8999953820679999) + ",\"taskType\":7},{\"creativeId\":" + random(20000001997, 22999991997) + ",\"extInfo\":\"\",\"llsid\":200" + random(1000553820678945, 8999953820679999) + ",\"taskType\":8},{\"creativeId\":" + random(20000001997, 22999991997) + ",\"extInfo\":\"\",\"llsid\":200" + random(1000553820678945, 8999953820679999) + ",\"taskType\":9},{\"creativeId\":" + random(20000001997, 22999991997) + ",\"extInfo\":\"\",\"llsid\":200" + random(1000553820678945, 8999953820679999) + ",\"taskType\":10}";
      _0x12593e = "bizStr={\"endTime\":" + _0x17dac9 + ",\"eventValue\":136,\"rewardList\":[" + _0x565bcd + "],\"startTime\":" + _0x10a0f7 + ",\"taskId\":-1}";
    } else {
      if (_0xb91417 == "shipin") {
        _0x4881a2 = "https://api.e.kuaishou.com/rest/r/ad/nebula/reward?mod=" + $["mod"] + "&appver=" + $["appver"] + "&isp=&language=zh-cn&ud=" + $['ud'] + "&did_tag=7&net=WIFI&kcv=" + $["kcv"] + "&app=0&kpf=ANDROID_PHONE&bottom_navigation=true&ver=10.1&oDid=TEST_" + $["did"] + "&android_os=1&boardPlatform=" + $["boardPlatform"] + "&kpn=NEBULA&androidApiLevel=" + $["androidApiLevel"] + "&newOc=" + $["newOc"] + "&slh=0&country_code=cn&nbh=" + $["nbh"] + "&hotfix_ver=&did_gt=" + $["did_gt"] + "&apiInvokeTiming=COLD_START&keyconfig_state=2&sys=" + $["sys"] + "&max_memory=" + $["max_memory"] + "&cold_launch_time_ms=" + $["cold_launch_time_ms"] + "&oc=" + $['oc'] + "&sh=" + $['sh'] + "&app_status=3&ddpi=480&deviceBit=0&browseType=3&power_mode=0&socName=" + $["socName"] + "&is_background=0&c=" + $['c'] + "&sw=" + $['sw'] + "&ftt=&apptype=22&is_app_prelaunch=0&abi=arm64&userRecoBit=0&device_abi=arm64&totalMemory=" + $["totalMemory"] + "&grant_browse_type=AUTHORIZED&iuid=&rdid=" + $["did"] + "&sbh=72&darkMode=false&did=" + $["did"];
        let _0x5491ee = '';
        _0x5491ee = "{\"creativeId\":" + random(20000001997, 22999991997) + ",\"extInfo\":\"\",\"llsid\":200" + random(1000553820678945, 8999953820679999) + ",\"taskType\":1},{\"creativeId\":" + random(20000001997, 22999991997) + ",\"extInfo\":\"\",\"llsid\":200" + random(1000553820678945, 8999953820679999) + ",\"taskType\":2},{\"creativeId\":" + random(20000001997, 22999991997) + ",\"extInfo\":\"\",\"llsid\":200" + random(1000553820678945, 8999953820679999) + ",\"taskType\":3},{\"creativeId\":" + random(20000001997, 22999991997) + ",\"extInfo\":\"\",\"llsid\":200" + random(1000553820678945, 8999953820679999) + ",\"taskType\":4},{\"creativeId\":" + random(20000001997, 22999991997) + ",\"extInfo\":\"\",\"llsid\":200" + random(1000553820678945, 8999953820679999) + ",\"taskType\":5},{\"creativeId\":" + random(20000001997, 22999991997) + ",\"extInfo\":\"\",\"llsid\":200" + random(1000553820678945, 8999953820679999) + ",\"taskType\":6},{\"creativeId\":" + random(20000001997, 22999991997) + ",\"extInfo\":\"\",\"llsid\":200" + random(1000553820678945, 8999953820679999) + ",\"taskType\":7},{\"creativeId\":" + random(20000001997, 22999991997) + ",\"extInfo\":\"\",\"llsid\":200" + random(1000553820678945, 8999953820679999) + ",\"taskType\":8},{\"creativeId\":" + random(20000001997, 22999991997) + ",\"extInfo\":\"\",\"llsid\":200" + random(1000553820678945, 8999953820679999) + ",\"taskType\":9},{\"creativeId\":" + random(20000001997, 22999991997) + ",\"extInfo\":\"\",\"llsid\":200" + random(1000553820678945, 8999953820679999) + ",\"taskType\":10}";
        _0x12593e = "bizStr={\"endTime\":" + _0x17dac9 + ",\"eventValue\":-1,\"rewardList\":[" + _0x5491ee + "],\"startTime\":" + _0x10a0f7 + ",\"taskId\":0}";
    } else {
        if (_0xb91417 == "guangjie") {
        _0x4881a2 = "https://api.e.kuaishou.com/rest/r/reward/task/getActivityReward?mod=" + $["mod"] + "&appver=" + $["appver"] + "&isp=&language=zh-cn&ud=" + $['ud'] + "&did_tag=7&net=WIFI&kcv=" + $["kcv"] + "&app=0&kpf=ANDROID_PHONE&bottom_navigation=true&ver=10.1&oDid=TEST_" + $["did"] + "&android_os=1&boardPlatform=" + $["boardPlatform"] + "&kpn=NEBULA&androidApiLevel=" + $["androidApiLevel"] + "&newOc=" + $["newOc"] + "&slh=0&country_code=cn&nbh=" + $["nbh"] + "&hotfix_ver=&did_gt=" + $["did_gt"] + "&apiInvokeTiming=COLD_START&keyconfig_state=2&sys=" + $["sys"] + "&max_memory=" + $["max_memory"] + "&cold_launch_time_ms=" + $["cold_launch_time_ms"] + "&oc=" + $['oc'] + "&sh=" + $['sh'] + "&app_status=3&ddpi=480&deviceBit=0&browseType=3&power_mode=0&socName=" + $["socName"] + "&is_background=0&c=" + $['c'] + "&sw=" + $['sw'] + "&ftt=&apptype=22&is_app_prelaunch=0&abi=arm64&userRecoBit=0&device_abi=arm64&totalMemory=" + $["totalMemory"] + "&grant_browse_type=AUTHORIZED&iuid=&rdid=" + $["did"] + "&sbh=72&darkMode=false&did=" + $["did"];
        _0x12593e = "activityId=148";
      }
    }
  }
  }
  let _0x5b124c = '';
  _0x5b124c = _0x12593e + "&cs=false&client_key=2ac2a76d&os=android&kuaishou.api_st=" + $["apist"] + "&uQaTag=2";
  let _0xd140c3 = '';
  _0xd140c3 = await getMap("mod=" + decodeURIComponent($["mod"]) + "&appver=" + $["appver"] + "&isp=&language=zh-cn&ud=" + $['ud'] + "&did_tag=7&net=WIFI&kcv=" + $["kcv"] + "&app=0&kpf=ANDROID_PHONE&bottom_navigation=true&ver=10.1&oDid=TEST_" + $["did"] + "&android_os=1&boardPlatform=" + $["boardPlatform"] + "&kpn=NEBULA&androidApiLevel=" + $["androidApiLevel"] + "&newOc=" + $["newOc"] + "&slh=0&country_code=cn&nbh=" + $["nbh"] + "&hotfix_ver=&did_gt=" + $["did_gt"] + "&apiInvokeTiming=COLD_START&keyconfig_state=2&sys=" + $["sys"] + "&max_memory=" + $["max_memory"] + "&cold_launch_time_ms=" + $["cold_launch_time_ms"] + "&oc=" + $['oc'] + "&sh=" + $['sh'] + "&app_status=3&ddpi=480&deviceBit=0&browseType=3&power_mode=0&socName=" + decodeURIComponent($["socName"]) + "&is_background=0&c=" + $['c'] + "&sw=" + $['sw'] + "&ftt=&apptype=22&is_app_prelaunch=0&abi=arm64&userRecoBit=0&device_abi=arm64&totalMemory=" + $["totalMemory"] + "&grant_browse_type=AUTHORIZED&iuid=&rdid=" + $["did"] + "&sbh=72&darkMode=false&did=" + $["did"], _0x5b124c);
  if (_0xb91417 == "guangjie") {
    $["sig3"] = '';
    await getsig(_0xd140c3, '' + $["salt"], "/rest/r/reward/task/getActivityReward");
    if ($["sig3"] == '') {
      for (let _0x403ea8 = 0; _0x403ea8 < 1; _0x403ea8++) {
        console["log"]("账号[" + $["nickname"] + "]Api[1]访问失败,开始访问Api[2]");
        await getsig2(_0xd140c3, '' + $["salt"], "/rest/r/reward/task/getActivityReward");
        if ($["sig3"] != '') {
          break;
        }
      }
    }
    if ($["sig3"] == '') {
        console["log"]("账号[" + $["nickname"] + "]Api[2]访问失败,开始访问Api[1]");
      await getsig(_0xd140c3, '' + $["salt"], "/rest/r/reward/task/getActivityReward");
      if ($["sig3"] == '') {
        for (let _0xb35225 = 0; _0xb35225 < 5; _0xb35225++) {
          console["log"]("账号[" + $["nickname"] + "]Api[1]访问失败,开始访问Api[2]");
          await $["wait"](5000);
          await getsig2(_0xd140c3, '' + $["salt"], "/rest/r/reward/task/getActivityReward");
          if ($["sig3"] != '') {
            break;
          }
        }
      }
    }
    $["sig3"] == '' && (console["log"]("请求Api失败，防止浪费奖励次数，停止运行。当前运行到第[ " + $["index"] + " ]个账号[ " + $["nickname"] + " ]"), await _0x1ae1cd("Api重试请求失败了！请联系作者。当前运行到第[ " + $["index"] + " ]个账号[ " + $["nickname"] + " ]"), process["exit"](0));
  } else {
    $["sig3"] = '';
    await getsig(_0xd140c3, '' + $["salt"], "/rest/r/ad/nebula/reward");
    if ($["sig3"] == '') {
      for (let _0x240488 = 0; _0x240488 < 1; _0x240488++) {
        console["log"]("账号[" + $["nickname"] + "]Api[1]访问失败，开始访问Api[2]");
        await getsig2(_0xd140c3, '' + $["salt"], "/rest/r/ad/nebula/reward");
        if ($["sig3"] != '') {
          break;
        }
      }
    }
    if ($["sig3"] == '') {
      console["log"]("账号[" + $["nickname"] + "]Api[2]访问失败,开始访问Api[1]");
      await getsig(_0xd140c3, '' + $["salt"], "/rest/r/ad/nebula/reward");
      if ($["sig3"] == '') {
        for (let _0x313959 = 0; _0x313959 < 5; _0x313959++) {
          console["log"]("账号[" + $["nickname"] + "]Api[1]访问失败,开始访问Api[2]");
          await $["wait"](5000);
          await getsig2(_0xd140c3, '' + $["salt"], "/rest/r/ad/nebula/reward");
          if ($["sig3"] != '') {
            break;
          }
        }
      }
    }
    $["sig3"] == '' && (console["log"]("请求Api失败，防止浪费奖励次数，停止运行。"), await _0x1ae1cd("Api重试请求失败了！请联系作者。当前运行到第[ " + $["index"] + " ]个账号[ " + $["nickname"] + " ]"), process["exit"](0));
  }
  _0x5b124c = _0x5b124c + "&sig=" + $["sig"] + "&__NS_sig3=" + $["sig3"] + "&__NStokensig=" + $["tokensig"];
  const _0x2242a0 = {
    'Host': "api.e.kuaishou.com",
    'Connection': "keep-alive",
    'User-Agent': "kwai-android aegon/3.4.2",
    'Accept-Language': "zh-cn",
    'Content-Type': "application/x-www-form-urlencoded",
    'Accept-Encoding': "gzip, deflate, br",
    'X-Client-Info': "model=" + $["modS"] + ";os=Android;nqe-score=38;;network=WIFI;signal-strength=4"
  };
  const _0x409339 = {
    'url': _0x4881a2,
    'body': _0x5b124c,
    'headers': _0x2242a0
  };
  return new Promise(_0x474287 => {
    $["post"](_0x409339, async (_0x344068, _0xcd6ccd, _0x5430ff) => {
      try {
        _0x5430ff = JSON["parse"](_0x5430ff);
       	if(_0x5430ff.result==1){
					if(_0xb91417=='box1'){
						console.log('账号['+$.nickname+']开超级翻倍宝箱获得'+_0x5430ff.data.awardAmount+'金币');
					}
          if(_0xb91417=='sign'){
						console.log('账号['+$.nickname+']看签到超级翻倍视频获得'+_0x5430ff.data.awardAmount+'金币');
					}
					if(_0xb91417=='shipin'){
					    console.log('账号['+$.nickname+']看超级翻倍广告获得'+_0x5430ff.data.awardAmount+'金币');
					}
					if(_0xb91417=='guangjie'){
					    console.log('账号['+$.nickname+']逛街获得'+_0x5430ff.data.amount+'金币');
					}
				}else console["log"]('第【' + $["index"] + "】个账号领取奖励失败，" + _0x5430ff["error_msg"]);
      } catch (_0x4048d1) {
        $["logErr"](_0x4048d1, _0xcd6ccd);
      } finally {
        _0x474287();
      }
    }, _0x25889b);
  });
}
async function _0x4fc578(_0x3b4736, _0x5ac14e, _0x53bcfb, _0x46a32e, _0x14275f = 3000) {
  let _0x421747 = '';
  _0x46a32e == "zhibo" ? _0x421747 = "bizStr={\"businessId\":75,\"endTime\":" + _0x5ac14e + ",\"extParams\":\"56dfe31594b858e69ef613f5e97227fbd5f9da00aa5144df8830a5781ae07d7cfaf4d95abc2510c950f99404a9e0bf62f5b5765a867c385685e0570ed76b858a159dacd55e41e4a9813db4e619a8b092\",\"mediaScene\":\"video\",\"neoInfos\":[{\"creativeId\":21876287785,\"extInfo\":\"\",\"llsid\":" + _0x53bcfb + ",\"taskType\":1}],\"pageId\":100012068,\"posId\":6765,\"startTime\":" + _0x3b4736 + ",\"subPageId\":100015089}" : _0x46a32e == "161-1" ? $["index"] <= $["fenge"] ? _0x421747 = "bizStr={\"businessId\":161,\"endTime\":" + _0x5ac14e + ",\"extParams\":\"56dfe31594b858e69ef613f5e97227fbd4ab96cb9fa6000119ec3d6ebf88ee730d3f30cdc1c9029a523453210de5e4922eaf1032a200b76e58f4d1ce8fbb571da3cc6b1f11f37f9adfda67b633b46692\",\"mediaScene\":\"video\",\"neoInfos\":[{\"creativeId\":" + random(20000001997, 22999991997) + ",\"extInfo\":\"\",\"llsid\":" + _0x53bcfb + ",\"taskType\":1}],\"pageId\":11101,\"posId\":4684,\"startTime\":" + _0x3b4736 + ",\"subPageId\":100013628}" : _0x421747 = "bizStr={\"businessId\":161,\"endTime\":" + _0x5ac14e + ",\"extParams\":\"56dfe31594b858e69ef613f5e97227fbd4ab96cb9fa6000119ec3d6ebf88ee730d3f30cdc1c9029a523453210de5e4922eaf1032a200b76e58f4d1ce8fbb571da3cc6b1f11f37f9adfda67b633b46692\",\"mediaScene\":\"video\",\"neoInfos\":[{\"creativeId\":" + random(20000001997, 22999991997) + ",\"extInfo\":\"\",\"llsid\":" + _0x53bcfb + ",\"taskType\":1}],\"pageId\":11101,\"posId\":4684,\"startTime\":" + _0x3b4736 + ",\"subPageId\":100013628}" : _0x46a32e == "161-2" ? $["index"] <= $["fenge"] ? _0x421747 = "bizStr={\"businessId\":161,\"endTime\":" + _0x5ac14e + ",\"extParams\":\"56dfe31594b858e69ef613f5e97227fbdcb463ff3c43b7da970d0eb459638c81047212c9a2874296c575bde17961401b04335bac733b92fbb70aa26a45b731bb95b2c94fef41d61e3650fa61b6440b32\",\"mediaScene\":\"video\",\"neoInfos\":[{\"creativeId\":" + random(20000001997, 22999991997) + ",\"extInfo\":\"\",\"llsid\":" + _0x53bcfb + ",\"taskType\":1}],\"pageId\":11101,\"posId\":4685,\"startTime\":" + _0x3b4736 + ",\"subPageId\":100013628}" : _0x421747 = "bizStr={\"businessId\":161,\"endTime\":" + _0x5ac14e + ",\"extParams\":\"56dfe31594b858e69ef613f5e97227fbe097a4a092b07f22caafe3f8a466f881c3212b59181e06f9ed9538c157c7e5b0ccffb60e02e288420598440828940ccc3abbfe580c5bf04df66eaf3e58769fd0\",\"mediaScene\":\"video\",\"neoInfos\":[{\"creativeId\":" + random(20000001997, 22999991997) + ",\"extInfo\":\"\",\"llsid\":" + _0x53bcfb + ",\"taskType\":1}],\"pageId\":11101,\"posId\":4685,\"startTime\":" + _0x3b4736 + ",\"subPageId\":100013628}" : _0x46a32e == "11-1" ? $["index"] <= $["fenge"] ? _0x421747 = "bizStr={\"businessId\":11,\"endTime\":" + _0x5ac14e + ",\"extParams\":\"56dfe31594b858e69ef613f5e97227fbdcb463ff3c43b7da970d0eb459638c81047212c9a2874296c575bde17961401b04335bac733b92fbb70aa26a45b731bb95b2c94fef41d61e3650fa61b6440b32\",\"mediaScene\":\"video\",\"neoInfos\":[{\"creativeId\":" + random(20000001997, 22999991997) + ",\"extInfo\":\"\",\"llsid\":" + _0x53bcfb + ",\"taskType\":1}],\"pageId\":11101,\"posId\":4684,\"startTime\":" + _0x3b4736 + ",\"subPageId\":100013628}" : _0x421747 = "bizStr={\"businessId\":11,\"endTime\":" + _0x5ac14e + ",\"extParams\":\"56dfe31594b858e69ef613f5e97227fbe097a4a092b07f22caafe3f8a466f881c3212b59181e06f9ed9538c157c7e5b0ccffb60e02e288420598440828940ccc3abbfe580c5bf04df66eaf3e58769fd0\",\"mediaScene\":\"video\",\"neoInfos\":[{\"creativeId\":" + random(20000001997, 22999991997) + ",\"extInfo\":\"\",\"llsid\":" + _0x53bcfb + ",\"taskType\":1}],\"pageId\":11101,\"posId\":4684,\"startTime\":" + _0x3b4736 + ",\"subPageId\":100013628}" : _0x46a32e == "11-2" ? $["index"] <= $["fenge"] ? _0x421747 = "bizStr={\"businessId\":11,\"endTime\":" + _0x5ac14e + ",\"extParams\":\"56dfe31594b858e69ef613f5e97227fbdcb463ff3c43b7da970d0eb459638c81047212c9a2874296c575bde17961401b04335bac733b92fbb70aa26a45b731bb95b2c94fef41d61e3650fa61b6440b32\",\"mediaScene\":\"video\",\"neoInfos\":[{\"creativeId\":" + random(20000001997, 22999991997) + ",\"extInfo\":\"\",\"llsid\":" + _0x53bcfb + ",\"taskType\":1}],\"pageId\":11101,\"posId\":4685,\"startTime\":" + _0x3b4736 + ",\"subPageId\":100013628}" : _0x421747 = "bizStr={\"businessId\":11,\"endTime\":" + _0x5ac14e + ",\"extParams\":\"56dfe31594b858e69ef613f5e97227fbe097a4a092b07f22caafe3f8a466f881c3212b59181e06f9ed9538c157c7e5b0ccffb60e02e288420598440828940ccc3abbfe580c5bf04df66eaf3e58769fd0\",\"mediaScene\":\"video\",\"neoInfos\":[{\"creativeId\":" + random(20000001997, 22999991997) + ",\"extInfo\":\"\",\"llsid\":" + _0x53bcfb + ",\"taskType\":1}],\"pageId\":11101,\"posId\":4685,\"startTime\":" + _0x3b4736 + ",\"subPageId\":100013628}" : _0x46a32e == "lott" ? _0x421747 = "bizStr={\"businessId\":161,\"endTime\":" + _0x5ac14e + ",\"extParams\":\"56dfe31594b858e69ef613f5e97227fbc7b4adb59060f8b57992dbd5cfdde59d19704f3df5df67acf27d0e98a7b6f0cbbe624cfa294b7d1826d8d2053b164ca92e26340e075bb546a4cab639e79e0936\",\"mediaScene\":\"video\",\"neoInfos\":[{\"creativeId\":" + random(20000001997, 22999991997) + ",\"extInfo\":\"\",\"llsid\":" + _0x53bcfb + ",\"taskType\":1}],\"pageId\":11101,\"posId\":4685,\"startTime\":" + _0x3b4736 + ",\"subPageId\":100013630}" : _0x46a32e == '20' ? _0x421747 = "bizStr={\"businessId\":161,\"endTime\":" + _0x5ac14e + ",\"extParams\":\"56dfe31594b858e69ef613f5e97227fb80029addcedc57d8114a19aceff4b5a4dbcaa81ee7101dfbc3c475fa19d1a6979c16ac3acaa082cf3690637b103bab58a4b6470802d248e78d563972c0dbc7ad\",\"mediaScene\":\"video\",\"neoInfos\":[{\"creativeId\":" + random(20000001997, 22999991997) + ",\"extInfo\":\"\",\"llsid\":" + _0x53bcfb + ",\"taskType\":1}],\"pageId\":11101,\"posId\":4684,\"startTime\":" + _0x3b4736 + ",\"subPageId\":100013629}" : _0x46a32e == "173" ? _0x421747 = "bizStr={\"businessId\":173,\"endTime\":" + _0x5ac14e + ",\"extParams\":\"0b47b6a7f33c73ffdd1c3e7c043484fa4b21c13fb34eb2e067516193e75ab04596cd862d731f3b3017ba0704cfcadb0565e64286225fd3a6b027c5d7b8bc1a098b2227dab3bf85f1949172d2e90197f3bac4409224358e690c145ec367b60d31e9eb68ca90b35e920215b1236666fbc11257625cff0dbe87461dc3f1f6d0d46c23e8c5605d10a8bc4face4221cafc77a\",\"mediaScene\":\"video\",\"neoInfos\":[{\"creativeId\":23799209984,\"extInfo\":\"\",\"llsid\":" + _0x53bcfb + ",\"taskType\":1}],\"pageId\":11101,\"posId\":5685,\"startTime\":" + _0x3b4736 + ",\"subPageId\":100014361}" : _0x421747 = "bizStr={\"businessId\":" + _0x46a32e + ",\"endTime\":" + _0x5ac14e + ",\"extParams\":\"56dfe31594b858e69ef613f5e97227fb02f1c8305a022e731b19317aa8b8f1fc4e68b5f6b346e62dade3545f285630556b0fd3c366406646a28bdd7a3889ca5b1bd5be22786fb5f8de8fc684d491e8e0\",\"mediaScene\":\"video\",\"neoInfos\":[{\"creativeId\":22587646206,\"extInfo\":\"\",\"llsid\":" + _0x53bcfb + ",\"taskType\":1}],\"pageId\":11101,\"posId\":4684,\"startTime\":" + _0x3b4736 + ",\"subPageId\":100013629}";
  let _0x36ba64 = '';
  let _0x199b21 = '';
  _0x36ba64 = _0x421747 + "&cs=false&client_key=2ac2a76d&os=android&kuaishou.api_st=" + $["apist"] + "&uQaTag=2";
  _0x199b21 = await getMap("mod=" + decodeURIComponent($["mod"]) + "&appver=" + $["appver"] + "&isp=&language=zh-cn&ud=" + $['ud'] + "&did_tag=7&net=WIFI&kcv=" + $["kcv"] + "&app=0&kpf=ANDROID_PHONE&bottom_navigation=true&ver=10.1&oDid=TEST_" + $["did"] + "&android_os=1&boardPlatform=" + $["boardPlatform"] + "&kpn=NEBULA&androidApiLevel=" + $["androidApiLevel"] + "&newOc=" + $["newOc"] + "&slh=0&country_code=cn&nbh=" + $["nbh"] + "&hotfix_ver=&did_gt=" + $["did_gt"] + "&apiInvokeTiming=COLD_START&keyconfig_state=2&sys=" + $["sys"] + "&max_memory=" + $["max_memory"] + "&cold_launch_time_ms=" + $["cold_launch_time_ms"] + "&oc=" + $['oc'] + "&sh=" + $['sh'] + "&app_status=3&ddpi=480&deviceBit=0&browseType=3&power_mode=0&socName=" + decodeURIComponent($["socName"]) + "&is_background=0&c=" + $['c'] + "&sw=" + $['sw'] + "&ftt=&apptype=22&is_app_prelaunch=0&abi=arm64&userRecoBit=0&device_abi=arm64&totalMemory=" + $["totalMemory"] + "&grant_browse_type=AUTHORIZED&iuid=&rdid=" + $["did"] + "&sbh=72&darkMode=false&did=" + $["did"], _0x36ba64);
  $["sig3"] = '';
  await getsig(_0x199b21, '' + $["salt"], "/rest/r/ad/task/report");
  if ($["sig3"] == '') {
    for (let _0x2d6e0f = 0; _0x2d6e0f < 1; _0x2d6e0f++) {
      console["log"]("账号[" + $["nickname"] + "]Api[1]访问失败,开始访问Api[2]");
      await getsig2(_0x199b21, '' + $["salt"], "/rest/r/ad/task/report");
      if ($["sig3"] != '') {
        break;
      }
    }
  }
  if ($["sig3"] == '') {
      console["log"]("账号[" + $["nickname"] + "]Api[2]访问失败,开始访问Api[1]");
    await getsig(_0x199b21, '' + $["salt"], "/rest/r/ad/task/report");
    if ($["sig3"] == '') {
      for (let _0x2515a6 = 0; _0x2515a6 < 5; _0x2515a6++) {
      console["log"]("账号[" + $["nickname"] + "]Api[1]访问失败,开始访问Api[2]");
        await $["wait"](2000);
        await getsig2(_0x199b21, '' + $["salt"], "/rest/r/ad/task/report");
        if ($["sig3"] != '') {
          break;
        }
      }
    }
  }
  $["sig3"] == '' && (console["log"]("请求Api失败，防止浪费奖励次数，停止运行。"), await _0x1ae1cd("Api重试请求失败了！请联系作者。当前运行到第[ " + $["index"] + " ]个账号[ " + $["nickname"] + " ]"), process["exit"](0));
  _0x36ba64 = _0x36ba64 + "&sig=" + $["sig"] + "&__NS_sig3=" + $["sig3"] + "&__NStokensig=" + $["tokensig"];
  const _0x570993 = {
    'url': "https://api2.e.kuaishou.com/rest/r/ad/task/report?mod=" + $["mod"] + "&appver=" + $["appver"] + "&isp=&language=zh-cn&ud=" + $['ud'] + "&did_tag=7&net=WIFI&kcv=" + $["kcv"] + "&app=0&kpf=ANDROID_PHONE&bottom_navigation=true&ver=10.1&oDid=TEST_" + $["did"] + "&android_os=1&boardPlatform=" + $["boardPlatform"] + "&kpn=NEBULA&androidApiLevel=" + $["androidApiLevel"] + "&newOc=" + $["newOc"] + "&slh=0&country_code=cn&nbh=" + $["nbh"] + "&hotfix_ver=&did_gt=" + $["did_gt"] + "&apiInvokeTiming=COLD_START&keyconfig_state=2&sys=" + $["sys"] + "&max_memory=" + $["max_memory"] + "&cold_launch_time_ms=" + $["cold_launch_time_ms"] + "&oc=" + $['oc'] + "&sh=" + $['sh'] + "&app_status=3&ddpi=480&deviceBit=0&browseType=3&power_mode=0&socName=" + $["socName"] + "&is_background=0&c=" + $['c'] + "&sw=" + $['sw'] + "&ftt=&apptype=22&is_app_prelaunch=0&abi=arm64&userRecoBit=0&device_abi=arm64&totalMemory=" + $["totalMemory"] + "&grant_browse_type=AUTHORIZED&iuid=&rdid=" + $["did"] + "&sbh=72&darkMode=false&did=" + $["did"],
    'body': _0x36ba64,
    'headers': {}
  };
  _0x570993["headers"]["Host"] = "api2.e.kuaishou.com";
  _0x570993["headers"]["Connection"] = "keep-alive";
  _0x570993["headers"]["User-Agent"] = "kwai-android aegon/3.4.2";
  _0x570993["headers"]["Accept-Language"] = "zh-cn";
  _0x570993["headers"]["Content-Type"] = "application/x-www-form-urlencoded";
  _0x570993["headers"]["Accept-Encoding"] = "gzip, deflate, br";
  _0x570993["headers"]["X-Client-Info"] = "model=" + $["modS"] + ";os=Android;nqe-score=38;;network=WIFI;signal-strength=4";
  return new Promise(_0xfb860c => {
    $["post"](_0x570993, async (_0x1ad431, _0x35c3d1, _0x278225) => {
      try {
        _0x278225 = JSON["parse"](_0x278225);
        	if(_0x278225.result==1){
					if(_0x46a32e=='259'){
						console.log('账号['+$.nickname+']看259-100视频直播获得'+_0x278225.data.neoAmount+'金币');
					}if(_0x46a32e=='168'){
						console.log('账号['+$.nickname+']看翻倍签到2视频获得'+_0x278225.data.neoAmount+'金币');
					}if(_0x46a32e=='zhibo'){
						console.log('账号['+$.nickname+']看直播获得'+_0x278225.data.neoAmount+'金币');
					}
        }else {
          if(_0x46a32e=='259'){
						console.log('账号['+$.nickname+']看259-100视频直播失败:'+_0x278225["error_msg"]);
					}if(_0x46a32e=='168'){
						console.log('账号['+$.nickname+']看翻倍签到2视频失败:'+_0x278225["error_msg"]);
					}if(_0x46a32e=='zhibo'){
						console.log('账号['+$.nickname+']看直播失败:'+_0x278225["error_msg"]);
					}
        }
      } catch (_0xcfeb12) {
        $["logErr"](_0xcfeb12, _0x35c3d1);
      } finally {
        _0xfb860c();
      }
    }, _0x14275f);
  });
}
async function getsig(data, client_salt, path, _0x2afecd = 3 * 1000) {
    return new Promise(_0x2a03db => {
        let _0xaa862b = {
            'url': 'http://192.168.2.3:9002/ks/getSig',
            'headers': {"Content-Type": "application/json"},
            'body': JSON.stringify({'body': data, 'client_salt': client_salt, 'url': path, 'kstoken': '1'})
        };
        $.post(_0xaa862b, async (k, info, rsp) => {
            try {
                rsp = JSON.parse(rsp)
                if (rsp.code == 200) {
                    if (rsp.data.sig) {
                        $.sig = rsp.data.sig;
                        $.sig3 = rsp.data.sig3;
                        $.tokensig = rsp.data.tokensig;
                    }
                } else {
                }
            } catch (_0x2c6048) {
                $.logErr(_0x2c6048, info);
            } finally {
                _0x2a03db();
            }
        }, _0x2afecd);
    });
}
async function getsig2(data, client_salt, path, _0x2afecd = 3 * 1000) {
    return new Promise(_0x2a03db => {
        let _0xaa862b = {
            'url': 'http://192.168.2.3:9002/ks/getSig',
            'headers': {"Content-Type": "application/json"},
            'body': JSON.stringify({'body': data, 'client_salt': client_salt, 'url': path, 'kstoken': '1'})
        };
        $.post(_0xaa862b, async (k, info, rsp) => {
            try {
                rsp = JSON.parse(rsp)
                if (rsp.code == 200) {
                    if (rsp.data.sig) {
                        $.sig = rsp.data.sig;
                        $.sig3 = rsp.data.sig3;
                        $.tokensig = rsp.data.tokensig;
                    }
                } else {
                }
            } catch (_0x2c6048) {
                $.logErr(_0x2c6048, info);
            } finally {
                _0x2a03db();
            }
        }, _0x2afecd);
    });
}
async function _0x1cf9e9(_0x2f1952 = 3000) {
  return new Promise(_0x33860f => {
    const _0x2a8445 = {
      'url': "https://nebula.kuaishou.com/rest/n/nebula/cashSign/goldenAreaTaskSignIn",
      'headers': {}
    };
    _0x2a8445["headers"]["Accept-Encoding"] = "gzip, deflate";
    _0x2a8445["headers"]["Cookie"] = $["cookie"];
    _0x2a8445["headers"]["Connection"] = "keep-alive";
    _0x2a8445["headers"]["Accept"] = "*/*";
    _0x2a8445["headers"]["Host"] = "nebula.kuaishou.com";
    _0x2a8445["headers"]["Accept-Language"] = "en-us";
    _0x2a8445["headers"]["User-Agent"] = "Kwai-android aegon/3.4.0";
    $["get"](_0x2a8445, async (_0x37ed62, _0x54c3ab, _0xe1f996) => {
      try {
        _0xe1f996 = JSON["parse"](_0xe1f996);
        console["log"](_0xe1f996);
        !(_0xe1f996["result"] == 1) && console["log"]('第【' + $["index"] + "】个账号获取签到信息失败，" + _0xe1f996["error_msg"]);
      } catch (_0x52e691) {
        $["logErr"](_0x52e691, _0x54c3ab);
      } finally {
        _0x33860f();
      }
    }, _0x2f1952);
  });
}
async function _0x18c617(_0x3f61bb = 3000) {
  return new Promise(_0x13ea24 => {
    let _0x17450d = {
      'url': "https://api.e.kuaishou.com/rest/e/v1/reward/ad?kpf=ANDROID_PHONE&kpn=NEBULA",
      'body': '' + $["enc"],
      'headers': {
        'Accept-Encoding': "gzip, deflate",
        'Connection': "keep-alive",
        'Accept': "*/*",
        'Accept-Language': "en-us",
        'User-Agent': "Kwai-android aegon/3.4.0"
      }
    };
    $["post"](_0x17450d, async (_0x15601e, _0x2c64a0, _0x4fc0cf) => {
      try {
        _0x4fc0cf = JSON["parse"](_0x4fc0cf);
        _0x4fc0cf["result"] == 1 && _0x4fc0cf["llsid"] ? $["lid"] = _0x4fc0cf["llsid"] : $["lid"] = '0';
        $["lid"] = "200" + random(1000553820678945, 8999953820679999);
        let _0xbafafc = random(3, 5);
        await $["wait"](_0xbafafc * 1000);
      } catch (_0x56a329) {
        $["logErr"](_0x56a329, _0x2c64a0);
      } finally {
        _0x13ea24();
      }
    }, _0x3f61bb);
  });
}
async function _0x1ae1cd(_0x1518b4) {
  if (!_0x1518b4) {
    return;
  }
  if ($["isNode"]()) {
    var _0x520f94 = require("./sendNotify");
    await _0x520f94["sendNotify"]($["name"], _0x1518b4);
  } else {
    $["msg"](_0x1518b4);
  }
}
function random(_0x576d20, _0x3857bc) {
  return Math["round"](Math["random"]() * _0x3857bc - _0x576d20 + _0x576d20);
}
async function _0x3868a8(_0x265ce0) {
  let _0x391b45 = Buffer["from"](_0x265ce0, "base64")["toString"]();
  return _0x391b45;
}
function Env(_0x1105a1, _0x517c40) {
  "undefined" != typeof process && JSON["stringify"](process["env"])["indexOf"]("GITHUB") > -1 && process["exit"](0);
  class _0x23e316 {
    constructor(_0x566658) {
      this["env"] = _0x566658;
    }
    ["send"](_0x4a698d, _0x4f2ddf = "GET") {
      _0x4a698d = "string" == typeof _0x4a698d ? {
        'url': _0x4a698d
      } : _0x4a698d;
      let _0x271cfc = this["get"];
      "POST" === _0x4f2ddf && (_0x271cfc = this["post"]);
      return new Promise((_0x118d65, _0x47f39d) => {
        _0x271cfc["call"](this, _0x4a698d, (_0x5bd5d7, _0x2369d4, _0x2e50f8) => {
          _0x5bd5d7 ? _0x47f39d(_0x5bd5d7) : _0x118d65(_0x2369d4);
        });
      });
    }
    ["get"](_0x384f47) {
      return this["send"]["call"](this["env"], _0x384f47);
    }
    ["post"](_0x4d4aa2) {
      return this["send"]["call"](this["env"], _0x4d4aa2, "POST");
    }
  }
  return new class {
    constructor(_0x2a3532, _0x4ec44f) {
      this["name"] = _0x2a3532;
      this["http"] = new _0x23e316(this);
      this["data"] = null;
      this["dataFile"] = "box.dat";
      this["logs"] = [];
      this["isMute"] = false;
      this["isNeedRewrite"] = false;
      this["logSeparator"] = "\n";
      this["startTime"] = new Date()["getTime"]();
      Object["assign"](this, _0x4ec44f);
      this["log"]('', '??' + this["name"] + ", 开始!");
    }
    ["isNode"]() {
      return "undefined" != typeof module && !!module["exports"];
    }
    ["isQuanX"]() {
      return "undefined" != typeof $task;
    }
    ["isSurge"]() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    ["isLoon"]() {
      return "undefined" != typeof $loon;
    }
    ["toObj"](_0x4d96a6, _0x221c9f = null) {
      try {
        return JSON["parse"](_0x4d96a6);
      } catch {
        return _0x221c9f;
      }
    }
    ["toStr"](_0x52c419, _0x3c351e = null) {
      try {
        return JSON["stringify"](_0x52c419);
      } catch {
        return _0x3c351e;
      }
    }
    ["getjson"](_0x51bfa5, _0x21b1e8) {
      let _0x104573 = _0x21b1e8;
      const _0x590687 = this["getdata"](_0x51bfa5);
      if (_0x590687) {
        try {
          _0x104573 = JSON["parse"](this["getdata"](_0x51bfa5));
        } catch {}
      }
      return _0x104573;
    }
    ["setjson"](_0x211530, _0x5a51c1) {
      try {
        return this["setdata"](JSON["stringify"](_0x211530), _0x5a51c1);
      } catch {
        return false;
      }
    }
    ["getScript"](_0x142360) {
      return new Promise(_0x5356e3 => {
        const _0x2c7015 = {
          'url': _0x142360
        };
        this["get"](_0x2c7015, (_0x47ff9c, _0x15eeb4, _0x1d5bde) => _0x5356e3(_0x1d5bde));
      });
    }
    ["runScript"](_0xf70c34, _0x515473) {
      return new Promise(_0x1bd654 => {
        let _0x998a2a = this["getdata"]("@chavy_boxjs_userCfgs.httpapi");
        _0x998a2a = _0x998a2a ? _0x998a2a["replace"](/\n/g, '')["trim"]() : _0x998a2a;
        let _0x59e45f = this["getdata"]("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x59e45f = _0x59e45f ? 1 * _0x59e45f : 20;
        _0x59e45f = _0x515473 && _0x515473["timeout"] ? _0x515473["timeout"] : _0x59e45f;
        const _0x41e8f7 = {
          'script_text': _0xf70c34,
          'mock_type': "cron",
          'timeout': _0x59e45f
        };
        const [_0x3fadfb, _0x1d3d3c] = _0x998a2a["split"]('@');
        const _0x1558ca = {
          'url': "http://" + _0x1d3d3c + "/v1/scripting/evaluate",
          'body': _0x41e8f7,
          'headers': {
            'X-Key': _0x3fadfb,
            'Accept': "*/*"
          }
        };
        this["post"](_0x1558ca, (_0x41c866, _0x5a33a9, _0x2d0e06) => _0x1bd654(_0x2d0e06));
      })["catch"](_0x22e9d5 => this["logErr"](_0x22e9d5));
    }
    ["loaddata"]() {
      if (!this["isNode"]()) {
        return {};
      }
      {
        this['fs'] = this['fs'] ? this['fs'] : require('fs');
        this["path"] = this["path"] ? this["path"] : require("path");
        const _0x435384 = this["path"]["resolve"](this["dataFile"]);
        const _0x63d149 = this["path"]["resolve"](process["cwd"](), this["dataFile"]);
        const _0x1ef129 = this['fs']["existsSync"](_0x435384);
        const _0x34cd78 = !_0x1ef129 && this['fs']["existsSync"](_0x63d149);
        if (!_0x1ef129 && !_0x34cd78) {
          return {};
        }
        {
          const _0x318fef = _0x1ef129 ? _0x435384 : _0x63d149;
          try {
            return JSON["parse"](this['fs']["readFileSync"](_0x318fef));
          } catch (_0x392525) {
            return {};
          }
        }
      }
    }
    ["writedata"]() {
      if (this["isNode"]()) {
        this['fs'] = this['fs'] ? this['fs'] : require('fs');
        this["path"] = this["path"] ? this["path"] : require("path");
        const _0x2baacb = this["path"]["resolve"](this["dataFile"]);
        const _0x1e4f9a = this["path"]["resolve"](process["cwd"](), this["dataFile"]);
        const _0x2a6cd7 = this['fs']["existsSync"](_0x2baacb);
        const _0x21fc2b = !_0x2a6cd7 && this['fs']["existsSync"](_0x1e4f9a);
        const _0x41ac16 = JSON["stringify"](this["data"]);
        _0x2a6cd7 ? this['fs']["writeFileSync"](_0x2baacb, _0x41ac16) : _0x21fc2b ? this['fs']["writeFileSync"](_0x1e4f9a, _0x41ac16) : this['fs']["writeFileSync"](_0x2baacb, _0x41ac16);
      }
    }
    ["lodash_get"](_0x17ceff, _0x3330d4, _0x2bf6ad) {
      const _0x3d5b6e = _0x3330d4["replace"](/\[(\d+)\]/g, ".$1")["split"]('.');
      let _0x17c0e9 = _0x17ceff;
      for (const _0x413596 of _0x3d5b6e) if (_0x17c0e9 = Object(_0x17c0e9)[_0x413596], void 0 === _0x17c0e9) {
        return _0x2bf6ad;
      }
      return _0x17c0e9;
    }
    ["lodash_set"](_0x19b1fc, _0x507c95, _0x16af50) {
      return Object(_0x19b1fc) !== _0x19b1fc ? _0x19b1fc : (Array["isArray"](_0x507c95) || (_0x507c95 = _0x507c95["toString"]()["match"](/[^.[\]]+/g) || []), _0x507c95["slice"](0, -1)["reduce"]((_0x34decd, _0x528fb8, _0x1d2a31) => Object(_0x34decd[_0x528fb8]) === _0x34decd[_0x528fb8] ? _0x34decd[_0x528fb8] : _0x34decd[_0x528fb8] = Math["abs"](_0x507c95[_0x1d2a31 + 1]) >> 0 == +_0x507c95[_0x1d2a31 + 1] ? [] : {}, _0x19b1fc)[_0x507c95[_0x507c95["length"] - 1]] = _0x16af50, _0x19b1fc);
    }
    ["getdata"](_0x59aedd) {
      let _0x215be4 = this["getval"](_0x59aedd);
      if (/^@/["test"](_0x59aedd)) {
        const [, _0x5db5d4, _0x44dc95] = /^@(.*?)\.(.*?)$/["exec"](_0x59aedd);
        const _0x907b99 = _0x5db5d4 ? this["getval"](_0x5db5d4) : '';
        if (_0x907b99) {
          try {
            const _0x231dc4 = JSON["parse"](_0x907b99);
            _0x215be4 = _0x231dc4 ? this["lodash_get"](_0x231dc4, _0x44dc95, '') : _0x215be4;
          } catch (_0x288222) {
            _0x215be4 = '';
          }
        }
      }
      return _0x215be4;
    }
    ["setdata"](_0x1fd032, _0x3fe9fa) {
      let _0x2890e0 = false;
      if (/^@/["test"](_0x3fe9fa)) {
        const [, _0x38398c, _0x30bcf7] = /^@(.*?)\.(.*?)$/["exec"](_0x3fe9fa);
        const _0xca8005 = this["getval"](_0x38398c);
        const _0xbe774a = _0x38398c ? "null" === _0xca8005 ? null : _0xca8005 || '{}' : '{}';
        try {
          const _0x128b2f = JSON["parse"](_0xbe774a);
          this["lodash_set"](_0x128b2f, _0x30bcf7, _0x1fd032);
          _0x2890e0 = this["setval"](JSON["stringify"](_0x128b2f), _0x38398c);
        } catch (_0x252973) {
          const _0x4df346 = {};
          this["lodash_set"](_0x4df346, _0x30bcf7, _0x1fd032);
          _0x2890e0 = this["setval"](JSON["stringify"](_0x4df346), _0x38398c);
        }
      } else {
        _0x2890e0 = this["setval"](_0x1fd032, _0x3fe9fa);
      }
      return _0x2890e0;
    }
    ["getval"](_0x5e4a4e) {
      return this["isSurge"]() || this["isLoon"]() ? $persistentStore["read"](_0x5e4a4e) : this["isQuanX"]() ? $prefs["valueForKey"](_0x5e4a4e) : this["isNode"]() ? (this["data"] = this["loaddata"](), this["data"][_0x5e4a4e]) : this["data"] && this["data"][_0x5e4a4e] || null;
    }
    ["setval"](_0xee9096, _0x4bf552) {
      return this["isSurge"]() || this["isLoon"]() ? $persistentStore["write"](_0xee9096, _0x4bf552) : this["isQuanX"]() ? $prefs["setValueForKey"](_0xee9096, _0x4bf552) : this["isNode"]() ? (this["data"] = this["loaddata"](), this["data"][_0x4bf552] = _0xee9096, this["writedata"](), true) : this["data"] && this["data"][_0x4bf552] || null;
    }
    ["initGotEnv"](_0x503661) {
      this["got"] = this["got"] ? this["got"] : require("got");
      this["cktough"] = this["cktough"] ? this["cktough"] : require("tough-cookie");
      this["ckjar"] = this["ckjar"] ? this["ckjar"] : new this["cktough"]["CookieJar"]();
      _0x503661 && (_0x503661["headers"] = _0x503661["headers"] ? _0x503661["headers"] : {}, void 0 === _0x503661["headers"]["Cookie"] && void 0 === _0x503661["cookieJar"] && (_0x503661["cookieJar"] = this["ckjar"]));
    }
    ["get"](_0x5a4cc5, _0x1469b1 = () => {}) {
      const _0x34d7d0 = {
        'X-Surge-Skip-Scripting': false
      };
      const _0x2218fa = {
        'hints': false
      };
      _0x5a4cc5["headers"] && (delete _0x5a4cc5["headers"]["Content-Type"], delete _0x5a4cc5["headers"]["Content-Length"]);
      this["isSurge"]() || this["isLoon"]() ? (this["isSurge"]() && this["isNeedRewrite"] && (_0x5a4cc5["headers"] = _0x5a4cc5["headers"] || {}, Object["assign"](_0x5a4cc5["headers"], _0x34d7d0)), $httpClient["get"](_0x5a4cc5, (_0x2c12df, _0x31c2d6, _0x41b3d3) => {
        !_0x2c12df && _0x31c2d6 && (_0x31c2d6["body"] = _0x41b3d3, _0x31c2d6["statusCode"] = _0x31c2d6["status"]);
        _0x1469b1(_0x2c12df, _0x31c2d6, _0x41b3d3);
      })) : this["isQuanX"]() ? (this["isNeedRewrite"] && (_0x5a4cc5["opts"] = _0x5a4cc5["opts"] || {}, Object["assign"](_0x5a4cc5["opts"], _0x2218fa)), $task["fetch"](_0x5a4cc5)["then"](_0x55a34d => {
        const {
          'statusCode': _0x3edb1c,
          'statusCode': _0x5ac3e4,
          'headers': _0x33ef5e,
          'body': _0x3d5fd4
        } = _0x55a34d;
        const _0x557dfd = {
          'status': _0x3edb1c,
          'statusCode': _0x5ac3e4,
          'headers': _0x33ef5e,
          'body': _0x3d5fd4
        };
        _0x1469b1(null, _0x557dfd, _0x3d5fd4);
      }, _0xbae66a => _0x1469b1(_0xbae66a))) : this["isNode"]() && (this["initGotEnv"](_0x5a4cc5), this["got"](_0x5a4cc5)['on']("redirect", (_0x5a7781, _0x32a6a8) => {
        try {
          if (_0x5a7781["headers"]["set-cookie"]) {
            const _0x242916 = _0x5a7781["headers"]["set-cookie"]["map"](this["cktough"]["Cookie"]["parse"])["toString"]();
            _0x242916 && this["ckjar"]["setCookieSync"](_0x242916, null);
            _0x32a6a8["cookieJar"] = this["ckjar"];
          }
        } catch (_0x4df5bd) {
          this["logErr"](_0x4df5bd);
        }
      })["then"](_0x1ac826 => {
        const {
          'statusCode': _0xffe04c,
          'statusCode': _0x2ffc4a,
          'headers': _0x4df9e8,
          'body': _0x102a97
        } = _0x1ac826;
        const _0x24afb1 = {
          'status': _0xffe04c,
          'statusCode': _0x2ffc4a,
          'headers': _0x4df9e8,
          'body': _0x102a97
        };
        _0x1469b1(null, _0x24afb1, _0x102a97);
      }, _0x13e23a => {
        const {
          'message': _0x5133ea,
          'response': _0x50eeb2
        } = _0x13e23a;
        _0x1469b1(_0x5133ea, _0x50eeb2, _0x50eeb2 && _0x50eeb2["body"]);
      }));
    }
    ["post"](_0x1584eb, _0x568352 = () => {}) {
      const _0xbf6f21 = {
        'X-Surge-Skip-Scripting': false
      };
      const _0x3a8d0e = {
        'hints': false
      };
      if (_0x1584eb["body"] && _0x1584eb["headers"] && !_0x1584eb["headers"]["Content-Type"] && (_0x1584eb["headers"]["Content-Type"] = "application/x-www-form-urlencoded"), _0x1584eb["headers"] && delete _0x1584eb["headers"]["Content-Length"], this["isSurge"]() || this["isLoon"]()) {
        this["isSurge"]() && this["isNeedRewrite"] && (_0x1584eb["headers"] = _0x1584eb["headers"] || {}, Object["assign"](_0x1584eb["headers"], _0xbf6f21));
        $httpClient["post"](_0x1584eb, (_0x2b3a23, _0x27a8a2, _0x294659) => {
          !_0x2b3a23 && _0x27a8a2 && (_0x27a8a2["body"] = _0x294659, _0x27a8a2["statusCode"] = _0x27a8a2["status"]);
          _0x568352(_0x2b3a23, _0x27a8a2, _0x294659);
        });
      } else {
        if (this["isQuanX"]()) {
          _0x1584eb["method"] = "POST";
          this["isNeedRewrite"] && (_0x1584eb["opts"] = _0x1584eb["opts"] || {}, Object["assign"](_0x1584eb["opts"], _0x3a8d0e));
          $task["fetch"](_0x1584eb)["then"](_0xdb2190 => {
            const {
              'statusCode': _0x391c82,
              'statusCode': _0x1bc4f2,
              'headers': _0x3fa0c2,
              'body': _0x358bd0
            } = _0xdb2190;
            const _0x4a05e9 = {
              'status': _0x391c82,
              'statusCode': _0x1bc4f2,
              'headers': _0x3fa0c2,
              'body': _0x358bd0
            };
            _0x568352(null, _0x4a05e9, _0x358bd0);
          }, _0x412065 => _0x568352(_0x412065));
        } else {
          if (this["isNode"]()) {
            this["initGotEnv"](_0x1584eb);
            const {
              'url': _0x18dc01,
              ..._0x560d23
            } = _0x1584eb;
            this["got"]["post"](_0x18dc01, _0x560d23)["then"](_0x3eb6ed => {
              const {
                'statusCode': _0x20e456,
                'statusCode': _0x37bfbd,
                'headers': _0x16db4,
                'body': _0x459db5
              } = _0x3eb6ed;
              const _0x80f9ab = {
                'status': _0x20e456,
                'statusCode': _0x37bfbd,
                'headers': _0x16db4,
                'body': _0x459db5
              };
              _0x568352(null, _0x80f9ab, _0x459db5);
            }, _0x2a5ed7 => {
              const {
                'message': _0x510f73,
                'response': _0x42b8fc
              } = _0x2a5ed7;
              _0x568352(_0x510f73, _0x42b8fc, _0x42b8fc && _0x42b8fc["body"]);
            });
          }
        }
      }
    }
    ["time"](_0x356c61, _0x293b07 = null) {
      const _0x173caa = _0x293b07 ? new Date(_0x293b07) : new Date();
      let _0xb33977 = {
        'M+': _0x173caa["getMonth"]() + 1,
        'd+': _0x173caa["getDate"](),
        'H+': _0x173caa["getHours"](),
        'm+': _0x173caa["getMinutes"](),
        's+': _0x173caa["getSeconds"](),
        'q+': Math["floor"]((_0x173caa["getMonth"]() + 3) / 3),
        'S': _0x173caa["getMilliseconds"]()
      };
      /(y+)/["test"](_0x356c61) && (_0x356c61 = _0x356c61["replace"](RegExp['$1'], (_0x173caa["getFullYear"]() + '')["substr"](4 - RegExp['$1']["length"])));
      for (let _0x1478e0 in _0xb33977) new RegExp('(' + _0x1478e0 + ')')["test"](_0x356c61) && (_0x356c61 = _0x356c61["replace"](RegExp['$1'], 1 == RegExp['$1']["length"] ? _0xb33977[_0x1478e0] : ('00' + _0xb33977[_0x1478e0])["substr"](('' + _0xb33977[_0x1478e0])["length"])));
      return _0x356c61;
    }
    ["msg"](_0x2ab862 = _0x1105a1, _0x36d6d7 = '', _0x19a8be = '', _0x3e3681) {
      const _0x16e739 = _0x5e7891 => {
        if (!_0x5e7891) {
          return _0x5e7891;
        }
        if ("string" == typeof _0x5e7891) {
          return this["isLoon"]() ? _0x5e7891 : this["isQuanX"]() ? {
            'open-url': _0x5e7891
          } : this["isSurge"]() ? {
            'url': _0x5e7891
          } : void 0;
        }
        if ("object" == typeof _0x5e7891) {
          if (this["isLoon"]()) {
            let _0x4439b3 = _0x5e7891["openUrl"] || _0x5e7891["url"] || _0x5e7891["open-url"];
            let _0x4437f2 = _0x5e7891["mediaUrl"] || _0x5e7891["media-url"];
            const _0x23b19a = {
              'openUrl': _0x4439b3,
              'mediaUrl': _0x4437f2
            };
            return _0x23b19a;
          }
          if (this["isQuanX"]()) {
            let _0x1acabd = _0x5e7891["open-url"] || _0x5e7891["url"] || _0x5e7891["openUrl"];
            let _0x4e086c = _0x5e7891["media-url"] || _0x5e7891["mediaUrl"];
            const _0x5b0885 = {
              'open-url': _0x1acabd,
              'media-url': _0x4e086c
            };
            return _0x5b0885;
          }
          if (this["isSurge"]()) {
            let _0x522661 = _0x5e7891["url"] || _0x5e7891["openUrl"] || _0x5e7891["open-url"];
            const _0x2a1ac8 = {
              'url': _0x522661
            };
            return _0x2a1ac8;
          }
        }
      };
      if (this["isMute"] || (this["isSurge"]() || this["isLoon"]() ? $notification["post"](_0x2ab862, _0x36d6d7, _0x19a8be, _0x16e739(_0x3e3681)) : this["isQuanX"]() && $notify(_0x2ab862, _0x36d6d7, _0x19a8be, _0x16e739(_0x3e3681))), !this["isMuteLog"]) {
        let _0x59e04d = ['', "==============??系统通知??=============="];
        _0x59e04d["push"](_0x2ab862);
        _0x36d6d7 && _0x59e04d["push"](_0x36d6d7);
        _0x19a8be && _0x59e04d["push"](_0x19a8be);
        console["log"](_0x59e04d["join"]("\n"));
        this["logs"] = this["logs"]["concat"](_0x59e04d);
      }
    }
    ["log"](..._0x26dd6d) {
      _0x26dd6d["length"] > 0 && (this["logs"] = [...this["logs"], ..._0x26dd6d]);
      console["log"](_0x26dd6d["join"](this["logSeparator"]));
    }
    ["logErr"](_0x2a3dd0, _0x2081bb) {
      const _0x2a49c2 = !this["isSurge"]() && !this["isQuanX"]() && !this["isLoon"]();
      _0x2a49c2 ? this["log"]('', '??' + this["name"] + ", 错误!", _0x2a3dd0["stack"]) : this["log"]('', '??' + this["name"] + ", 错误!", _0x2a3dd0);
    }
    ["wait"](_0x5aa12c) {
      return new Promise(_0x1a6957 => setTimeout(_0x1a6957, _0x5aa12c));
    }
    ["done"](_0x13642c = {}) {
      const _0x3968a9 = new Date()["getTime"]();
      const _0x53e563 = (_0x3968a9 - this["startTime"]) / 1000;
      this["log"]('', '??' + this["name"] + ", 结束! ?? " + _0x53e563 + " 秒");
      this["log"]();
      (this["isSurge"]() || this["isQuanX"]() || this["isLoon"]()) && $done(_0x13642c);
    }
  }(_0x1105a1, _0x517c40);
}