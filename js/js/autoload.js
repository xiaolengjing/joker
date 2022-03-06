try {
    $("<link>").attr({href: "https://cdn.jsdelivr.net/gh/xiaolengjing/joker@main/js/js/waifu.css", rel: "stylesheet", type: "text/css"}).appendTo('head');
    $('body').append(
        '<div class="waifu"><div class="waifu-tips"></div><canvas id="live2d" class="live2d"></canvas><div class="waifu-tool"><span class="fui-home"></span> <span class="fui-chat"></span> <span class="fui-eye"></span> <span class="fui-user"></span> <span class="fui-photo"></span> <span class="fui-info-circle"></span> <span class="fui-cross"></span></div></div>');
    $.ajax({url: './waifu-tips.min.js',dataType:"script", cache: true, async: false});
    $.ajax({url: './live2d.min.js',dataType:"script", cache: true, async: false});
    /* 可直接修改部分参数 */
    live2d_settings['hitokotoAPI'] = 'hitokoto.cn';  // 一言 API
    live2d_settings['modelId'] = 6;                  // 默认模型 ID    6/6.7.8.9
    live2d_settings['modelTexturesId'] = 9;          // 默认材质 ID
    live2d_settings['modelStorage'] = false;         // 不储存模型 ID
    /* 在 initModel 前添加 */
    initModel('./waifu-tips.json');
} catch(err) { console.log('[Error] JQuery is not defined.') }
