// 入口函数
$(function () {
    //  tab切换
    $(function () {
        $('.tab-list').hide();
        $('.list1').show();
        // 1、给li添加点击事件
        $('.tab-nav-list li').on('click', function () {
            // 1.1 让所有list隐藏
            $('.tab-list').hide();
            // 1.2 让点击的这个li的索引对应的list显示
            let index = $(this).index();
            $('.tab-list').eq(index).show();
            // 1.3 切换样式
            $('.tab-nav-list li').eq(index).addClass('on').siblings().removeClass("on")
        })
    })


    $(function () {
        // 让所有ul隐藏
        $('.tab-list-ul').hide();
        // 第一个默认显示的ul显示
        $('.ul-list1').show();
        $('.laypage-prev').hide()
        // 给tab-paging 的li添加点击事件
        $('.tab-paging a').on('click', function () {
            // 让所有ul隐藏
            $('.tab-list-ul').hide();

            // 让点击的这个li的索引对应的ul显示
            let index = $(this).index();
            if (index >1) {
                $('.laypage-prev').show()

            }
            else {
                $('.laypage-prev').hide()
            }
            if (index < 3) {
                $('.laypage-next').show()
            }
            else {
                $('.laypage-next').hide()
            }
            $('.laypage-prev').on('click', function () {
                // index--;
                $('.tab-paging a').eq(index-1).addClass('paging-active').siblings().removeClass("paging-active")
            })
            $('.laypage-next').on('click', function () {
                // index++;
                $('.tab-paging a').eq(index+1).addClass('paging-active').siblings().removeClass("paging-active")
            })


            console.log(index);
            $('.tab-list-ul').eq(index - 1).show();
            // 1.3 切换样式
            $('.tab-paging a').eq(index).addClass('paging-active').siblings().removeClass("paging-active")

        })
    })

})