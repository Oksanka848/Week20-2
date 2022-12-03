
window.addEventListener('click', function(event) {
    const target = event.target; // what you clicked on
    if(target.className !== 'star-rating__ico') {
        return; // not a <div>, stop the function
    }
    target.addClass( ".star-rating__ico:checked" );
    
    // color is set then clear it, otherwise set to 'red'
}); 

/*.addClass( ".star-rating__ico:checked" );
const content = target.style.content;
    
    target.style.content = content? '' : '\f005'; */
    const note = document.querySelector('.note');
    css(note, {
        'background-color': 'yellow',
        color: 'red'
    });
    const target = event.target; // what you clicked on
    event.target = document.querySelector('.star-rating__ico');
    event.target.style.color= "red";
    let data = {target};
    this.localStorage.setItem('formData',JSON.stringify(data));


    localStorage.setItem('formData',JSON.stringify(data));           
              const getFormdata = (key) => {  
                return localStorage.getItem(key);    }
                const formData = JSON.parse(getFormdata ('formData'));
                const vehicleValues = Array.from('event.target');
                const vehicle = vehicleValues.map((item) => item);
      const data = { vehicle };
      localStorage.setItem('formData',JSON.stringify(data));           
      const getFormdata = (key) => {  
        return localStorage.getItem(key);    }
        const formData = JSON.parse(getFormdata ('formData'));
