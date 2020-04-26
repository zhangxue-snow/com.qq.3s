// 入口函数
$(function () {
    // 背景音乐
    $('.kv-video').click(function () {

    })

    // 登录弹窗
    // 1、点击登录按钮显示
    $('#kv-loginbtn').on('click', function () {
        console.log('111');
        $('.login-window').css('display', 'block')
        $('#overlar').css('display', 'block')
    })
    // 2、点击关闭按钮隐藏
    $('.login-close').on('click', function () {
        $('.login-window').css('display', 'none')
        $('#overlar').css('display', 'none')
    })

    // $('#kv-loginbtn').mouseenter(function () {
    //     $('.login-window').css('display', 'block')
    // })
    // // 2、点击关闭按钮隐藏
    // $('#kv-loginbtn').mouseleave(function () {
    //     $('.login-window').css('display', 'none')
    // })


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
    // 把每张图片的位置效果（css）放在一个数组（arr）里，到时候通过点击左右按钮来改变顺序，然后再把图片放到对应的位置即可
    var arr = [
        {// 1
            width: 790.64,
            height: 423.56,
            top: 30,
            left: -10,
            zIndex: 2
        },
        {// 2
            width: 895.93,
            height: 479.96,
            top: -2,
            left: 90,
            zIndex: 3
        },
        {// 4
            width: 707.33,
            height: 380.5,
            top: 30,
            right: -10,
            zIndex: 1
        },
        {// 3
            width: 790.64,
            height: 423.56,
            top: 30,
            right: -10,
            zIndex: 2
        },
    ]

    // 让每个li标签走到指定位置

    assign();
    function assign() {
        $.each($('.slide'), function (index, val) {
            // index是索引号 ele是数组中的对象
            $(val).animate(arr[index])
            // console.log(arr[index]);
        })
    }


    // 给左侧按钮添加点击事件
    $('.prev').on("click", function () {
        arr.unshift(arr.pop())
        assign();
    })

    // 给右侧按钮添加点击事件
    $('.next').on("click", function () {
        arr.push(arr.shift())
        assign();
    })
})





// 入口函数
$(function () {
    // fairy tab切换

    // 1、给li添加点击事件
    // $('.xlqw-box-list').hide();
    $('.xlqw-bottom-tab-btn').on('click', function () {
        // 1.1 让所有list隐藏
        $('.xlqw-box-list').hide();
        // 1.2 让点击的这个li的索引对应的list显示
        let index = $(this).index();
        $('.xlqw-box-list').eq(index).show();
        // 切换css样式
        $('.xlqw-bottom-tab-btn').eq(index).addClass('active')
    })
})
