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
    document.getElementById("tieude").style.display = 'none';
   // document.getElementById("back").style.marginLeft = "30%";
}

function w3_close() {
   // document.getElementById("back").style.marginLeft = "0%";
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("openNav").style.display = 'inline-block';
    document.getElementById("closeNav").style.display = 'none';
    document.getElementById("tieude").style.display = "block";
}

document.getElementById("back").addEventListener("click", function () {
    window.location.href = "/home";
});
//End

//Ẩn table 
// function showTable() {
//     var input = document.getElementById("input");
//     var table = document.getElementById("list");

//     if (input.value === '') {
//         table.style.display = "none"; // Ẩn bảng nếu không có gõ gì
//     } else {

//         table.style.display = "block"; // Hiển thị bảng nếu có gõ
//     }
// }
//End Ẩn table


//Chức năng Tìm kiếm

$(document).ready(function () {
    $(".form-control-sidebar").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#list-view tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});
//End Chức năng Tìm kiếm


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
<<<<<<< HEAD
// var HuyenCheckbox = document.getElementById('huyen');
// var huyenGeojsonLayer = null;
// fetch('/Geojson/huyen.geojson')
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         huyenGeojsonLayer = L.geoJSON(data, {
          
//             onEachFeature: function (feature, layer) {
//                 var popupContent = feature.properties.TenQuanHuyen;
//                 layer.bindTooltip(popupContent, 
//                     {
//                         permanent: true, 
//                         direction: 'right',
//                         opacity : 0.8
//                     })
//             }
//         });
//         huyenGeojsonLayer = L.geoJSON(data, {          
//             style: function(feature) {
//                 return {
//                   color: 'gray' // thay đổi màu viền thành màu xanh dương 
//                 };
//               }  
//         });
//         HuyenCheckbox.addEventListener('change', function () {
//             if (HuyenCheckbox.checked) {
//                 huyenGeojsonLayer.addTo(map);
//                 map.fitBounds(huyenGeojsonLayer.getBounds());
//             } else {
//                 map.removeLayer(huyenGeojsonLayer);
//             }
//         });
//     });
=======
var HuyenCheckbox = document.getElementById('huyen');
var huyenGeojsonLayer = null;
fetch('/Geojson/huyen.geojson')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        huyenGeojsonLayer = L.geoJSON(data, {
            onEachFeature: function (feature, layer) {
                    // Tạo và hiển thị popup 
                    var popupContent = feature.properties.TenQuanHuyen; 
                    layer.bindTooltip(popupContent, 
                    {
                        permanent: true, 
                        direction: 'right',
                        opacity : 0.8
                    })
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
>>>>>>> 9e5ebace7097a8993206f21233c7c3d35d346352
// End Geojson checkbox Huyen


// Geojson checkbox Xa
<<<<<<< HEAD

const change = () => {

    // Code của hàm change
    if (HuyenCheckbox.checked) {
      huyenGeojsonLayer.addTo(map);
      map.fitBounds(huyenGeojsonLayer.getBounds());
    } else {
      map.removeLayer(huyenGeojsonLayer); 
    }
    if (XaCheckbox.checked) {
                    xaGeojsonLayer.addTo(map);
                    // Căn chỉnh bản đồ để hiển thị toàn bộ dữ liệu
                    map.fitBounds(xaGeojsonLayer.getBounds());
                } else {
                    map.removeLayer(xaGeojsonLayer);
                }
    };
      const HuyenCheckbox = document.getElementById('huyen');
      var XaCheckbox = document.getElementById('xa');
    let huyenGeojsonLayer = null; 
    let xaGeojsonLayer = null;
    // Lấy dữ liệu geojson và khởi tạo layer
    fetch('/Geojson/huyen.geojson')
  .then(res => res.json())
  .then(data => {
    huyenGeojsonLayer = L.geoJSON(data, {
      onEachFeature: function (feature, layer) {
        var popupContent = feature.properties.TenQuanHuyen;
        layer.bindTooltip(popupContent, {
          permanent: true,
          direction: 'right',
          opacity: 0.8
=======
var XaCheckbox = document.getElementById('xa');
var xaGeojsonLayer = null;
fetch('/Geojson/xa.geojson')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        xaGeojsonLayer = L.geoJSON(data, {
            onEachFeature: function (feature, layer) { 

            }
>>>>>>> 9e5ebace7097a8993206f21233c7c3d35d346352
        });
      },
      style: function (feature) {
        return {
          color: 'gray' // thay đổi màu viền thành màu xám
        };
      }
    }).addTo(map);
  });
      
    
            HuyenCheckbox.addEventListener('change', function () {
                change();
            });
            XaCheckbox.addEventListener('change', function () {
               change();
            });
           
    
    fetch('/Geojson/xa.geojson')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            xaGeojsonLayer = L.geoJSON(data, {
                style: function(feature) {
                    return {
                      color: 'gray' 
                    };
                  }  
            });
           
        });
// End Geojson checkbox Xa  



$(document).ready(function () {
    // Bắt sự kiện click vào hàng trong tbody
    $('tbody tr').click(function () {
        var laytextpolyline = $(this).find('td:eq(4)').text();
        var doitextthanhjson = JSON.parse(laytextpolyline);
        var vitripolyline = L.polyline(doitextthanhjson, { color: 'red' });
        map.fitBounds(vitripolyline.getBounds());
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
 
    const coordinatesLabel = L.control();
  
    coordinatesLabel.onAdd = function (map) {
      this._div = L.DomUtil.create('div', 'coordinates-label');
      this.update();
      return this._div;
    };
  
    coordinatesLabel.update = function (latlng) {
      const labelElement = document.getElementById('tieude');
      if (labelElement) {
        labelElement.innerText = latlng ? `Tọa độ: ${latlng.lat.toFixed(6)}, ${latlng.lng.toFixed(6)}` : '';
      }
    };
  
    coordinatesLabel.addTo(map);
  
    // Xử lý sự kiện di chuyển chuột và cập nhật label
    map.on('mousemove', function (e) {
      coordinatesLabel.update(e.latlng);
    });
  
  
  




