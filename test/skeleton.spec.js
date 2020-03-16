// import Vue from 'vue'
// import skeletonDirective from '../';

// describe('VueStaticSkeleton Test Suite', function () {
//   it('install', function () {
//     Vue.use(skeletonDirective)
//     const vm = new Vue()
//     assert(vm.$Lazyload, 'has $Lazyload')
//   });
// });
import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from './App.vue'

describe('VueStaticSkeletonTest.vue', () => {
  it('show skeleton before data loaded', (done) => {
    const wrapper = shallowMount(App)
    
    // expect(wrapper.find('span.skeleton').exists()).to.equal(true);
    setTimeout(() => {
        expect(wrapper.find('span.skeleton').exists()).to.equal(false);
        expect(wrapper.find('span.skeleton').text()).to.equal('hello world!');
        done()
    }, 1000);
  });

})