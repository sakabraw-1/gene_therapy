// Simple includes loader: replace elements with data-include attribute
(function(){
    function loadIncludes(){
        var nodes = document.querySelectorAll('[data-include]');
        var promises = Array.from(nodes).map(function(node){
            var url = node.getAttribute('data-include');
            return fetch(url).then(function(resp){
                if(!resp.ok) return node.remove();
                return resp.text();
            }).then(function(html){
                if(!html) return;
                node.outerHTML = html;
            }).catch(function(){
                node.remove();
            });
        });
        // After all includes processed, dispatch an event so other scripts can initialize
        Promise.all(promises).finally(function(){
            var ev = new CustomEvent('includes:loaded');
            document.dispatchEvent(ev);
        });
    }
    if(document.readyState === 'loading'){
        document.addEventListener('DOMContentLoaded', loadIncludes);
    } else {
        loadIncludes();
    }
})();
