import Vue from 'vue'
import App from './App.vue'

//注册自定义的Directives
//bind(el, binding, vnode)当Directive is attached的时候发生
//inserted(el, binding, vnode)当insert 到 parent node的时候发生
//update(el, binding, vnode, oldVnode) 当component updated的时候发生 without children
//componentUpdated(el, binding, vnode, oldVnode)当component updated的时候发生with children
//unbind(el, binding, vnode)当directive removed的时候发生
Vue.directive('highlight',{
    bind(el, binding, vnode){
        //el.style.backgroundColor = 'green';
        //el.style.backgroundColor = binding.value;
        
        var delay = 0;
        
        if(binding.modifiers['delayed']){
            delay = 3000;
        }
        
        setTimeout(() => {
            if(binding.arg == 'background'){
                el.style.backgroundColor = binding.value;
            } else {
                el.style.color = binding.value;
            }
        },delay);
        
        
    }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
