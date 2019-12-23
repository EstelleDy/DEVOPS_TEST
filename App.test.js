import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as enzyme from 'enzyme';
import {mount, shallow} from 'enzyme';
import Calculator from './Calculator';
import {add} from './Calculator';
import Adapter from 'enzyme-adapter-react-16';
var assert = require('assert');
var calculator = require('./Calculator.js');
enzyme.configure({ adapter: new Adapter() });
it('renders without crashing', () => {
 const wrapper = shallow(<Calculator />)
});
describe('Calculator', function(){
  describe('Add',function(){
    it('should handle negative values',function() {
      assert.equal(Calculator.add(39,-4),35);
    
      });
  });
});

   

 

