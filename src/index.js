console.log('code is up and running');
import { isValid } from './utils';
import { data } from './data';
import './styles.css';

let filteredData = data;

const state = {
  items: data,
  currentItem: {
    name: '',
    size: '',
    price: 0,
    category: '',
  },
};
