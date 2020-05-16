import { cc, ccc, LL, QQ, T } from './libs/mxlib'
import { Q, fsReadDir, fileReadElec, fileReadAxios, } from './libs/lib1';

export const isELEC = (navigator.userAgent.toLowerCase().search('electron') >=0);

const BR='<br/>'
const HR='<hr/>'
const LINE1='-'.repeat(50);
const LINE2='='.repeat(50);

const verInfo = T() + `. [01] ==> K5G. TS tests in ${Q}./src/index.ts ==> ` + QQ + Q;

const func1 = (p1: string) => {
  return 'Arrow func1 = () => {} test with: "' + p1 + QQ;
}

console.clear();
ccc(LINE2)
let msg = verInfo + HR + LL;
cc(navigator)
cc(LINE2);
cc('Webpack tests, K5C. ~~ ' + func1(' PARAM1 '));
cc(LINE1);
msg += navigator.userAgent + HR + LL;

cc('isElectron: ', isELEC);
const div_app = document.getElementById('app');
div_app.innerHTML = HR + msg;
cc(LINE2);

// read a dir...
const arrDir = fsReadDir();
div_app.innerHTML += arrDir.join(BR) + HR;
cc(arrDir.join(LL))

// read a file...
/*
let arrFile = [];
if (isELEC) {
  //cc('File reading...')
  arrFile = fileReadElec();
  cc('arr len = ' + arrFile.length)
  div_app.innerHTML += arrFile.join(BR) + HR;
  cc(arrFile.join(LL))
} else {
  const _arrFile = fileReadAxios();
  ccc('_arrFile:' + LL + _arrFile);
}
*/
const _arrFile = fileReadAxios();
ccc('_arrFile:' + LL + _arrFile);

ccc(verInfo + LL + func1('param2'));
