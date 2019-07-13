var choose = prompt("");

switch(choose) {
    case 'vodka' :
        alert("Не пей водку, помрешь!");
        break;
    case 'beer' :
        alert("Пей поменьше пива!");
        break;
    case 'coffe' :
        alert("Кофеек с утречка");
        break;
    case 'milk' :
        alert("Лучше добавь в кашку");
        break;
    default:
        alert("Выберите кофе/молоко/пиво/водку");
        break;
}