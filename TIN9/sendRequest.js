function send() {
    const fnum = document.forms.calculations.fnum.value
    const snum = document.forms.calculations.snum.value
    const operation = document.forms.calculations.operation.value

    let xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.open("POST", "http://127.0.0.1:3000/calculations", true);
    xmlHttpRequest.setRequestHeader("Content-Type", "application/json");
    xmlHttpRequest.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            document.getElementById("result")
                .innerText = JSON.parse(this.responseText).result
        }
    }
    xmlHttpRequest.send(JSON.stringify({
        fnum,
        snum,
        operation
    }))
}