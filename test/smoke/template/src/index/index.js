import largeNumber from 'npm-large-number';
import { helloworld } from './helloworld';
import './index.less';

const res = largeNumber('999', '1');
document.write(helloworld());
document.write(res);
