$(function(){
    layui.use('layer', function(){});
    setting('trumbowyg')
    laydate("date1")
    /*
     * 添加信用动态接口
     * 接口地址 /creditliquor/adddynamic
     * */
    function adddDynamic(){
        if(isNull($("#title").val())){
            layer.msg('标题不能为空', {
                icon: 2,
                time: 2000 //2秒关闭（如果不配置，默认是3秒）
            });
            return false
        }
        if(isNull($("#date1").val())){
            layer.msg('时间不能为空', {
                icon: 2,
                time: 2000 //2秒关闭（如果不配置，默认是3秒）
            });
            return false
        }
        if(!$("#trumbowyg").html()){
            layer.msg('内容不能为空', {
                icon: 2,
                time: 2000 //2秒关闭（如果不配置，默认是3秒）
            });
            return false
        }
        ajaxPost('/creditliquor/adddynamic', {
            title: $("#title").val() ,
            publicDate: sendDateFormat($("#date1").val()),
            source: $("#source").val(),
            department: getUserInfo().department,
            content: $("#trumbowyg").html(),
            columnId: 'A04A01',
            author: getUserInfo().name
        },function(res){
            if(res.result == '1'){
                window.location.href = "../../html/creditDynamics/creditDynamics.html?idxTab=0"
                /*layer.msg(res.msg, {
                    icon: 1,
                    time: 2000 //2秒关闭（如果不配置，默认是3秒）
                }, function(){
                    window.location.href = "../../html/creditDynamics/creditDynamics.html?idxTab=0"
                });*/
            }
        })
    }
    $("#submit").click(function(){
        adddDynamic()
    })
    $("#cancel").click(function(){
        window.location.href = "../../html/creditDynamics/creditDynamics.html?idxTab=0"
    })
})