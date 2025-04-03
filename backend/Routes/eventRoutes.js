const express=require('express')
const {Events}=require('../Models/eventModel')

const eventRouter=express.Router()

eventRouter.post('/addEvent', function(request,response){
    console.log('Add Event data from frontend:',request.body)
    Events.insertOne(request.body)
    .then(function(){
        console.log('Data is inserted successfull')
    })
    .catch(function(){
        console.log('Error in insert data')
    })
})

eventRouter.delete('/deleteEvent/:eventid', function(request,response){
    console.log('Event id parameter for delete event:',request.body)
    
    Events.deleteOne({_id: request.params.eventid})
    .then(function(){
        console.log('Event Data deleted successfully')
        response.json({message:'Delete Event Successfully',status:true})
    })
    .catch(function(error){
        console.log('Error in delete event:',error)
        response.json({message:'Failed to Delete Event Data',status:false})
    })
})

eventRouter.get('/AllEventData',function(request,response){
    Events.find({})
    .then(function(monkey){
        console.log('Got all event data successfully:',monkey)
        response.json({message:'Fetched all data successfully',status:true,data:monkey})
    })
    .catch(function(error){
        console.log('Error in get all event data:',error)
        response.json({message:'Failed to fetch all data',status:false})
    })
})
eventRouter.put('/Editevent/:event_id',function(request,response){
    console.log('Parameter data(event_id:',request.params)
    console.log('Edit event update data',request.body)
    
    Events.updateOne({__id:request.params.event_id},{$set: request.body})
    .then(function(result){
        console.log('edit result',result)
        response.json({message:'successfully edited', status:true,data:result})
    })
    .catch(function(error){
        console.log('failed to update error',error)
        response.json({message:'failed to  edited', status:false})
    })
})
eventRouter.get('/OneEventDetails/:event_id',function(request,response){
    Events.findOne({__id:request.params.event_id})
    .then(function(result){
        console.log({message:'successfully fetching particuler',status:true,result})
    })
    .catch(function(error){
        console.log({message:'failed to fetching data ',status:false})
    })
})
module.exports={eventRouter}