// 入口函数
$(function () {
    // 背景音乐
    $('.kv-video').click(function () {

    })

    // npc-tab切换
    $('.item1').hide()
    // 1、给li添加点击事件
    $('.lis').on('click', function () {
        // 1.1 让所有item隐藏
        $('.item').hide();
        // 1.2 让点击的这个li的索引对应的item显示
        let index = $(this).index();
        $('.item').eq(index).show();
        // 切换css样式
        $('.lis').toggleClass('active')
    })


    // 轮播图
    var arr = [
        {
            // 1
            width:
        }
    ]
})
