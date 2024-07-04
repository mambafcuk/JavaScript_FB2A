// Block Scope
{
    function One(){
        var name = "kartik"
        function Two(){
            var website = "Welcome to the newer version"
        }
        // console.log(website);
        Two()
    }
    // console.log(name)
    One()
}