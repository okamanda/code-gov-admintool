import $ from 'jquery';

export function resolveBackendUrl(url) {
  if (window.location.host.indexOf("localhost") >= 0) {
    return 'http://localhost:3033' + url;
  } else {
    return 'http://08664f30.ngrok.io' + url;
  }
}
export function post(url, token, data, completion) {
  $.ajax({
    url: url,
    method: "POST",
    dataType: "JSON",
    data: data,
    headers: { 'Authorization': 'JWT ' + token },
    success: function (data, text) {
      if (completion) completion(null, data);
    },
    error: function (request, status, error) {
      if (error) completion(error);
    }
  });
}

export function get(url, token, completion) {
  $.ajax({
    url: url,
    method: "GET",
    dataType: "JSON",
    headers: { 'Authorization': 'JWT ' + token },
    success: function (data, text) {
      if (completion) completion(null, data);
    },
    error: function (request, status, error) {
      if (error) completion(error);
    }
  });
}
