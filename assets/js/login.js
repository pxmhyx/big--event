$(function() {
    var form = layui.form;
    form.verify({
        uname: [/^[\S]{6,8}$/, '用户名必须是6-8位字符'],
        pwd: function(value, item) {
            var reg = /^\d{6}$/;
            if (!reg.test(value)) {
                return '密码必须是6位数字'
            }
        }
    })


    $('.layui-form').submit(function(e) {
        e.preventDefault();
        var formData = $(this).serialize();
        $.ajax({
            type: 'post',
            url: 'http://ajax.frontend.itheima.net/api/login',
            data: formData,
            success: function(res) {
                if (res.status === 0) {
                    location.href = './index.html'
                }
            }
        })
    })
})