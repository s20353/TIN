const parseFormJSON = () => {
    const left = document.getElementById('leftOperand').value;
    const right = document.getElementById('rightOperand').value;
    const operator = document.getElementById('operator').value;

    const obj = { left: left, right: right, operator: operator };
    return JSON.stringify(obj);
};

const outputResult = (text) => {
    document.getElementById('result').textContent = text;
};


document.getElementById('btnSubmit').addEventListener('click',
    (event) => {
        outputResult('');
        const xhr = new XMLHttpRequest();
        const jsonFile = parseFormJSON();

        console.log(jsonFile);

        xhr.open('POST', 'http://localhost:8000/');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const jsonObj = JSON.parse(xhr.responseText);
                console.log('Received from server: ', jsonObj);
                outputResult(jsonObj.result);
            }
        };
        xhr.send(jsonFile);

        event.preventDefault();
    }, true);
