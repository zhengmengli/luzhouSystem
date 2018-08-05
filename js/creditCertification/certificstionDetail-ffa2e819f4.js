

$(document).ready(function(){
    queryDetial();
    function queryDetial(){
       ajaxPost('creditliquor/authenticationdetail',{
           id:GetUrlParam().id
       },function (res) {
           if(res.result==1){
               var html = template('template_id', res.data);
               $('#detial-content').html(html);
               $('#descId').html(res.data.COMPANY_DESCRIBE);
           }
       })
    }
});