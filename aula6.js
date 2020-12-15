var a = 10;

try {
    connectaBanco();
    a = a + 1;
    alert(b);
} catch (e) {
    alert('Deu erro: ' + e.message);
} finally {
    console.log("finaly");
}