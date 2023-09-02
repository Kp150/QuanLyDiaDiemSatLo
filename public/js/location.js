var map = L.map('map').setView([10.420288, 106.296844], 10);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);



// var checkbox = document.getElementById("choosepoint");
// checkbox.addEventListener("change", function() {
//     if (checkbox.checked) {
//         onMapClick();
//     } else {
//         removeOnMapClick();
//     }
// });

// var a = false;
// var b = ",";
// var polyline;

// function onMapClick() {
//     if (map) {
//             map.on('click', handleMapClick);
//     }
// }

// function removeOnMapClick() {
//     if (map) {
//         map.off('click', handleMapClick);
//         a = false;
//         document.getElementById('shapeInput').value = '';
//         if (polyline) {
//             map.removeLayer(polyline);
//             polyline = null;
//         }
//     }
// }

// var shapeinf = "";

// function handleMapClick(event) {
//     var polylinePoints = [];
//     if (!polyline) {
//         polyline = L.polyline(polylinePoints, {
//             color: 'red'
//         }).addTo(map);
//     }
//     map.off('click', handleMapClick);
//     map.on('click', function(event) {
//         if (checkbox.checked) {
//             var latlng = event.latlng;
//             if (a == true) {
//                 shapeinf += b + "[" + latlng.lat + "," + latlng.lng + "]";
//             } else {
//                 shapeinf += "[" + latlng.lat + "," + latlng.lng + "]";
//                 a = true;
//             }
//             document.getElementById('shapeInput').value = "[" + shapeinf + "]";
//             polylinePoints.push(latlng);
//             polyline.setLatLngs(polylinePoints);
//         }
//     });
// }
// Lấy các element
var checkbox = document.getElementById("choosepoint");
var shapeInput = document.getElementById('shapeInput');

// Khởi tạo biến
var polyline;
// Xử lý sự kiện cho checkbox
checkbox.addEventListener("change", function() {

  if (checkbox.checked) {
    // Bật vẽ polyline
    onMapClick();

  } else {
    // Tắt vẽ polyline
    removeOnMapClick();
  }

});

// Bật vẽ polyline
function onMapClick() {
  if (map) {
    map.on('click', handleMapClick);
  }
}

// Tắt vẽ polyline
function removeOnMapClick() {
  if (map) {
    map.off('click', handleMapClick);
  }
  
  // Reset các biến
  isFirstPoint = true;
  shapeInput.value = '';
  
  if (polyline) {
    map.removeLayer(polyline);
    polyline = null;
  }
}

// Xử lý khi click chuột vẽ điểm
function handleMapClick(event) {

  // Khởi tạo polyline nếu chưa có
  if (!polyline) {
    polyline = L.polyline([], {color: 'red'}).addTo(map);
  }

  // Lấy tọa độ điểm click
  var latlng = event.latlng;

  // Thêm điểm vào mảng tọa độ
  var polylinePoints = polyline.getLatLngs();
  polylinePoints.push(latlng);

  // Cập nhật lại polyline
  polyline.setLatLngs(polylinePoints);

  // Cập nhật giá trị input
  var shapeInfo = "";

  polylinePoints.forEach(function(point,index) {
    if (index === 0) {
        shapeInfo += "[" + point.lat + "," + point.lng + "]";
  
      } else {
        shapeInfo += "," + "[" + point.lat + "," + point.lng + "]";
      }
  
    });

  shapeInput.value = "[" + shapeInfo + "]";

}

var xaGeojsonLayer = null;
var maXa = document.getElementById('maxa');
var tenXa = document.getElementById('tenxa');
fetch('/Geojson/xa.geojson')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        xaGeojsonLayer = L.geoJSON(data, {
          style: function(feature) {
            return {
              stroke: true, // vẽ viền
      color: 'blue', 
      weight: 0.5, // độ dày viền 
      
      fill: true, // đổ màu
      fillColor: 'orange',
      fillOpacity: 0.25  
            };
          }  
        });
        xaGeojsonLayer.addTo(map);
    });


    document.getElementById("back").addEventListener("click", function() {
    window.location.href = "/location";
});

document.getElementById("myButton").addEventListener("click", function(){ 
    document.getElementById("myForm").submit(); 
    window.location.href = "/admin/qlsl/addlocation";
});


