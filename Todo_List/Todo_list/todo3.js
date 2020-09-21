let ulList = $('#ulList');
let btnadd = $('#btnadd');
let btnclr = $('#btnclr');
let btnsort = $('#btnsort');
let btnreset = $('#btnreset');
let newTask = $('#newTask');

//Add Button
function addItem() {
    let listItem = $('<li>', {
        'class': 'list-group-item',
        text: newTask.val()
    })
    ulList.append(listItem)
    newTask.val('')

    listItem.click(() => {
        listItem.toggleClass('done')
    })
    // console.log(newTask.val())
    // newTask.val('')
    toggleInputButton()
}

newTask.keypress((e) => {
    if(e.which == 13)
        addItem();
})

btnadd.click(addItem)

//Clear Input Button
btnclr.click(() => {
    newTask.val('')
    toggleInputButton()
})

//Clear Done Task Button
function cleanupTask() {
    // $('#ulList .done').remove()
    let x = $('.done')
    x.remove()
    toggleInputButton()
}
btnreset.click(cleanupTask)

// Sort Task Button
btnsort.click(() => {
    let x = $('.done')
    x.appendTo(ulList);
})

//Enabled clear Button
function toggleInputButton() {
    btnclr.prop('disabled', newTask.val() == '')
    btnadd.prop('disabled', newTask.val() == '')
    btnsort.prop('disabled', ulList.children().length() < 1)
    btnreset.prop('disabled', ulList.children().length() < 1)
}

newTask.on('input', toggleInputButton)