$(function(){
    //start 

    $.ajax({
        url:'data/showroom_data.json',
        success:function(data){
            let place, address,showroomInfo= '', idx=0;
            data.showroom_table.forEach(function(h){
                showroomInfo +=`<li><b>${h.place}</b><p>${h.address}</p><div class="arrow"><span></span><span></span></div></li>`
            })
            place = data.showroom_table[idx].place;
            address = data.showroom_table[idx].address;
            $('.the_place').html(showroomInfo)
            
        },
        error:function(e){
            console.log(e.status);
            console.log(e.error);
            console.log(e.responseText);

        }
    })
})