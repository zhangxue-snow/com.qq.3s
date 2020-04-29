// 入口函数
$(function () {
    // fairy tab切换
    $('.xlqw-box-list').hide();
    $('.list1').show();
    // 1、给li添加点击事件
    $('.xlqw-bottom-tab-btn').on('click', function () {
        // 1.1 让所有list隐藏
        $('.xlqw-box-list').hide();
        // 1.2 让点击的这个li的索引对应的list显示
        let index = $(this).index();
        $('.xlqw-box-list').eq(index).show();
        // 1.3 切换样式
        $('.xlqw-bottom-tab-btn').eq(index).addClass('active').siblings().removeClass("active")
    })
})

$(function () {
    // 职业介绍
    $('.wrap-slide').hide();
    $('.wrap-slide1').show();
    // 1、给li添加点击事件
    $('.fairy-tab-btn-bg').on('click', function () {
        // 1.1 让所有list隐藏
        $('.wrap-slide').hide();
        // 1.2 让点击的这个li的索引对应的list显示
        let index = $(this).index();
        $('.wrap-slide').eq(index).show();
        // 1.3 切换样式
        $('.fairy-tab-btn-bg').eq(index).addClass('active').siblings().removeClass("active")
    })
})