//const mqtt = require('mqtt')
const API_URL = 'http://localhost:5000/api';
var lights = [{location:"Room1",status:"off"}, {location:"Room2",status:"off"},{location:"Room3",status:"off"},{location:"Room4",status:"off"} ];

localStorage.setItem('lights', JSON.stringify(lights));
var room;

function find(status,class_name){
   

   if(class_name.match(".room1"))
   {
      room = "ROOM1";
      topic = "/room1"
      for(var i = 0; i<lights.length; i++)
      {
           if(lights[i].location.match("Room1"))
           {
               
            const body = {
                 room,
                status,
                topic
                };
                 lights[i].status = status;
                 $.post(`${API_URL}/devices`, body)
                        .then(response => {
                        location.href = '/';
                        })
                        .catch(error => {
                        console.error(`Error: ${error}`);
                        });
                          
              
           }
      }
   }
   else if(class_name.match(".room2"))
   {
      room = "ROOM2";
      topic = "/room2"
      for(var i = 0; i<lights.length; i++)
      {
           if(lights[i].location.match("Room2"))
           {
                  const body = {
                     room,
                     status,
                     topic
                  };
                  lights[i].status = status;
                  $.post(`${API_URL}/devices`, body)
                  .then(response => {
                  location.href = '/';
                  })
                  .catch(error => {
                  console.error(`Error: ${error}`);
                  });
                    
                           
              
           }
      }
   }
   else if(class_name.match(".room3"))
   {
      room = "ROOM3";
      topic = "/room3"
      for(var i = 0; i<lights.length; i++)
      {
         const body = {
            room,
           status, 
           topic
         }; 
          if(lights[i].location.match("Room3"))
           {
                 lights[i].status = status;
                 $.post(`${API_URL}/devices`, body)
                 .then(response => {
                 location.href = '/';
                 })
                 .catch(error => {
                 console.error(`Error: ${error}`);
                 });       
              
           }
      }
   }
   else if(class_name.match(".room4"))
   {
      room = "ROOM4";
      topic = "room4"
      for(var i = 0; i<lights.length; i++)
      {
           if(lights[i].location.match("Room4"))
           {
            const body = {
               room,
            status,
            topic
            };
            lights[i].status = status;
            $.post(`${API_URL}/devices`, body)
            .then(response => {
            //location.href = '/';
            })
            .catch(error => {
            console.error(`Error: ${error}`);
            }); 
                          
              
           }
      }
   }
    
   
      
}

function change(class_name, source){
   document.querySelector(`${class_name}`).src = `${source}`; 
   let status;
   
   if(source.match('images/yellowbulb.png'))
   {
      
      status = "on";
   }
   else{
      
      status = "off";
   }
   find(status,class_name);
   

    
}



 


