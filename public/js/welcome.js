//Map
var map = L.map('map').setView([10.420288, 106.296844], 10);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
//End map


//Các nút trên map
function w3_open() {
    document.getElementById("main").style.marginLeft = "30%";
    document.getElementById("mySidebar").style.width = "30%";
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("openNav").style.display = 'none';
    document.getElementById("closeNav").style.display = 'inline-block';
}

function w3_close() {
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("openNav").style.display = 'inline-block';
    document.getElementById("closeNav").style.display = 'none';
}

//End

//Ẩn table 
function showTable() {
    var input = document.getElementById("input");
    var table = document.getElementById("list");

    if (input.value === '') {
        table.style.display = "none"; // Ẩn bảng nếu không có gõ gì
    } else {
        table.style.display = "block"; // Hiển thị bảng nếu có gõ
    }
}
//End Ẩn table


//Chức năng Tìm kiếm
$(document).ready(function () {
    $(".form-control-sidebar").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#list tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});
//End Chức năng Tìm kiếm


//Thay đổi bản đồ
function changeBasemap(basemaps) {
    var selectedBasemap = basemaps.value;
    var mapUrl;

    switch (selectedBasemap) {
        case 'Streets':
            mapUrl = 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png';
            break;
        default:
            mapUrl = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
            break;
    }

    // Xóa bản đồ hiện tại và tạo bản đồ mới với URL tương ứng
    map.eachLayer(function (layer) {
        map.removeLayer(layer);
    });

    L.tileLayer(mapUrl, {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
}
//End Thay đổi bản đồ

var dienbiendb = document.getElementById('dienbien');
var dienbiennam = document.getElementById('year');
dienbiendb.addEventListener('change', function () {
    if (dienbiendb.checked) {
        dienbiennam.style.display = "block";
    } else {
        dienbiennam.style.display = "none";
    }
});

//Geojson checkbox Huyen
var HuyenCheckbox = document.getElementById('huyen');
var huyenGeojsonLayer = null;
fetch('/Geojson/huyen.geojson')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        huyenGeojsonLayer = L.geoJSON(data, {
            onEachFeature: function (feature, layer) {
                layer.on('click', function () {
                    // Tạo và hiển thị popup 
                    var popupContent = feature.properties.TenQuanHuyen;
                    layer.bindPopup(popupContent).openPopup();
                });
            }
        });
        HuyenCheckbox.addEventListener('change', function () {
            if (HuyenCheckbox.checked) {
                huyenGeojsonLayer.addTo(map);
                map.fitBounds(huyenGeojsonLayer.getBounds());
            } else {
                map.removeLayer(huyenGeojsonLayer);
            }
        });
    });
// End Geojson checkbox Huyen


// Geojson checkbox Xa
var XaCheckbox = document.getElementById('xa');
var xaGeojsonLayer = null;
fetch('/Geojson/xa.geojson')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        xaGeojsonLayer = L.geoJSON(data, {
            onEachFeature: function (feature, layer) {
                layer.on('click', function () {
                    // Tạo và hiển thị popup 
                    var popupContent = feature.properties.TenPhuongXa;
                    layer.bindPopup(popupContent).openPopup();
                });
            }
        });
        XaCheckbox.addEventListener('change', function () {
            if (XaCheckbox.checked) {
                xaGeojsonLayer.addTo(map);
                // Căn chỉnh bản đồ để hiển thị toàn bộ dữ liệu
                map.fitBounds(xaGeojsonLayer.getBounds());
            } else {
                map.removeLayer(xaGeojsonLayer);
            }
        });
    });
// End Geojson checkbox Xa  


$(document).ready(function () {
    $('#input').on('keyup', function () {
        var value = $(this).val().toLowerCase();
        $('table tbody tr').filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});
                          





function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }