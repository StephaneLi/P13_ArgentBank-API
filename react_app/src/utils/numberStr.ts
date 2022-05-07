export const numStr = (number:number, separator?:string):string => {
  let numstr = Math.trunc(number).toString()  
  let decimal = String(number).substr(String(number).indexOf('.')+1)

  let a = numstr
  a = '' + a;
  separator = separator || ' ';
  var c = '',
      d = 0;
  while (a.match(/^0[0-9]/)) {
    a = a.substr(1);
  }
  for (var i = a.length-1; i >= 0; i--) {
    c = (d !== 0 && d % 3 === 0) ? a[i] + separator + c : a[i] + c;
    d++;
  }
  return c + '.' + decimal;
}