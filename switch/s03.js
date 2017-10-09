var dayOfTheWeek = 3;

switch (dayOfTheWeek) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("It's weekday!");
        break;
    case 6:
    case 7:
        console.log("It's wekend!");
        break;
    default:
        console.log("Error! Enter a number between 1 and 7!");
        break;
}