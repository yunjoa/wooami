$(function(){
    //start 

    $.ajax({
        url:'data/showroom_data.json',
        success:function(data){
            let place, address,showroomInfo= '', idx=0;
            data.showroom_table.forEach(function(h){
                showroomInfo +=`<li><p>${h.place}</p><span>${h.address}</span></li><div class="arrow"><span><span><span></span></div>`
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