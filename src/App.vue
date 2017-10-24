<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Build-in Directives</h1>
                <p v-text="'some text'"></p>
                <p v-html="'<strong>some strong text</strong>'"></p>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives</h1>
                <p v-highlight:background.delayed="'red'">ddd</p>
                <p v-local-highlight:background.delayed.blink="{mainColor: 'red', secondColor: 'green', delay:500}">local</p>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directive Exercise</h1>
                <button v-customOn:click="clicked">Click Me</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'local-highlight': {
                bind(el, binding, vnode){
                    var delay = 0;
        
                    if(binding.modifiers['delayed']){
                        delay = 3000;
                    }
                    
                    if(binding.modifiers['blink']){
                        let mainColor = binding.value.mainColor;
                        let secondColor = binding.value.secondColor;
                        let currentColor = mainColor;
                        
                        setTimeout(() => {
                            setInterval(()=> {
                                currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;
                                if(binding.arg == 'background'){
                                    el.style.backgroundColor = currentColor;
                                } else {
                                    el.style.color = currentColor;
                                }
                                
                            }, 1000);
                        },binding.value.delay);
                    } else {
                        setTimeout(() => {
                            if(binding.arg == 'background'){
                                el.style.backgroundColor = binding.value.mainColor;
                            } else {
                                el.style.color = binding.value.mainColor;
                            }
                        },binding.value.delay);
                    }

                    
                }
            },
            customOn: {
                
                bind(el, binding){
//                    el.onclick = function(){
//                        binding.value();
//                    }
                    
                    const type = binding.arg;
                    const fn = binding.value;
                    el.addEventListener(type, fn);
                }
            }
        },
        methods: {
            clicked(){
                alert('I was clicked');
            }
        }
    }
</script>

<style>

</style>
