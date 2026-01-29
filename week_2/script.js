let thisArray = [1, 4, 7, 10, 2, 8, 3, 9];
const initialDisplay = document.getElementById('initial-array-display');
const outputBox = document.getElementById('output');

function displayOutput(message, arrayToShow = thisArray) {
    outputBox.textContent = message + JSON.stringify(arrayToShow);
    initialDisplay.textContent = JSON.stringify(thisArray);
}

function useMap() {
    const doubledArray = thisArray.map(item => item * 2);
    displayOutput("Array after map() (doubled): ", doubledArray);
}

function useFilter() {
    const filteredArray = thisArray.filter(item => item > 7);
    displayOutput("Array after filter() (> 7): ", filteredArray);
}

function useForEach() {
    let logMessage = "forEach() results (check console and UI): \n";
    thisArray.forEach((item, index) => {
        console.log(`Index ${index}: ${item}`);
        logMessage += `Index ${index}: ${item}\n`;
    });
    outputBox.textContent = logMessage;
}

function usePush() {
    thisArray.push(1024);
    displayOutput("Array after push(1024): ");
}

function usePop() {
    const removedItem = thisArray.pop();
    displayOutput(`Array after pop() (removed ${removedItem}): `);
}

function useReduce() {
    const reduceItem = thisArray.reduce((total, thisArray) => total + thisArray, 0);
    displayOutput(`Array after reduce() (index ${reduceItem}): `);
    console.log(reduceItem);
}

function useSplice() {
    thisArray.splice(1, 1, 49);
    displayOutput("Array after splice(added 49): ");
}

function useSlice() {
    const sliceItem = thisArray.slice(1, 4);
    displayOutput(`Array after slice() (index ${sliceItem}): `);
}

function useIndexOf() {
    const indexItem = thisArray.indexOf(8);
    displayOutput(`Array after indexOf(8) (index ${indexItem}): `);
}

function useIncludes() {
    const includesItem = thisArray.includes(49);
    displayOutput(`Array after includes(49), (Check Console and UI for Results) \n (index ${includesItem}): `);
    console.log(includesItem);
}

function resetArray() {
    thisArray = [1, 4, 7, 10, 2, 8, 3, 9];
    displayOutput("Array has been reset: ");
}

window.onload = () => {
    resetArray();
};