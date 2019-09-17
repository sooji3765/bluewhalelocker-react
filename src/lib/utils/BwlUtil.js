import axios from 'axios';

const findParentForm = (node) => {
  let form = null;
  while(node) {
      if (node.tagName === 'FORM') {
          form = node;
          break;
      }
      node = node.parentNode;
  }

  return form;
}

const getFormData = (e, form) => {
  let elements = null;
  if (form) {
    elements = form.elements;
  } else {
    elements = e.target.form.elements;
  }
  const obj ={};
  for(var i = 0 ; i < elements.length ; i++){
    const item = elements.item(i);
    if (item.name.length > 0) {
      obj[item.name] = item.value;
    }
  }

  return obj;
}

const toLpad = (n, digits, c) => {
  var zero = '';
  n = n.toString();

  if (n.length < digits) {
    for (let i = 0; i < digits - n.length; i++)
      zero += c;
  }
  return zero + n;
}

const toZeroLpad = (n, digits) => {
  return toLpad(n, digits, '0');
}

const toDateTimeString = (dt, format) => {
  let text = '';
  switch (format) {
    case 'YYYY-MM-DD HH:MM:SS':
      text = 
        toZeroLpad(dt.getFullYear(), 4) + '-' +
        toZeroLpad(dt.getMonth() + 1, 2) + '-' +
        toZeroLpad(dt.getDate(), 2) + ' ' +

        toZeroLpad(dt.getHours(), 2) + ':' +
        toZeroLpad(dt.getMinutes(), 2) + ':' +
        toZeroLpad(dt.getSeconds(), 2);
      break;
    default:
      break;
  }

  return text;
}

const doBwlPost = async (path, data) => {
  const url = process.env.REACT_APP_BACKEND_SERVER_URL + path;
  return new Promise((relsolve, reject) => {
    try {
      axios.post(url, data, {
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': '*',
        }
      }).then(response => {
        console.log(response.status);
        relsolve(response)
      }).catch(error => {
        reject(error)
      })
    } catch(error) {
      reject(error)
    }
  });
}

const JsonData2Params = (jsonData) => {
  if (!jsonData || jsonData.length === 0) {
    return "";
  }

  const aryData = [];
  for(const key in jsonData) {
    const item = key + "=" + jsonData[key];
    aryData.push(item)
  }

  return "?" + aryData.join("&");
}

const doBwlGet = async (path, data) => {
  const params = JsonData2Params(data);
  const url = process.env.REACT_APP_BACKEND_SERVER_URL + path + params;
  return new Promise((relsolve, reject) => {
    try {
      console.log("url", url);
      axios.get(url, {
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': '*',
        }
      }).then(response => {
        console.log(response.status);
        relsolve(response)
      }).catch(error => {
        reject(error)
      })
    } catch(error) {
      reject(error)
    }
  });
}

const doBwlPostData = async (path, item) => {
  try {
    const res = await doBwlPost(path, item);
    if (res.status === 200) {
      return {
        ...res.data,
        message: (res.data.message) ? res.data.message : 'succ',
      }
    }
  
  } catch (e) {
    if (e.response && e.response.data) {
      return {
        ...e.response.data
      }
    }
  }
  return {
    success: false,
    results: 'error',
    message: 'fail',
  }
}

const doBwlGetData = async (path, item) => {
  try {
    const res = await doBwlGet(path, item);
    if (res.status === 200) {
      return {
        ...res.data,
        message: 'succ',
      }
    }
  
  } catch (e) {
    if (e.response && e.response.data) {
      return {
        ...e.response.data
      }
    }
  }

  return {
    success: false,
    results: 'error',
    message: 'fail',
  }

}

export default {
  findParentForm,
  getFormData,
  toLpad,
  toZeroLpad,
  toDateTimeString,
  doBwlPost,
  doBwlGet,
  doBwlPostData,
  doBwlGetData,
};
