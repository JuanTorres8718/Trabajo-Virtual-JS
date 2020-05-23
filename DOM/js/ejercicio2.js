'use strict';
const img1 = document.querySelector('#img1');
const img2 = document.querySelector('#img2');
const img3 = document.querySelector('#img3');
const fun = () =>{
    const click = document.querySelector('#country').value;
    if(click === 'Madrid'){
        img1.setAttribute('src', 'https://pesweb.azureedge.net/spimg/geographicimages/madrid.jpg?scale=downscaleonly&encoder=freeimage&progressive=true&quality=50&w=480&h=480&mode=crop')
        img2.setAttribute('src', 'https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2019/06/03/15595921036180.jpg')
        img3.setAttribute('src', 'https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2017/05/24/479235.jpg')

    }else if(click === 'Paris'){
        img1.setAttribute('src', 'https://i.pinimg.com/originals/34/1e/4a/341e4a03cfafaa0841640620e2a9072d.jpg')
        img2.setAttribute('src', 'https://media.gettyimages.com/photos/eiffel-tower-in-paris-france-picture-id924894324?s=612x612')
        img3.setAttribute('src', 'https://distinguishedwines.com/wp-content/uploads/2020/01/paris-summer.jpg')

    }else if(click === 'Nueva-York'){
        img1.setAttribute('src', 'https://cdn.getyourguide.com/img/tour_img-1320197-146.jpg')
        img2.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSul0faxUlf7toqUziQflHgr1QoYzTSu0CmrzYkcg8t_YXvEjb1&usqp=CAU')
        img3.setAttribute('src', 'https://gourmadela.com/wp-content/uploads/2016/05/Asiate-view-from-table-700x525.jpg')

    }else {
        img1.setAttribute('src', '')
        img2.setAttribute('src', '')
        img3.setAttribute('src', '')

    }
}

document.querySelector('#country').addEventListener('click', fun)
