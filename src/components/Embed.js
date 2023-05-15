export default function Embed() {
    const talent = "Batch 46 Stage II"

    function sayHello() {
        return "Full Stack Developer, dan nantinya jadi programmer handal"
    }

    return (
        <div>
            <h1>Halo, {talent} , Selamat datang di kelas {sayHello()}</h1>
        </div>
    )
}

