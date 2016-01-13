// <script type="text/javascript">

// </script>
// ^^^^ David - Uneeded in js file

var temp = function(){
    // console.log("This is temporary");
    alert("Added to log: TEMP FUNC");
};
var temp0 = function(ev){
    // console.log("This is temporary");
    alert("Added to log: TEMP FUNC0");
};

var $body = document.querySelectorAll('body');

// document.getElementById('rule_check').addEventListener('click', function(ev){
// alert();})
var $ruleButton = document.getElementById('rule_check');
$ruleButton.addEventListener('click', temp);
// $ruleButton.addEventListener('click', temp0);
// $ruleButton.addEventListener('click', function(ev){
//                                 alert("TEMP FUNC");
//                             });
// document.getElementById('rule_check').addEventListener('click', temp);