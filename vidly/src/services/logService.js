
function init(){
console.info("RMK-Vidly:Initializing Log service")
}

function error(err){
    console.error("RMK-Vidly:Error:",err);
}

function info(message){
    console.info("RMK-Vidly:Info:",message);
}

module.exports = {
    init, info, error
}