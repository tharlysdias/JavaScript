var fruta = "pera";

switch (fruta) {
    case "laranja":
        alert("laranja");
        break;
    case "maça":
        alert("maça");
        break;
    case "banana":
        alert("banana");
        break;
    case "uva":
        alert("uva");
        break;
    default:
        throw {nome: "fruta não encontrada"};
}