// code your solution here

function superbowlWin(record) {
    
    const win = record.find(entry => entry.result === "W");

    return win ? win.year : undefined;
}

