interface DataItem {
        parentNode?: number|null;
        value: string;
        children: number[];
        index: number;
        visited?: boolean;
}
interface DataItems extends Array<DataItem>{};

export default function breadFirstSearch(data: DataItems, from: string, to: string): string {
    let foundDestination = [];
    let queue = [];
    if (from === to) {
        return "Your departing location cannot be same as the destination";
    }

    for (let i = 0, len = data.length; i < len; i += 1) {
        if (data[i].value === from) {
            data[i].parentNode = null;
            data[i].visited = true;
            data[i].index = i;
            queue.push(i);
        }
        data[i].visited = false;
        data[i].index = i;
        data[i].parentNode = null;
    }
    // console.log(data[1]);
    while (queue.length) {
        let itemIndex = queue.shift();
        if (data[itemIndex].children) {
            data[itemIndex].children.forEach(function(i) {
                data[i].parentNode = itemIndex;
                if (!data[i].visited && data[i].value !== to) {
                    data[i].visited = true;
                    queue.push(i);
                } else if (data[i].value === to) {
                    data[i].visited = true;
                    data[i].parentNode = itemIndex;
                    foundDestination.push(data[i]);
                }
            });
        }
    }
    let finalPath = [];
    for (let i = 0; i < data.length; i += 1) {
        let destination = foundDestination[0];
        if (destination && destination.parentNode > -1) {
            finalPath.unshift(destination.value);
            foundDestination.push(data[destination.parentNode]);
            foundDestination.shift();
        }
    }
    return finalPath.slice(',').join(' --> ');
}