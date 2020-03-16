import './skeleton.css'
const SKELETON_KEY = 'SKELETON_KEY'
const SKELETON_RAW_DATA = 'SKELETON_RAW_DATA'
function loadingElm(el){
    const status = el.getAttribute('sk-status');
    if(status === 'loading'){
        const node = el[SKELETON_KEY];
        el.innerHTML = node;
    }
    if(status === 'loaded'){
        el.innerHTML = el[SKELETON_RAW_DATA];
    }
}
export default {
    install(Vue){
        Vue.directive('skeleton', {
            inserted: function (el, binding, vnode) {
                Vue.nextTick(() => {
                    const color = binding.value;
                    const { width, height } = el.getBoundingClientRect();
                    const computedStyle = window.getComputedStyle(el);
                    const lineHeight = parseInt(computedStyle.lineHeight);
                    const fontSize = parseInt(computedStyle.fontSize);
                    const paddingLeft = parseInt(computedStyle.paddingLeft)
                    const paddingRight = parseInt(computedStyle.paddingRight)
                    const paddingTop = parseInt(computedStyle.paddingTop)
                    const paddingBottom = parseInt(computedStyle.paddingBottom)
                    let lines = Math.floor((height- paddingTop - paddingBottom)/ lineHeight);
                    const widthActual = width - paddingLeft - paddingRight;
                    const nodeElem = `<span class="skeleton" ${color} style="display:inline-block;width:${widthActual}px;height:${fontSize}px;"></span>`
                    let node = nodeElem;
                    while (lines > 1) {
                        node += nodeElem;
                        lines --;
                    }
                    el[SKELETON_KEY] = node;
                    el[SKELETON_RAW_DATA] = el.innerHTML;

                    loadingElm(el);
                })

            },
            update: function (el, binding, vnode){
                loadingElm(el);
            },
        })
    }
}