class Rotation {
  static version = 2;
  static charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".repeat(5).split("");
  static randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  static randchar(size) {
    const rot = Rotation;
    return new Array(size).fill(0).map(i => {
      return rot.charset[rot.randint(0, rot.charset.length - 1)];
    }).join("");
  }
  static randarr(max) {
    return new Array(Rotation.randint(1, max)).fill(0);
  }
  static createAndroid({ mozilla, android, webkit, version, chromium, safari, model, build } = {}) {
    const rot = Rotation;
    const moz = mozilla || rot.randint(3, 5);
    const andr = android || rot.randint(10, 13);
    const wk = webkit || rot.randarr(2).map(_ => rot.randint(100, 999)).join(".");
    const ver = version || rot.randint(3, 5);
    const chr = chromium || rot.randarr(4).map(_ => rot.randint(0, 9999)).join(".");
    const f = safari || rot.randarr(2).map(_ => rot.randint(10, 700)).join(".");
    const mod = model || rot.randchar(3) + rot.randint(1000, 9999);
    const b = build || rot.randchar(2) + rot.randarr(2).map(_ => rot.randint(1000, 9999)).join(".");
    return {
      type: "android",
      useragent: `Mozilla/${moz}.0 (Linux; Android ${andr}; ${mod} Build/${b}) AppleWebKit/${wk} (KHTML, like Gecko) Version/${ver}.0 Chrome/${chr} Mobile Safari/${f}`
    }
  }
  static createSamsung(a = {}) {
    let args = new Object(a);
    const rot = Rotation;
    args.model = args.model || "SM-" + rot.randchar(1) + rot.randint(100, 999) + rot.randchar(1);
    let andr = Rotation.createAndroid(args);
    andr.type = "samsung";
    return andr;
  }
  static createGooglePixel(a = {}) {
    let args = new Object(a);
    const rot = Rotation;
    const ispro = a.ispro || rot.randint(0, 1) == 1;
    const isa = ispro && rot.randint(0, 1) == 1 && a.ispro == null;
    const mod = conf.model || rot.randint(5, 10);
    args.model = `Pixel ${mod}${isa ? "a" : ""} ${ispro ? "Pro" : ""}`;
    let andr = Rotation.createAndroid(args);
    andr.type = "googlepixel";
    return andr;
  }
  static createMotorola(conf = {}, a = {}) {
    let args = new Object(a);
    const rot = Rotation;
    const model = ["moto g pure", "moto g stylus", "moto g stylus 5g", "moto g 5g", "moto g power"];
    const year = rot.randint(0, 1) == 1 ? !1 : rot.randint(2010, 2024);
    args.model = (conf.model || model[rot.randint(0, model.length - 1)]) + (year ? ` (${year})` : "");
    let andr = Rotation.createAndroid(args);
    andr.type = "motorola";
    return andr;
  }
  static createIphone({ mozilla, ipversion, webkit, version, os, safari, cpu } = {}) {
    const rot = Rotation;
    const moz = mozilla || rot.randint(3, 5);
    const ver = version || rot.randint(3, 5);
    const ipv = ipversion || (rot.randint(0, 1) == 1 ? rot.randint(10, 15) : null);
    const wk = webkit || rot.randarr(2).map(_ => rot.randint(100, 999)).join(".");
    const osc = cpu || rot.randint(10, 15) + "_" + rot.randint(0, 9);
    const f = safari || rot.randarr(2).map(_ => rot.randint(10, 700)).join(".");
    const platf = ["CriOS", "FxiOs"];
    const osys = os || platf[rot.randint(0, platf.length - 1)] + "/" + rot.randarr(2).map(_ => rot.randint(0, 999)).join(".");
    return {
      type: "iphone",
      useragent: `Mozilla/${moz}.0 (iPhone${ipv || ""}; U; CPU iphone OS${osc} like Mac OS X) AppleWebKit/${wk} (KHTML, like Gecko) Version/${ver}.0 ${osys} Mobile Safari/${f}`
    }
  }
  static createMSLumia({ mozilla, chromium, webkit, safari, windows, android, model, edge } = {}) {
    const rot = Rotation;
    const moz = mozilla || rot.randint(3, 5);
    const wk = webkit || rot.randarr(2).map(_ => rot.randint(100, 999)).join(".");
    const f = safari || rot.randarr(2).map(_ => rot.randint(10, 700)).join(".");
    const chr = chromium || rot.randarr(4).map(_ => rot.randint(0, 9999)).join(".");
    const win = windows || rot.randint(10, 15);
    const andr = android || rot.randint(10, 13);
    const mod = model || rot.randchar(2) + "-" + rot.randint(1000, 9999);
    const edg = edge || rot.randarr(4).map(_ => rot.randint(100, 999)).join(".");
    return {
      type: "mslumia",
      useragent: `Mozilla/${moz}.0 (Windows Phone ${win}.0; Android ${andr}; Microsoft; ${mod}) AppleWebKit/${wk} (KHTML, like Gecko) Chrome/${chr} Mobile Safari/${f} Edge/${edg}`
    }
  }
  static createIpad({ mozilla, os, webkit, version, safari } = {}) {
    const rot = Rotation;
    const moz = mozilla || rot.randint(3, 5);
    const wk = webkit || rot.randarr(2).map(_ => rot.randint(100, 999)).join(".");
    const f = safari || rot.randarr(2).map(_ => rot.randint(10, 700)).join(".");
    const ver = version || rot.randint(10, 99);
    const osys = os || rot.randint(10, 15) + "_" + rot.randint(0, 9);
    return {
      type: "ipad",
      useragent: `Mozilla/${moz}.0 (Macintosh; Intel Mac OS X ${osys}) AppleWebKit/${wk} (KHTML, like Gecko) Version/${ver}.0 Safari/${f}`
    }
  }
  static createAmazonKindle({ mozilla, webkit, safari, kindle, android, chromium } = {}) {
    const rot = Rotation;
    const moz = mozilla || rot.randint(3, 5);
    const wk = webkit || rot.randarr(2).map(_ => rot.randint(100, 999)).join(".");
    const f = safari || rot.randarr(2).map(_ => rot.randint(10, 700)).join(".");
    const kf = kindle || rot.randchar(4)
    const andr = android || rot.randint(10, 13);
    const chr = chromium || rot.randarr(4).map(_ => rot.randint(0, 9999)).join(".");
    return {
      type: "amazonkindle",
      useragent: `Mozilla/${moz}.0 (Linux; Android ${andr}; KF${kf}) AppleWebKit/${wk} (KHTML, like Gecko) Chrome/${chr} Safari/${f}`
    }
  }
  static createLinuxFirefox({ mozilla, linux, gecko, firefox, rv } = {}) {
    const rot = Rotation;
    const moz = mozilla || rot.randint(3, 5);
    const arch = ["x32", "x64"];
    const nx = linux || arch[rot.randint(0, arch.length - 1)];
    const r = rv || rot.randint(10, 99);
    const gk = gecko || rot.randint(100000, 999999);
    const fx = firefox || rot.randint(10, 99);
    return `Mozilla/${moz}.0 (X11; Linux ${nx}; rv:${r}.0) Gecko/${gk} Firefox/${fx}.0`;
  }
  static createMacSafari({ mozilla, safari, webkit, version, os } = {}) {
    const rot = Rotation;
    const moz = mozilla || rot.randint(3, 5);
    const wk = webkit || rot.randarr(2).map(_ => rot.randint(100, 999)).join(".");
    const f = safari || rot.randarr(2).map(_ => rot.randint(10, 700)).join(".");
    const ver = version || rot.randarr(2).map(_ => rot.randint(10, 99)).join(".");
    const osys = os || rot.randint(10, 15) + "_" + rot.randint(0, 9);
    return {
      type: "macsafari",
      useragent: `Mozilla/${moz}.0 (Macintosh; Intel Mac OS X ${osys}) AppleWebKit/${wk} (KHTML, like Gecko) Version/${ver} Safari/${f}`
    }
  }
  static createChromeOS({ mozilla, os, version, webkit, chromium, safari } = {}) {
    const rot = Rotation;
    const moz = mozilla || rot.randint(3, 5);
    const wk = webkit || rot.randarr(2).map(_ => rot.randint(100, 999)).join(".");
    const f = safari || rot.randarr(2).map(_ => rot.randint(10, 700)).join(".");
    const arch = ["x32", "x64"];
    const osys = os || arch[rot.randint(0, arch.length - 1)];
    const ver = version || rot.randarr(2).map(_ => rot.randint(100, 999)).join(".");
    const chr = chromium || rot.randarr(4).map(_ => rot.randint(0, 9999)).join(".");
    return {
      type: "chromeos",
      useragent: `Mozilla/${moz}.0 (X11; CrOS ${osys} ${ver}) AppleWebKit/${wk} (KHTML, like Gecko) Chrome/${chr} Safari/${f}`
    }
  }
  static createAppleTV({ mozilla, version, os, language = "en-US" } = {}) {
    const rot = Rotation;
    const tv = version || rot.randint(7, 12);
    const osys = os || tv + "." + rot.randint(0, 9);
    const moz = mozilla || rot.randint(3, 5);
    return {
      type: "appletv",
      useragent: `Mozilla/${moz}.0 (AppleTV${tv}; CPU OS ${osys} like Mac OS X; ${language})`
    }
  }
  static createPlayStation({ version, webkit, safari, mozilla, playstation } = {}) {
    const rot = Rotation;
    const moz = mozilla || rot.randint(3, 5);
    const wk = webkit || rot.randarr(2).map(_ => rot.randint(100, 999)).join(".");
    const f = safari || rot.randarr(2).map(_ => rot.randint(10, 700)).join(".");
    const ps = playstation || rot.randint(3, 5) + "/" + rot.randarr(2).map(_ => rot.randint(10, 99)).join(".");
    const ver = version || rot.randint(3, 5);
    return {
      type: "playstation",
      useragent: `Mozilla/${moz}.0 (PlayStation; PlayStation ${ps}) AppleWebKit/${wk} (KHTML, like Gecko) Version/${ver}.0 Safari/${f}`
    }
  }
  static createNintendo({ mozilla, webkit, nf, browser } = {}) {
    const rot = Rotation;
    const moz = mozilla || rot.randint(3, 5);
    const wk = webkit || rot.randarr(2).map(_ => rot.randint(100, 999)).join(".");
    const f = nf || rot.randarr(4).map(_ => rot.randint(1, 10)).join(".");
    const br = browser || rot.randarr(4).map(_ => rot.randint(1, 10)).join(".");
    return {
      type: "nintendo",
      useragent: `Mozilla/${moz}.0 (Nintendo Switch; WifiWebAuthApplet) AppleWebKit/${wk} (KHTML, like Gecko) NF/${f} NintendoBrowser/${br}`
    }
  }
  static createXboxOne({ mozilla, version, os, windows, webkit, chromium, safari, edge } = {}) {
    const rot = Rotation;
    const moz = mozilla || rot.randint(3, 5);
    const wk = webkit || rot.randarr(2).map(_ => rot.randint(100, 999)).join(".");
    const f = safari || rot.randarr(2).map(_ => rot.randint(10, 700)).join(".");
    const arch = ["x32", "x64"];
    const osys = os || arch[rot.randint(0, arch.length - 1)];
    const wins = ["Win32", "Win64"];
    const win = windows || wins[rot.randint(0, wins.length - 1)];
    const edg = edge || rot.randarr(4).map(_ => rot.randint(100, 999)).join(".");
    const chr = chromium || rot.randarr(4).map(_ => rot.randint(0, 9999)).join(".");
    const ver = version || rot.randint(7, 12);
    return {
      type: "xboxone",
      useragent: `Mozilla/${moz}.0 (Windows NT ${ver}.0; ${win}; ${osys}; Xbox; Xbox One) AppleWebKit/${wk} (KHTML, like Gecko) Chrome/${chr} Safari/${f} Edge/${edg}`
    }
  }
  static createGoogleBot({ mozilla, webkit, bot, url = "http://www.google.com/bot.html", chromium, safari } = {}) {
    const rot = Rotation;
    const moz = mozilla || rot.randint(3, 5);
    const wk = webkit || rot.randarr(2).map(_ => rot.randint(100, 999)).join(".");
    const f = safari || rot.randarr(2).map(_ => rot.randint(10, 700)).join(".");
    const chr = chromium || rot.randarr(4).map(_ => rot.randint(0, 9999)).join(".");
    const vbot = bot || rot.randarr(2).map(_ => rot.randint(1, 9)).join(".");
    return {
      type: "googlebot",
      useragent: `Mozilla/${moz}.0 AppleWebKit/${wk} (KHTML, like Gecko; compatible; Googlebot/${vbot}; +${url}) Chrome/${chr} Safari/${f}`
    }
  }
  static createBingBot({ mozilla, bot, url = "http://www.bing.com/bingbot.htm" } = {}) {
    const rot = Rotation;
    const moz = mozilla || rot.randint(3, 5);
    const vbot = bot || rot.randarr(2).map(_ => rot.randint(1, 9)).join(".");
    return {
      type: "bingbot",
      useragent: `Mozilla/${moz}.0 (compatible; bingbot/${vbot}; +${url})`
    }
  }
  static createBaiduSpider({ mozilla, bot, url = "http://www.baidu.com/search/spider.html" } = {}) {
    const rot = Rotation;
    const moz = mozilla || rot.randint(3, 5);
    const vbot = bot || rot.randarr(2).map(_ => rot.randint(1, 9)).join(".");
    return {
      type: "baiduspider",
      useragent: `Mozilla/${moz}.0 (compatible; Baiduspider-render/${vbot}; +${url})`
    }
  }
  static createAppleWatch({ mozilla, version } = {}) {
    const rot = Rotation;
    const moz = mozilla || rot.randint(3, 5);
    const ver = version || rot.randint(3, 5);
    return {
      type: "applewatch",
      useragent: `Mozilla/${moz}.0 (Apple Watch${ver}; CPU Apple Watch WatchOS like Mac OS X; WatchApp)`
    }
  }
  static createAndroidChrome({ mozilla, android, webkit, chromium, safari } = {}) {
    const rot = Rotation;
    const moz = mozilla || rot.randint(3, 5);
    const andr = android || rot.randint(10, 13);
    const wk = webkit || rot.randarr(2).map(_ => rot.randint(100, 999)).join(".");
    const chr = chromium || rot.randarr(4).map(_ => rot.randint(0, 9999)).join(".");
    const f = safari || rot.randarr(2).map(_ => rot.randint(10, 700)).join(".");
    return {
      type: "androidchrome",
      useragent: `Mozilla/${moz}.0 (Linux; Android ${andr}; K) AppleWebKit${wk} (KHTML, like Gecko) Chrome/${chr} Mobile Safari/${f}`
    }
  }
  static createWindows({ mozilla, version, os, windows, webkit, chromium, safari } = {}) {
    const rot = Rotation;
    const moz = mozilla || rot.randint(3, 5);
    const wk = webkit || rot.randarr(2).map(_ => rot.randint(100, 999)).join(".");
    const f = safari || rot.randarr(2).map(_ => rot.randint(10, 700)).join(".");
    const arch = ["x32", "x64"];
    const osys = os || arch[rot.randint(0, arch.length - 1)];
    const wins = ["Win32", "Win64"];
    const win = windows || wins[rot.randint(0, wins.length - 1)];
    const chr = chromium || rot.randarr(4).map(_ => rot.randint(0, 9999)).join(".");
    const ver = version || rot.randint(7, 12);
    return {
      type: "windows",
      useragent: `Mozilla/${moz}.0 (Windows NT ${ver}.0; ${win}; ${osys}) AppleWebKit/${wk} (KHTML, like Gecko) Chrome/${chr} Safari/${f}`
    }
  }
  static createAndroidOpera({ presto, version, opera, opver, language = "en" } = {}) {
    const rot = Rotation;
    const opr = opera || rot.randarr(4).map(_ => rot.randint(10, 99)).join(".");
    const ver = version || rot.randint(7, 12);
    const pre = presto || rot.randarr(4).map(_ => rot.randint(100, 999)).join(".");
    const operaver = opver || rot.randarr(4).map(_ => rot.randint(10, 99)).join(".");
    return {
      type: "androidopera",
      useragent: `Opera/${opr} (Android; Opera Mini/${operaver}; U; ${language}) Presto/${pre} Version/${ver}`
    }
  }
  static createAndroidFirefox({ mozilla, android, gecko, firefox, rv } = {}) {
    const rot = Rotation;
    const moz = mozilla || rot.randint(3, 5);
    const andr = android || rot.randint(10, 13);
    const r = rv || rot.randint(10, 99);
    const gk = gecko || rot.randint(100000, 999999);
    const fx = firefox || rot.randint(10, 99);
    return {
      type: "androidfirefox",
      useragent: `Mozilla/${moz}.0 (Android ${andr}; Mobile; rv:${r}.0) Gecko/${gk} Firefox/${fx}.0`
    }
  }
  static createAndroidEdge({ mozilla, android, model, webkit, chromium, safari, edge } = {}) {
    const rot = Rotation;
    const moz = mozilla || rot.randint(3, 5);
    const andr = android || rot.randint(10, 13);
    const mod = model || rot.randchar(3) + rot.randint(1000, 9999);
    const wk = webkit || rot.randarr(2).map(_ => rot.randint(100, 999)).join(".");
    const chr = chromium || rot.randarr(4).map(_ => rot.randint(0, 9999)).join(".");
    const f = safari || rot.randarr(2).map(_ => rot.randint(10, 700)).join(".");
    const edg = edge || rot.randarr(4).map(_ => rot.randint(100, 999)).join(".");
    return {
      type: "androidedge",
      useragent: `Mozilla/${moz} (Linux; Android ${andr}; ${mod}) AppleWebKit/${wk} (KHTML, like Gecko) Chrome/${chr} Mobile Safari/${f} EdgA/${edg}`
    }
  }
  static randomMobile(ign, conf) {
    const list = [
      Rotation.createSamsung,
      Rotation.createGooglePixel,
      Rotation.createMotorola,
      Rotation.createAndroid,
      Rotation.createIphone
    ];
    ign = [ign].flat();
    let gen = list[Rotation.randint(0, list.length - 1)](conf);
    if(list.length == ign.length) return;
    while(ign.includes(gen.type)) gen = list[Rotation.randint(0, list.length - 1)](conf);
    return gen;
  }
  static randomAndroid(ign, conf) {
    const list = [
      Rotation.createMSLumia,
      Rotation.createSamsung,
      Rotation.createGooglePixel,
      Rotation.createMotorola,
      Rotation.createAndroid
    ];
    ign = [ign].flat();
    let gen = list[Rotation.randint(0, list.length - 1)](conf);
    if(list.length == ign.length) return;
    while(ign.includes(gen.type)) gen = list[Rotation.randint(0, list.length - 1)](conf);
    return gen;
  }
  static randomAndroidBrowser(ign, conf) {
    const list = [
      Rotation.createAndroidEdge,
      Rotation.createAndroidFirefox,
      Rotation.createAndroidChrome,
      Rotation.createAndroidOpera
    ];
    ign = [ign].flat();
    let gen = list[Rotation.randint(0, list.length - 1)](conf);
    if(list.length == ign.length) return;
    while(ign.includes(gen.type)) gen = list[Rotation.randint(0, list.length - 1)](conf);
    return gen;
  }
  static randomDesktop(ign, conf) {
    const list = [
      Rotation.createWindows,
      Rotation.createChromeOS,
      Rotation.createMacSafari,
      Rotation.createIpad,
      Rotation.createAmazonKindle
    ];
    ign = [ign].flat();
    let gen = list[Rotation.randint(0, list.length - 1)](conf);
    if(list.length == ign.length) return;
    while(ign.includes(gen.type)) gen = list[Rotation.randint(0, list.length - 1)](conf);
    return gen;
  }
  static randomApple(ign, conf) {
    const list = [
      Rotation.createIphone,
      Rotation.createIpad,
      Rotation.createAppleWatch,
      Rotation.createAppleTV
    ];
    ign = [ign].flat();
    let gen = list[Rotation.randint(0, list.length - 1)](conf);
    if(list.length == ign.length) return;
    while(ign.includes(gen.type)) gen = list[Rotation.randint(0, list.length - 1)](conf);
    return gen;
  }
  static randomConsole(ign, conf) {
    const list = [
      Rotation.createPlayStation,
      Rotation.createXboxOne,
      Rotation.createNintendo
    ];
    ign = [ign].flat();
    let gen = list[Rotation.randint(0, list.length - 1)](conf);
    if(list.length == ign.length) return;
    while(ign.includes(gen.type)) gen = list[Rotation.randint(0, list.length - 1)](conf);
    return gen;
  }
  static randomBot(ign, conf) {
    const list = [
      Rotation.createGoogleBot,
      Rotation.createBingBot,
      Rotation.createBaiduSpider
    ];
    ign = [ign].flat();
    let gen = list[Rotation.randint(0, list.length - 1)](conf);
    if(list.length == ign.length) return;
    while(ign.includes(gen.type)) gen = list[Rotation.randint(0, list.length - 1)](conf);
    return gen;
  }
  static random(ign, conf) {
    const list = [
      Rotation.createBaiduSpider,
      Rotation.createBingBot,
      Rotation.createGoogleBot,
      Rotation.createNintendo,
      Rotation.createPlayStation,
      Rotation.createXboxOne,
      Rotation.createIphone,
      Rotation.createIpad,
      Rotation.createAppleWatch,
      Rotation.createAppleTV,
      Rotation.createMSLumia,
      Rotation.createChromeOS,
      Rotation.createMacSafari,
      Rotation.createAmazonKindle,
      Rotation.createSamsung,
      Rotation.createGooglePixel,
      Rotation.createMotorola,
      Rotation.createAndroid,
      Rotation.createAndroidEdge,
      Rotation.createAndroidFirefox,
      Rotation.createAndroidOperaMini,
      Rotation.createAndroidChrome,
      Rotation.createAndroidOpera
    ];
    ign = [ign].flat();
    let gen = list[Rotation.randint(0, list.length - 1)](conf);
    if(list.length == ign.length) return;
    while(ign.includes(gen.type)) gen = list[Rotation.randint(0, list.length - 1)](conf);
    return gen;
  }
}

(_ => {
  if("global" in this && "module" in this.global) module.exports = Rotation
  if("window" in this) window.Rotation = Rotation;
})();