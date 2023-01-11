const topDiv = document.createElement(`div`);
const botDiv = document.createElement(`div`);
const topArray = ["Rad 1", "Rad 2", "Rad 3", "Rad 4", "Rad 5"];
document.body.append(topDiv);
document.body.append(botDiv);

botDiv.style.border = "2px solid black";
botDiv.style.padding= "50px";
botDiv.style.display= "flex";
botDiv.style.justifyContent= "space-around";

for (let i = 0; i< topArray.length; i++){
    const row = document.createElement("p");
    topDiv.append(row);
    let hue = (140 + i*20);

    row.innerText = topArray[i];
    row.style.backgroundColor = `hsl(${hue}, 60%, 80%)`;
    row.style.color= `hsl(200, 100%, 50%)`;
    row.style.fontSize = `${15+i*6}px`;
    row.style.textAlign = "center"
}

const columnArray1 = [0,1,2,3,4,5,6,7,8,9];
const columnArray2 = [9,8,7,6,5,4,3,2,1,0];
const columnArray3 = ["ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio", "tio"]

createColumn(0, 4, "left", columnArray1);
createColumn(1, 1, "center", columnArray2);
createColumn(0, 5, "right", columnArray3);

function createColumn(colorChange, romoveBackroundAt, textAlignment, columnArray){
    const columnDiv = document.createElement("div");
    botDiv.append(columnDiv);

    columnDiv.style.padding = "10px";
    columnDiv.style.backgroundColor= `hsl(200, 40%, 80%)`;

    for (let i = 0; i< 10; i++){
        const row = document.createElement("p");
        columnDiv.append(row);

        row.innerText = columnArray[i];
        row.style.textAlign = textAlignment;
        row.style.margin= "0px";
        row.style.padding="5px";
        row.style.width="50px";

        if((i%2) === colorChange){
            row.style.backgroundColor= "black";
            row.style.color= "white";
        }else{
            row.style.backgroundColor= "white";
        }
        
        if (i==romoveBackroundAt){
            row.style.backgroundColor= `hsl(200, 40%, 80%)`;
        }
    }
}