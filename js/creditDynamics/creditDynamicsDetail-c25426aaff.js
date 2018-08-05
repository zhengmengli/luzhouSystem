$(function(){
    dynamicdetail();
    function dynamicdetail(){

        ajaxPost('/creditliquor/dynamicdetail',{
            id:location.href.split("id=")[1]
        },function(res){
            var html = template('template_id',res);
            $('#content-ID').html(html);
            $('#trumbowyg-detail').html(res.data.content);
        });
    }
})