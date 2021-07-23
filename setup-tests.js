/* eslint-disable */
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJSON from 'enzyme-to-json';
import { configure } from 'enzyme';
import { get } from 'bdd-lazy-var/getter';

configure({ adapter: new Adapter() });

global.context = describe;
global.$ = get;
global.toJSON = toJSON;
