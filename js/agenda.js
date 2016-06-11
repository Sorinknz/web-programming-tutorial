console.debug('loading.agenda');


function getrow(person) {
    var name = person[0];
    var LastName = person[1];
    var row = '<tr></tr><td>' + name + '</td><td> ' + LastName + '</td><td>0743964295</td></tr>';
    return row;
}
var contacts = [
    ['Nicolae', 'Matei'],
    ['Andrei', 'y'],
    ['Victor', 'x'],
    ['Sebi', 'z'],
    ['Paul', 'c']

];


for (var i = 0; i < contacts.length; i++) {
    var person = contacts[i];
    $('#agenda tbody').append(getrow(person));
}