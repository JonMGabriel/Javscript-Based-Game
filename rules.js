// <script type="text/javascript">

// </script>
// ^^^^ David - Uneeded in js file

var temp = function(){
    // console.log("This is temporary");
    alert("TEMP FUNC");
};

var $body = document.querySelectorAll('body');

var $ruleButton = document.getElementById('rule_check');
$ruleButton.addEventListener('click', temp);

// David - ^^^^^^^^^^^ for the event listener, we need to make it so that only once the element is made
    //does it try to add the event listener
        //window.onload?
        //document DOM ready - onload?
    // or move <script> to bottom of html document
    
    function reveal (image) {
        /* function takes in an image (hidden with CSS) and produces the image revealed
        without blocked out CSS*/
        
        // still need to write this
    };
    
    // on click the image is revealed
    document.getElementById("lion").addEventListener("click", reveal);
    
    /* need to set a rule that no more than two images can be revealed
    at the same time */
    
    /* also need to implement a short delay if an incorrect guess is made */