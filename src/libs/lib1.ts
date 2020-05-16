import Axios from 'axios';
import { isELEC } from '../index';
//import * as fs from 'fs'; // ERROR for WEB version

const cc=console.log;
const LL='\n';

export const Q = "'";
export const QQ = '"';

export const fsReadDir = (): string[] => {
  let res = [];
  const dirPath = './app'
  cc(' ~~> 01 msg from fsReadDir')
  if (isELEC) {
    cc('FS module defined.' + LL + '>> Reading dir: "' + dirPath + QQ);
    //import * as _fs from 'fs'; // IMPOSIBLE do import HERE!!!
    const _fs = require('fs'); // THE ONLY WAY for Electron and Web together
    res = _fs.readdirSync(dirPath);
  } else {
    cc('no FS module defined')
    res = ['no FS 1+', 'no FS 2']
  }
  return res;
}

export const fileReadElec = (): string[] => {
  let res = [];
  const filePath = './app/tt.txt';
  cc('File reading (E): "' + filePath + QQ);
  cc(' ~~> 01 msg from fsReadDir')
  if (isELEC) {
    const _fs = require('fs');
    const _res = _fs.readFileSync(filePath);
    res = _res.toString().split(LL);
  }
  return res;
}

/* */
const axiosGet = async (url: string): Promise<string> => {
  //const _axios = require('axios');
  //const oAxios = require('axios').create({ timeout: 3000 });
  const oAxios = Axios.create({ timeout: 3000 });
  const res = await oAxios.get(url)
  cc('Axios [import] res: ')
  cc(res.data)
  return res.data;
  //return (await oAxios.get(url)).data;
};
/* */

export const fileReadAxios = async (): Promise<string> => {
  let res = 'no data via Axios 2';
  const url = './tt.txt';
  cc(' => File reading (A): "' + url + QQ);
  res = await axiosGet(url)
  //const oAxios = require('axios').create({ timeout: 3000 });
  // res = (await oAxios.get(url)).data;
  // return res;
  // return (await oAxios.get(url)).data;
  return res;
}