$(function(){
    layui.use('layer', function(){});
    setting('trumbowyg')
    laydate("date1")
    //初始化参数

    dynamicdetail(GetUrlParam().id)
    /*
     * 编辑信用动态接口
     * 接口地址  /creditliquor/updatedynamic
     * */
    function updateDynamic(){
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
        ajaxPost('/creditliquor/updatedynamic', {
            title: $("#title").val(),
            publicDate: $("#date1").val(),
            source: $("#source").val(),
            department: getUserInfo().department,
            content: $("#trumbowyg").html(),
            columnId: 'A04A01',
            author: getUserInfo().name,
            id: GetUrlParam().id

        },function(result){
            if(result.result == '1'){
                window.location.href = "../../html/creditDynamics/creditDynamics.html?idxTab=0"
                /*layer.msg(result.msg, {
                    icon: 1,
                    time: 2000, //2秒关闭（如果不配置，默认是3秒）
                }, function(){
                    window.location.href = "../../html/creditDynamics/creditDynamics.html?idxTab=0"
                });*/
            }
        })
    }

    /**
     * 详情查询
     */
    function dynamicdetail(id){
        ajaxPost('/creditliquor/dynamicdetail',{
            id:id
        },function(res){
            var data = res.data;
            $("#title").val(data.title)
            $("#date1").val(data.PUBLISH_DATE)
            $("#source").val(data.source)
            $("#trumbowyg").html(data.content)
        });
    }

    $("#submit").click(function(){
        updateDynamic()
    })
    $("#cancel").click(function(){
        window.location.href = "../../html/creditDynamics/creditDynamics.html?idxTab=0"
    })
})