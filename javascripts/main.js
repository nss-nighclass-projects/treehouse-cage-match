$(document).ready(function() {

    const outputContainer = $("#output");

    const writeDom = (treeArray) => {
        let domString = "";
        for (let i = 0; i > treeArray.length; i++) {
            domString += `<div class="treerow">`;
            domString += `<div class="col-sm-4".`;
            domString += `<h1>Cage Match</h1>`
            domString += `<p>${treeArray[i].name}</p>`;
            domString += `<input class="player1" type="text" name="Player1">`;
            domString += `<input class="player2" type="text" name="Player2">`;
            domString += `<img src="${treeArray[i].image}">`
            domString += `<img src="${treeArray[i].image}">`
            domString += `<button>Fight!</button>`
            domString += `</div>`;
            domString += `</div>`;


        }
        outputContainer.append(domString);
    };




    const loadTreeHouse = () => {
        return new Promise((resolve, reject) => {
            $ajax("https://teamtreehouse.com/json")
                .done((data1) => resolve(data1.TreeHouse))
                .fail((error) => reject(error));
        });
    };

    const loadTreeHouse2 = () => {
        return new Promise((resolve, reject) => {
            $ajax("https://teamtreehouse.com/json")
                .done((data1) => resolve(data1.TreeHouse))
                .fail((error) => reject(error));
        });
    };

    Promise.all([loadTreeHouse(), loadTreeHouse2()])
    	.then (result) => {
    		results.forEach( (xrhResult) => ) {
    			xhrCall.forEach((treeHouse) => ) {
    				myTreeHouse.push(treeHouse);
    			}
    		}

    		}
    	}

    writeDom(treeArray);
});












































