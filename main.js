const items = []

function addItem() {
    const itemName = document.querySelector("#item").value

    if (itemName === "") {
        alert("Digite um item válido!")
        return
    }
        
    const item = {
        name: itemName,
        checked: false
    }

    items.push(item)

    document.querySelector("#item").value = ""

    showItemsList()
}

function showItemsList() {
    const sectionList = document.querySelector(".list")
    sectionList.textContent = ""

    items.map((item, index) => { 
        sectionList.innerHTML += `
            <div class="item">
                <div>
                    <input type="checkbox" name="list" id="item-${index}" ${item.checked && "checked"}>
                    
                    <div class="custom-checkbox" onclick="checkItem('${item.name}')">
                        <img src="./assets/checked.svg" alt="checked">
                    </div>
                    <label for="${index}" onclick="checkItem('${item.name}')">${item.name}</label>
                </div>

                <button onclick="removeItem('${item.name}')">
                    <img src="./assets/trash-icon.svg" alt="trash icon">
                </button>
            </div>
        `
    })
}

function removeItem(itemName) {
    const itemIndex = items.findIndex((item) => item.name === itemName)

    if (itemIndex !== -1) {
        items.splice(itemIndex, 1)
    }

    showItemsList()
    showWarning()

}

function checkItem(itemName) {
    const item = items.find((item) => item.name === itemName)
    item.checked = !item.checked
    showItemsList()
}

function showWarning() {
    const warning = document.querySelector(".warning")
    warning.classList.remove("hide-warning")


    // Essa parte do código é opcional ja que definimos que a mensagem
    // é apagada manualmente quis implentar pois achei legal
    
    setTimeout(() => {
        warning.classList.add("hide-warning")
    }, 5000)

}