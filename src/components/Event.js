export default function Event(){
    function sayHello() {
        return alert("Selamat Pagi")
    }

    return (
        <div>
            <h1>Contoh implementasi dari event</h1>
            <button onClick={sayHello} >Click Here</button>
            
            <h1>Contoh implementasi dari event</h1>
            <button onClick={() => sayHello()} >Click Here</button>
            
            <h1>Contoh implementasi dari event</h1>
            <button onClick={() => alert("Test sederhana")} >Click Here</button>

        </div>
    )
}