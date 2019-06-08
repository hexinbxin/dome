(function() {
    var pavs = document.getElementById("pav");
    var citys = document.getElementById("city");
    var schools = document.getElementById("school");
    var pavStr = "",
        cityStr = "",
        schoolStr = "";
    for(var i = 0; i < province.length; i ++){
        pavStr += "<option value = "+province[i][0]+">"+province[i][1]+"</option>";
    }
    pavs.innerHTML = pavStr;
    var cityArr = city[pavs.value];
    for(var i = 0; i < cityArr.length; i ++){
        cityStr += "<option value = "+cityArr[i][0]+">"+cityArr[i][1]+"</option>"
    }
    citys.innerHTML = cityStr;
    var schoolArr = allschool[citys.value];
    for(var i = 0; i < schoolArr.length; i ++){
        schoolStr += "<option>"+schoolArr[i][2]+"</option>";
    }
    schools.innerHTML = schoolStr;
    pavs.addEventListener("change", function(){
        cityStr = "";
        cityArr = city[pavs.value];
        for(var i = 0; i < cityArr.length; i ++){
            cityStr += "<option value = "+cityArr[i][0]+">"+cityArr[i][1]+"</option>"
        }
        citys.innerHTML = cityStr;
        schoolStr = "";
        schoolArr = allschool[citys.value];
            for(var i = 0; i < schoolArr.length; i ++){
                schoolStr += "<option>"+schoolArr[i][2]+"</option>";
            }
            schools.innerHTML = schoolStr;
            schoolStr = "<option value = 999>其他</option>"
    },false)
    citys.addEventListener("change", function(){
        schoolStr = "";
        schoolArr = allschool[citys.value];
        for(var i = 0; i < schoolArr.length; i ++){
            schoolStr += "<option>"+schoolArr[i][2]+"</option>";
        }
        schools.innerHTML = schoolStr;
    }, false)
})()