// <script type="text/javascript">

// </script>
// ^^^^ David - Uneeded in js file

var temp = function(){
    // console.log("This is temporary");
    alert("Added to log: TEMP FUNC");
};

var $body = document.querySelectorAll('body');

var $ruleButton = document.getElementById('rule_check');
$ruleButton.addEventListener('click', temp);

// David - ^^^^^^^^^^^ for the event listener, we need to make it so that only once the element is made
    //does it try to add the event listener
        //window.onload?
        //document DOM ready - onload?
    // or move <script> to bottom of html document