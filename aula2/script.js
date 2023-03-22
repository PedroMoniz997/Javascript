let lugar = 4;

switch(lugar) {
    case 1:
        console.log("Primeiro Lugar");
        break;
    case 2:
        console.log("Segundo Lugar");
        break;
    case 3:
        console.log("Terceiro Lugar");
        break;
    case 4: case 5: case 6:
        console.log("Parabens você ganhou um prémio de participação");
        break;
    default:
        console.log("Você perdeu a partida obrigado por ter participado");
        break;
}