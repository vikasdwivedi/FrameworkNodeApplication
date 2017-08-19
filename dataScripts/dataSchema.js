export const schema = {
    "type":"object",
    "properties":{
        "countries":{
            "type":"array",
            "minItems": 3,
            "maxItems":5,
            "items":{
            "type":"object",
            "properties":{
                "id":{
                    "type":"number",
                    "unique":true,
                    "minimum":1
                },
                "country":{
                    "type":"string",
                    "faker":"name.firstName"
                },
                "capital":{
                    "type":"string",
                    "faker": "name.lastName"
                }, 
            },
            required :['id', 'country', 'capital']
        }
    }
},
required:['countries']
}