
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

export default {
  findParentForm,
  getFormData,
  toLpad,
  toZeroLpad,
  toDateTimeString,
};
