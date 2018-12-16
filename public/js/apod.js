
$.ajax({
  url: "/dataFromNasa",
  success: function (result) {
    if (result.copyright) {
      $("#copyright").text("Image Credits: " + result.copyright);
    }
    else {
      $("#copyright").text("Image Credits: " + "Public Domain");
      console.log(result);
    }

    if (result.media_type == "video") {
      $("#apod_img_id").css("display", "none");
      $("#apod_vid_id").attr("src", result.url);
    }
    
    else {
      $("#apod_vid_id").css("display", "none");
      $("#apod_img_id").attr("src", result.url);
    }
    //$("#reqObject").text('Hello' + result.explanation);
    
    $("#reqObject").text('Hello' + result.body.explanation);
    //$("#returnObject").text(JSON.stringify(result, null, 4));
    
    //$("#returnObject").text(JSON.stringify(result, null, 4));
    $("#apod_explanation").text(result.explanation);
    $("#apod_title").text(result.title);
  }
  
});
