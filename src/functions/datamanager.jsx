
import data from "../data/pulse_shape.json";


export function downloadCsv(csvData, filename) {
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', filename);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
};

export function jsonToCsv(json) {
    const csvRows = [];
    const headers = Object.keys(json[0]);
    csvRows.push(headers.join(','));

    for (const row of json) {
        const values = headers.map(header => {
            const escaped = ('' + row[header]).replace(/"/g, '\\"');
            return `"${escaped}"`;
        });
        csvRows.push(values.join(','));
    }

    return csvRows.join('\n');
};

export function getBursts(filter = 'None', sort = '') {
    let out = [];

    if (filter === "None") {
        out.push(...data);
    } else {
        out = filterBurst(data, filter);
    }


    return out;
}

function filterBurst(data, filter) {
    const out = [];  // Properly declare `out` here

    data.forEach((burst) => {
        if (burst.Verify.includes(filter)) {  // Assumes `burst.Verify` is a string or array
            out.push(burst);
        }
    });
    return out;
}

//SORT ANY JSON FILE BY A CERTAIN CATAGORY USING MERGE SORT
export function sortLowHigh(json, by) {
    // Base case: if the array has 1 or no elements, it's already sorted
    if (json.length <= 1) {
        return json;
    }

    // Divide the array into two halves
    const mid = Math.floor(json.length / 2);
    const lower = sortLowHigh(json.slice(0, mid), by);
    const higher = sortLowHigh(json.slice(mid), by);

    // Merge the sorted halves
    let i = 0, j = 0;
    const out = [];

    while (i < lower.length || j < higher.length) {
        // Handle cases where one of the arrays is fully traversed
        if (j >= higher.length || (i < lower.length && lower[i][by] <= higher[j][by])) {
            out.push(lower[i]);
            i++;
        } else {
            out.push(higher[j]);
            j++;
        }
    }

    return out;
}

export function sortHighLow(json, by) {
    // Base case: if the array has 1 or no elements, it's already sorted
    if (json.length <= 1) {
        return json;
    }

    // Divide the array into two halves
    const mid = Math.floor(json.length / 2);
    const lower = sortHighLow(json.slice(0, mid), by);
    const higher = sortHighLow(json.slice(mid), by);

    // Merge the sorted halves
    let i = 0, j = 0;
    const out = [];

    while (i < lower.length || j < higher.length) {
        // Handle cases where one of the arrays is fully traversed
        if (j >= higher.length || (i < lower.length && lower[i][by] >= higher[j][by])) {
            out.push(lower[i]);
            i++;
        } else {
            out.push(higher[j]);
            j++;
        }
    }

    return out;
}



