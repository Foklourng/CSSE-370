
const e = React.createElement;

function CurrentDate()
{
    var date = new Date();
    console.log("Date is " + date.getDay());
    document.getElementById('d').innerHTML =  (date.getMonth() +1) +"/"+ date.getDate() +"/"+ date.getFullYear();
}

function but(){
    return e(
    'button',
    { onClick: ()=> CurrentDate()},
    'Print Current Date'
    );
}
const domContainer = document.querySelector('#button_container');
ReactDOM.render(e(but), domContainer);