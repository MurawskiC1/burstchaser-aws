
import data from "../data/pulse_shape.json";
import comments from "../data/comments.json";

export function getBursts(filters, searchQuery, sorting) {
    let updatedData = [...data];

    // Apply filters
    filters.forEach((filter) => {
        updatedData = filterBurst(updatedData, filter, "Verify");
    });

    // Apply search
    if (searchQuery) {
        updatedData = filterBurst(updatedData, searchQuery, "Burst_Name");
    }

    // Apply sorting
    if (sorting.key) {
        updatedData = sort(updatedData, sorting.key, sorting.ascending);
    }

    return updatedData;
};
export function getComments(burstId) {
    let updatedData = [...comments];

    // Apply filters
    if (burstId) {
        updatedData = filter(updatedData, burstId, "comment_focus_id");
    };

    return updatedData;
};

export function filter(data, id, by) {
    const out = [];  // Properly declare `out` here

    data.forEach((comment) => {
        if (comment) {

            if (comment[by] == id) {  // Assumes `burst.Verify` is a string or array
                out.push(comment);
            }
        }

    });
    return out;
}

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



export function filterBurst(data, filter, by) {
    const out = [];  // Properly declare `out` here

    data.forEach((burst) => {
        if (burst[by].includes(filter)) {  // Assumes `burst.Verify` is a string or array
            out.push(burst);
        }
        if (filter == null && burst[by] == '') {
            out.push(burst);
        }
    });
    return out;
}

export function sort(json, by, HighLow = true) {
    // Input validation
    if (!Array.isArray(json)) {
        throw new Error("Input must be an array");
    }
    if (json.length > 0 && !Object.prototype.hasOwnProperty.call(json[0], by)) {
        throw new Error(`Property "${by}" does not exist in JSON objects`);
    }

    // Base case
    if (json.length <= 1) {
        return json;
    }

    // Divide
    const mid = Math.floor(json.length / 2);
    const lower = sort(json.slice(0, mid), by, HighLow);
    const higher = sort(json.slice(mid), by, HighLow);

    // Merge
    const out = [];
    let i = 0, j = 0;

    while (i < lower.length || j < higher.length) {
        if (
            j >= higher.length ||
            (i < lower.length && (
                HighLow
                    ? lower[i][by] >= higher[j][by] // Descending
                    : lower[i][by] <= higher[j][by] // Ascending
            ))
        ) {
            out.push(lower[i]);
            i++;
        } else {
            out.push(higher[j]);
            j++;
        }
    }

    return out;
}

