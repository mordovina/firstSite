<script>
    

    test();
    function test(){
        console.log("Вывод")
    }
    

    setInterval(send, 2000);
    function send() {
        (async() => { 
            var responce = await fetch("http://127.0.0.1:5500/chat.txt"+message);
            var ansver = await responce.text();
            document.getElementById("message").value = "";
        }
    )()
    }

    get();
    setInterval(get, 2000);
    function get() {
        (async () => {
            var responce = await fetch("http://127.0.0.1:5500/chat.txt");
            var ansver = await responce.text();
            document.getElementById("chat").innerText = ansver;
        }
        )
    }
</script>